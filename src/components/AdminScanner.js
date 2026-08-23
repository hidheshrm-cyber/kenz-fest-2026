import { FEST_CONFIG } from '../config/festConfig.js';
import { dbService, isCloudConnected } from '../config/supabaseClient.js';
// Audio removed
import { Html5Qrcode } from 'html5-qrcode';

let html5QrCode = null;
let isScanning = false;

export function renderAdminScanner() {
  return `
    <div id="admin-view" style="display: none; min-height: 100vh; background: var(--bg-dark); padding: 30px 20px; position: relative; z-index: 200;">
      <div class="container" style="max-width: 1100px;">
        
        <!-- Admin Top HUD Header -->
        <div class="cyber-panel cyber-hud-bracket" style="padding: 20px 28px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 44px; height: 44px; border-radius: 8px; overflow: hidden; background: #000; box-shadow: 0 0 16px var(--neon-pink-glow);">
              <img src="${FEST_CONFIG.mascot.officialLogo}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <h1 style="font-family: var(--font-cyber); font-size: 1.25rem; font-weight: 900; color: #fff; margin: 0;">
                  ADMIN VERIFICATION PORTAL
                </h1>
                <span class="cyber-badge" style="font-size: 0.65rem;">STAGE ACCESS</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-cyan);">
                DATABASE: ${isCloudConnected ? 'SUPABASE CLOUD SYNCED' : 'LOCAL CACHE ACTIVE (HYBRID BaaS)'}
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button id="admin-export-btn" class="btn-cyber-cyan" style="padding: 8px 16px; font-size: 0.75rem; display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>EXPORT TO CSV</span>
            </button>
            <button id="admin-refresh-btn" class="btn-cyber-outline" style="padding: 8px 16px; font-size: 0.75rem;">
              REFRESH DATA
            </button>
            <button id="admin-exit-btn" class="btn-cyber-primary" style="padding: 8px 20px; font-size: 0.75rem;">
              EXIT TO MAIN SITE
            </button>
          </div>
        </div>

        <!-- Metrics Row -->
        <div id="admin-metrics-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px;">
          <div class="cyber-panel" style="padding: 20px; border-color: var(--border-glow);">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">TOTAL REGISTERED</span>
            <div id="metric-total" style="font-family: var(--font-cyber); font-size: 2.2rem; font-weight: 900; color: #fff;">0</div>
          </div>
          <div class="cyber-panel" style="padding: 20px; border-color: var(--border-cyan-glow);">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">CHECKED IN (VERIFIED)</span>
            <div id="metric-checked-in" style="font-family: var(--font-cyber); font-size: 2.2rem; font-weight: 900; color: var(--neon-cyan);">0</div>
          </div>
          <div class="cyber-panel" style="padding: 20px; border-color: rgba(255, 255, 255, 0.1);">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">PENDING CHECK-IN</span>
            <div id="metric-pending" style="font-family: var(--font-cyber); font-size: 2.2rem; font-weight: 900; color: var(--pink-accent);">0</div>
          </div>
        </div>

        <!-- Scanner & Search Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px; margin-bottom: 36px;">
          
          <!-- Camera Scanner Column -->
          <div class="cyber-panel cyber-hud-bracket" style="padding: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: #fff; margin: 0;">
                LIVE CAMERA QR SCANNER
              </h3>
              <button id="toggle-camera-btn" class="btn-cyber-cyan" style="padding: 6px 14px; font-size: 0.72rem;">
                START CAMERA
              </button>
            </div>

            <!-- Video Camera Viewport -->
            <div id="qr-reader" style="width: 100%; min-height: 280px; border-radius: 10px; overflow: hidden; background: #000; border: 1px solid var(--border-subtle); position: relative; display: flex; align-items: center; justify-content: center;">
              <div id="qr-placeholder" style="text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.8rem; padding: 20px;">
                [CAMERA OFFLINE // CLICK 'START CAMERA' TO SCAN]
              </div>
            </div>
            
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-top: 12px; text-align: center;">
              Point participant QR Pass toward camera for instant scanning
            </div>
          </div>

          <!-- Manual Lookup & Scan Result Column -->
          <div class="cyber-panel cyber-hud-bracket" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            
            <div>
              <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: #fff; margin-bottom: 16px;">
                MANUAL REG ID LOOKUP
              </h3>

              <!-- Search Bar -->
              <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <input type="text" id="admin-search-input" placeholder="e.g. KENZ-2026-123456 or email" style="flex: 1; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-family: var(--font-mono); font-size: 0.88rem; outline: none;" />
                <button id="admin-search-btn" class="btn-cyber-primary" style="padding: 12px 20px; font-size: 0.78rem;">
                  VERIFY
                </button>
              </div>

              <!-- Result Status Container -->
              <div id="scan-result-card" style="padding: 20px; border-radius: 10px; background: rgba(255, 42, 133, 0.05); border: 1px solid var(--border-subtle); min-height: 180px; display: flex; align-items: center; justify-content: center;">
                <div style="text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">
                  Waiting for QR Scan or Search Input...
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Registered Participants Table -->
        <div class="cyber-panel" style="padding: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <h3 style="font-family: var(--font-cyber); font-size: 1.2rem; color: #fff; margin: 0;">
              ALL REGISTRATIONS DIRECTORY
            </h3>
            <input type="text" id="admin-table-filter" placeholder="Filter by name, track, or college..." style="padding: 8px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; font-size: 0.82rem; font-family: var(--font-mono); min-width: 250px; outline: none;" />
          </div>

          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.82rem;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-glow); text-align: left; color: var(--neon-cyan);">
                  <th style="padding: 12px 8px;">REG ID</th>
                  <th style="padding: 12px 8px;">NAME</th>
                  <th style="padding: 12px 8px;">TRACK</th>
                  <th style="padding: 12px 8px;">COLLEGE</th>
                  <th style="padding: 12px 8px;">STATUS</th>
                  <th style="padding: 12px 8px; text-align: right;">ACTION</th>
                </tr>
              </thead>
              <tbody id="admin-table-body">
                <!-- Dynamic Registration Rows -->
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initAdminScanner() {
  const adminView = document.getElementById('admin-view');
  const mainApp = document.querySelector('main');
  const nav = document.getElementById('main-header');
  const footer = document.querySelector('footer');

  function showAdmin() {
    if (adminView && mainApp && nav && footer) {
      mainApp.style.display = 'none';
      nav.style.display = 'none';
      footer.style.display = 'none';
      adminView.style.display = 'block';
      refreshAdminData();
    }
  }

  function hideAdmin() {
    if (adminView && mainApp && nav && footer) {
      stopCamera();
      adminView.style.display = 'none';
      mainApp.style.display = 'block';
      nav.style.display = 'block';
      footer.style.display = 'block';
      window.location.hash = '';
    }
  }

  // Check URL Hash for #admin
  if (window.location.hash === '#admin') {
    showAdmin();
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
      showAdmin();
    } else if (adminView && adminView.style.display === 'block') {
      hideAdmin();
    }
  });

  // Buttons
  document.getElementById('admin-exit-btn')?.addEventListener('click', hideAdmin);
  document.getElementById('admin-refresh-btn')?.addEventListener('click', refreshAdminData);

  // Camera Toggle
  document.getElementById('toggle-camera-btn')?.addEventListener('click', toggleCamera);

  // Search Button
  document.getElementById('admin-search-btn')?.addEventListener('click', () => {
    const query = document.getElementById('admin-search-input')?.value;
    if (query) handleVerification(query);
  });

  document.getElementById('admin-search-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      if (query) handleVerification(query);
    }
  });

  // Table Filter
  document.getElementById('admin-table-filter')?.addEventListener('input', (e) => {
    filterTableRows(e.target.value);
  });

  // CSV Export Trigger
  document.getElementById('admin-export-btn')?.addEventListener('click', async () => {
    await exportRegistrationsCSV();
  });
}

// Export All Registered Attendees to CSV / Excel
export async function exportRegistrationsCSV() {
  cyberAudio.playClickBeep();
  const list = await dbService.getAllRegistrations();

  if (!list || list.length === 0) {
    alert("No registrations available to export yet. Register attendees first!");
    return;
  }

  const headers = [
    "Reg ID",
    "Full Name",
    "Email Address",
    "Phone Number",
    "College / Institution",
    "Department",
    "Year of Study",
    "Event Track ID",
    "Event Title",
    "Team Members",
    "Status",
    "Registration Timestamp"
  ];

  const escapeCSV = (val) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = list.map(r => [
    escapeCSV(r.reg_id),
    escapeCSV(r.name),
    escapeCSV(r.email),
    escapeCSV(r.phone),
    escapeCSV(r.college),
    escapeCSV(r.department),
    escapeCSV(r.year),
    escapeCSV(r.event_id),
    escapeCSV(r.event_title),
    escapeCSV(r.team_members),
    escapeCSV(r.status || 'REGISTERED'),
    escapeCSV(r.created_at)
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const downloadAnchor = document.createElement('a');
  
  const timestamp = new Date().toISOString().slice(0, 10);
  downloadAnchor.href = url;
  downloadAnchor.setAttribute('download', `KENZ_FEST_2026_Registrations_${timestamp}.csv`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(url);
}

// 1. Refresh Metrics & Directory Table
export async function refreshAdminData() {
  const list = await dbService.getAllRegistrations();
  const totalEl = document.getElementById('metric-total');
  const checkedInEl = document.getElementById('metric-checked-in');
  const pendingEl = document.getElementById('metric-pending');
  const tbody = document.getElementById('admin-table-body');

  const checkedInCount = list.filter(r => r.status === 'CHECKED_IN').length;
  const pendingCount = list.length - checkedInCount;

  if (totalEl) totalEl.innerText = list.length;
  if (checkedInEl) checkedInEl.innerText = checkedInCount;
  if (pendingEl) pendingEl.innerText = pendingCount;

  if (tbody) {
    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 24px; text-align: center; color: var(--text-muted);">
            No registrations found in database yet. Submit a test registration from the home page!
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(reg => `
      <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05); transition: background 0.2s;" class="admin-row" data-search="${(reg.name + ' ' + reg.reg_id + ' ' + reg.college + ' ' + reg.event_title).toLowerCase()}">
        <td style="padding: 12px 8px; color: var(--neon-pink); font-weight: 700;">${reg.reg_id}</td>
        <td style="padding: 12px 8px; color: #fff; font-weight: 600;">${reg.name}</td>
        <td style="padding: 12px 8px; color: var(--neon-cyan);">${reg.event_title}</td>
        <td style="padding: 12px 8px; color: var(--text-secondary); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${reg.college}</td>
        <td style="padding: 12px 8px;">
          <span class="${reg.status === 'CHECKED_IN' ? 'cyber-badge-cyan' : 'cyber-badge'}" style="font-size: 0.68rem;">
            ${reg.status}
          </span>
        </td>
        <td style="padding: 12px 8px; text-align: right;">
          ${reg.status === 'CHECKED_IN' ? `
            <span style="color: var(--neon-cyan); font-size: 0.75rem;">VERIFIED</span>
          ` : `
            <button class="btn-cyber-primary checkin-table-btn" data-reg-id="${reg.reg_id}" style="padding: 4px 12px; font-size: 0.7rem;">
              CHECK IN
            </button>
          `}
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.checkin-table-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const regId = btn.getAttribute('data-reg-id');
        await performCheckIn(regId);
      });
    });
  }
}

