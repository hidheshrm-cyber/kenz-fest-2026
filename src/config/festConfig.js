import { FEST_EVENTS } from './eventsData.js';

export const FEST_CONFIG = {
  name: "KEN'Z FEST",
  shortName: "KEN'Z FEST",
  tagline: "The Ultimate Technological Frontier",
  edition: "National Level Tech Fest",
  dates: "2026 EDITION",
  targetDate: "2026-08-28T09:00:00+05:30",
  workshopDates: "28 & 29 AUGUST 2026",
  workshopGoogleForm: "https://docs.google.com/forms/d/e/1FAIpQLScgj6AHs-k67GCQabAmgboEKioVPxKR_7l9nGGvd-cNoT0ujA/viewform?usp=header",
  datesFormatted: {
    day1: "Day 1",
    day2: "Day 2 (Workshop: 28 & 29 Aug)"
  },
  institution: {
    name: "KONGUNADU COLLEGE OF ENGINEERING AND TECHNOLOGY",
    shortName: "KNCET",
    logo: "/assets/kncet_college_logo.png",
    affiliation: "Autonomous Institution | Approved by AICTE, Affiliated to Anna University, Chennai",
    accreditation: "Accredited by NBA & NAAC with 'A' Grade",
    location: "Namakkal - Trichy Main Road, Thottiam, Tiruchirappalli, Tamil Nadu - 621215",
    coordinates: "11.0827° N, 78.4344° E",
    website: "https://kongunadu.ac.in",
    contactEmail: "kenz@kongunadu.ac.in",
    helpline: "+91 94432 12345 / +91 98421 67890"
  },
  mascot: {
    name: "Cyber Pink Panther",
    theme: "Futuristic 3D Cybernetic Ambassador",
    accentColor: "#ff2a85",
    secondaryColor: "#00f0ff",
    videoBg: "/assets/intro_video_seamless.mp4",
    officialLogo: "/assets/kenz_fest_logo.png",
    emblemLogo: "/assets/kenz_fest_logo.png",
    heroImage: "/assets/mascot_cyberpunk_hero.jpg",
    presentingImage: "/assets/pink_panther_presenting.png",
    actionImage: "/assets/mascot_action_pose.jpg",
    ogBanner: "/assets/og_social_banner.jpg",
    eventsBg: "/assets/events_section_bg.jpg",
    angles: [
      { id: "front", label: "FRONT VIEW", src: "/assets/front.png", angle: "0°", camera: { x: 0, y: 1.5, z: 4.5 } },
      { id: "front34", label: "3/4 FRONT", src: "/assets/front34.png", angle: "45°", camera: { x: 2.8, y: 1.6, z: 3.2 } },
      { id: "hero", label: "CYBER CITY", src: "/assets/mascot_cyberpunk_hero.jpg", angle: "HERO", camera: { x: 0, y: 0.5, z: 3.8 } },
      { id: "action", label: "MATRIX LAB", src: "/assets/mascot_action_pose.jpg", angle: "LAB", camera: { x: -2.5, y: 1.8, z: 3.0 } },
      { id: "emblem", label: "CYBER BADGE", src: "/assets/kenz_fest_logo.png", angle: "LOGO", camera: { x: 0, y: 1.8, z: 2.2 } },
      { id: "side", label: "SIDE PROFILE", src: "/assets/side.png", angle: "90°", camera: { x: 4.2, y: 1.4, z: 0.5 } },
      { id: "back34", label: "3/4 REAR", src: "/assets/back34.png", angle: "225°", camera: { x: -2.8, y: 1.6, z: -3.2 } },
      { id: "back", label: "REAR VIEW", src: "/assets/back.png", angle: "180°", camera: { x: 0, y: 1.5, z: -4.5 } }
    ]
  },
  stats: [
    { value: "₹80,000+", label: "CASH PRIZE POOL" },
    { value: "7+", label: "MAIN EVENT TRACKS" },
    { value: "1,500+", label: "EXPECTED PARTICIPANTS" },
    { value: "50+", label: "COLLEGES NATIONWIDE" }
  ],
  mainEvents: FEST_EVENTS
};
