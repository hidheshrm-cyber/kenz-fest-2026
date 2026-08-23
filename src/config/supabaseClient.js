import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isCloudConnected = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isCloudConnected
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database Service for Registrations (Cloud + Local Fallback)
const LOCAL_STORAGE_KEY = 'kenz_fest_registrations_v1';

export const dbService = {
  /**
   * Insert a new registration record
   */
  async createRegistration(record) {
    const newEntry = {
      id: crypto.randomUUID ? crypto.randomUUID() : 'id_' + Date.now(),
      reg_id: record.reg_id,
      name: record.name,
      email: record.email,
      phone: record.phone,
      college: record.college,
      dept: record.dept,
      year: record.year,
      event_id: record.event_id,
      event_title: record.event_title,
      event_category: record.event_category || 'Technical',
      status: 'REGISTERED',
      created_at: new Date().toISOString(),
      checked_in_at: null
    };

    // 1. Try Cloud Supabase if configured
    if (isCloudConnected && supabase) {
      try {
        const { data, error } = await supabase
          .from('registrations')
          .insert([newEntry])
          .select()
          .single();

        if (!error && data) {
          this.saveToLocalStorage(data);
          return { success: true, data, isCloud: true };
        }
        console.warn('[dbService] Supabase insert error, falling back to local:', error);
      } catch (err) {
        console.warn('[dbService] Cloud connection failed:', err);
      }
    }

    // 2. Local Persistence
    this.saveToLocalStorage(newEntry);
    return { success: true, data: newEntry, isCloud: false };
  },

  /**
   * Fetch all registrations
   */
  async getAllRegistrations() {
    if (isCloudConnected && supabase) {
      try {
        const { data, error } = await supabase
          .from('registrations')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (err) {
        console.warn('[dbService] Supabase fetch error:', err);
      }
    }

    return this.getFromLocalStorage();
  },

  /**
   * Look up a registration by ID / Reg ID / Email
   */
  async findRegistration(searchQuery) {
    const query = searchQuery.trim().toLowerCase();
    const all = await this.getAllRegistrations();

    return all.find(r => 
      r.reg_id?.toLowerCase() === query ||
      r.email?.toLowerCase() === query ||
      r.id?.toLowerCase() === query ||
      r.name?.toLowerCase().includes(query)
    ) || null;
  },

  /**
   * Check in / Verify a participant ticket
   */
  async checkInRegistration(regId) {
    const timestamp = new Date().toISOString();

    if (isCloudConnected && supabase) {
      try {
        const { data, error } = await supabase
          .from('registrations')
          .update({ status: 'CHECKED_IN', checked_in_at: timestamp })
          .eq('reg_id', regId)
          .select()
          .single();

        if (!error && data) {
          this.updateLocalStorageStatus(regId, timestamp);
          return { success: true, data, isCloud: true };
        }
      } catch (err) {
        console.warn('[dbService] Cloud check-in error:', err);
      }
    }

    const updated = this.updateLocalStorageStatus(regId, timestamp);
    return { success: Boolean(updated), data: updated, isCloud: false };
  },

  // Helpers for Local Storage
  getFromLocalStorage() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  saveToLocalStorage(item) {
    const list = this.getFromLocalStorage();
    const existingIdx = list.findIndex(r => r.reg_id === item.reg_id);
    if (existingIdx >= 0) {
      list[existingIdx] = item;
    } else {
      list.unshift(item);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  },

  updateLocalStorageStatus(regId, timestamp) {
    const list = this.getFromLocalStorage();
    const target = list.find(r => r.reg_id === regId);
    if (target) {
      target.status = 'CHECKED_IN';
      target.checked_in_at = timestamp;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
      return target;
    }
    return null;
  }
};