// 2. Camera QR Scanning Logic
async function toggleCamera() {
  const btn = document.getElementById('toggle-camera-btn');
  const placeholder = document.getElementById('qr-placeholder');

  if (isScanning) {
    stopCamera();
    if (btn) btn.innerText = 'START CAMERA';
    if (placeholder) placeholder.style.display = 'block';
  } else {
    try {
      if (placeholder) placeholder.style.display = 'none';
      if (!html5QrCode) {
        html5QrCode = new Html5Qrcode('qr-reader');
      }

      await html5QrCode.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          this.scanFeedback.style.opacity = '1';
          handleVerification(decodedText);
        },
        () => {}
      );

      isScanning = true;
      if (btn) btn.innerText = 'STOP CAMERA';
    } catch (err) {
      console.warn('[AdminScanner] Camera start error:', err);
      alert('Camera access could not be started. You can still verify tickets using the Manual ID Search box!');
    }
  }
}

function stopCamera() {
  if (html5QrCode && isScanning) {
    html5QrCode.stop().then(() => {
      isScanning = false;
      const btn = document.getElementById('toggle-camera-btn');
      if (btn) btn.innerText = 'START CAMERA';
    }).catch(() => {});
  }
}

// 3. Verification Handler
async function handleVerification(qrText) {
  let regId = qrText.trim();
  // If QR contains JSON or URL payload, extract reg_id
  if (regId.includes('KENZ-2026-')) {
    const match = regId.match(/KENZ-2026-\d+/);
    if (match) regId = match[0];
  }

  const record = await dbService.findRegistration(regId);
  const card = document.getElementById('scan-result-card');
  if (!card) return;

  if (!record) {
    card.innerHTML = `
      <div style="text-align: center; color: #ff4d6d;">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 8px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        <div style="font-family: var(--font-cyber); font-size: 1.1rem; font-weight: 800;">TICKET NOT FOUND</div>
        <p style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
          ID "${regId}" is not registered in the database.
        </p>
      </div>
    `;
    return;
  }

  const isAlreadyCheckedIn = record.status === 'CHECKED_IN';

  card.innerHTML = `
    <div style="width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="${isAlreadyCheckedIn ? 'cyber-badge' : 'cyber-badge-cyan'}">
          ${isAlreadyCheckedIn ? 'ALREADY CHECKED IN' : 'VALID TICKET // READY'}
        </span>
        <strong style="color: var(--neon-pink); font-family: var(--font-cyber);">${record.reg_id}</strong>
      </div>

      <div style="font-family: var(--font-cyber); font-size: 1.2rem; color: #fff; font-weight: 800; margin-bottom: 6px;">
        ${record.name}
      </div>

      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--neon-cyan); margin-bottom: 10px;">
        ${record.event_title}
      </div>

      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5;">
        ${record.college} (${record.dept}, ${record.year})<br/>
        Email: ${record.email} | Phone: ${record.phone}
      </div>

      ${isAlreadyCheckedIn ? `
        <div style="padding: 10px; border-radius: 6px; background: rgba(255, 42, 133, 0.1); border: 1px solid var(--border-subtle); color: var(--pink-accent); font-family: var(--font-mono); font-size: 0.78rem; text-align: center;">
          Checked in at: ${new Date(record.checked_in_at).toLocaleTimeString()}
        </div>
      ` : `
        <button id="btn-confirm-checkin" class="btn-cyber-cyan" style="width: 100%; justify-content: center; padding: 12px; font-size: 0.85rem;">
          CONFIRM PARTICIPANT CHECK-IN
        </button>
      `}
    </div>
  `;

  document.getElementById('btn-confirm-checkin')?.addEventListener('click', async () => {
    await performCheckIn(record.reg_id);
  });
}

// 4. Perform Check-In Action
async function performCheckIn(regId) {
  await dbService.checkInRegistration(regId);
  await refreshAdminData();
  await handleVerification(regId);
}

// 5. Table Filter Helper
function filterTableRows(query) {
  const q = query.toLowerCase().trim();
  const rows = document.querySelectorAll('.admin-row');
  rows.forEach(row => {
    const searchData = row.getAttribute('data-search') || '';
    if (!q || searchData.includes(q)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
