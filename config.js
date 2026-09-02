// ============================================================
// CONFIGURATION - LAZISMU PRM GEMPOLPADING
// ============================================================
// Lokasi: GitHub root (prmgempolpading/laporan-lazismu)
// ============================================================

const CONFIG = {
  // ===== APPS SCRIPT URL =====
  // GANTI DENGAN URL WEB APP ANDA!
  APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzjePqInASdQPZr0V3JS9HRq-beqb3bWs4Iq6Pm-W9VGaUnfUmRs8qpxqDstnIcMEGymA/exec',
  
  // ===== CORS PROXY (FALLBACK) =====
  USE_PROXY: true,
  CORS_PROXY: 'https://corsproxy.io/?',
  
  // ===== GITHUB =====
  GITHUB_RAW: 'https://raw.githubusercontent.com/prmgempolpading/laporan-lazismu/main',
  GITHUB_REPO: 'https://github.com/prmgempolpading/laporan-lazismu',
  
  // ===== LOGO =====
  ASSETS: {
    logo: 'logo.png',
    favicon: 'logo.png'
  },
  
  // ===== WARNA THEME =====
  COLORS: {
    primary: '#1E3A5F',
    secondary: '#F58220',
    primaryDark: '#152B45',
    primaryLight: '#3A5F8A',
    secondaryDark: '#C46A1A',
    secondaryLight: '#FAA94C',
    success: '#2ECC71',
    warning: '#F1C40F',
    danger: '#E74C3C',
    info: '#3498DB',
    bg: '#F5F7FA',
    cardBg: '#FFFFFF',
    text: '#2C3E50',
    textLight: '#7F8C8D',
    chartColors: [
      '#1E3A5F', '#F58220', '#2ECC71', '#E74C3C', '#3498DB',
      '#9B59B6', '#1ABC9C', '#E67E22', '#34495E', '#16A085',
      '#27AE60', '#2980B9', '#8E44AD', '#D35400', '#2C3E50'
    ],
    sheetColors: [
      '#1E3A5F', '#F58220', '#2ECC71', '#E74C3C', '#3498DB',
      '#9B59B6', '#1ABC9C', '#E67E22', '#34495E', '#16A085'
    ]
  },
  
  // ===== PAGINATION =====
  PAGINATION: {
    itemsPerPage: 20,
    maxButtons: 7
  },
  
  // ===== AUTO REFRESH =====
  AUTO_REFRESH: {
    enabled: true,
    interval: 300000,
    onFocus: true,
    onReconnect: true
  },
  
  // ===== FORMAT =====
  FORMAT: {
    currency: 'Rp',
    date: 'DD MMMM YYYY',
    locale: 'id-ID'
  },
  
  // ===== FEATURES =====
  FEATURES: {
    darkMode: true,
    exportData: true,
    printReport: true,
    keyboardShortcuts: true
  }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function formatRupiah(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return 'Rp 0';
  }
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

function formatDateIndonesia(date) {
  if (!date) return '-';
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return String(date);
    return d.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  } catch (e) {
    return String(date);
  }
}

function getSheetColor(index) {
  const colors = CONFIG.COLORS.sheetColors;
  return colors[index % colors.length];
}

// Export untuk browser
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
  window.formatRupiah = formatRupiah;
  window.formatDateIndonesia = formatDateIndonesia;
  window.getSheetColor = getSheetColor;
}

console.log('✅ Config loaded successfully!');
console.log('📊 Repository:', CONFIG.GITHUB_REPO);
console.log('🔗 Apps Script:', CONFIG.APP_SCRIPT_URL);
