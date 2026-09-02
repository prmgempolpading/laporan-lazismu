// ============================================================
// CONFIGURATION - LAZISMU PRM GEMPOLPADING
// ============================================================
// Lokasi: GitHub root (prmgempolpading/laporan-lazismu)
// ============================================================

const CONFIG = {
  // ===== APPS SCRIPT URL =====
  APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzNMfUt6hB8aVfCvUmAZ1UwmtDJxns3fLB_4W9xBVvG4tDW_HybM2suMA09cQTEzcf-/exec',
  
  // ===== GITHUB REPO =====
  GITHUB_RAW: 'https://raw.githubusercontent.com/prmgempolpading/laporan-lazismu/main',
  GITHUB_REPO: 'https://github.com/prmgempolpading/laporan-lazismu',
  
  // ===== LOGO & ASSETS =====
  ASSETS: {
    logo: 'logo.png',
    favicon: 'logo.png',
    watermark: 'logo.png',
    defaultBg: 'assets/bg-default.png'
  },
  
  // ===== WARNA THEME =====
  COLORS: {
    primary: '#1E3A5F',
    secondary: '#F58220',
    primaryDark: '#152B45',
    primaryLight: '#3A5F8A',
    secondaryDark: '#C46A1A',
    secondaryLight: '#FAA94C',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #F58220 100%)',
    gradientLight: 'linear-gradient(135deg, #3A5F8A 0%, #FAA94C 100%)',
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
      '#27AE60', '#2980B9', '#8E44AD', '#D35400', '#2C3E50',
      '#C0392B', '#1E8449', '#2471A3', '#6C3483', '#D4AC0D'
    ],
    sheetColors: [
      '#1E3A5F', '#F58220', '#2ECC71', '#E74C3C', '#3498DB',
      '#9B59B6', '#1ABC9C', '#E67E22', '#34495E', '#16A085',
      '#27AE60', '#2980B9', '#8E44AD', '#D35400', '#2C3E50'
    ]
  },
  
  // ===== PAGINATION =====
  PAGINATION: {
    itemsPerPage: 20,
    maxButtons: 7,
    showTotal: true,
    showInfo: true
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
    currencySymbol: 'Rp',
    date: 'DD MMMM YYYY',
    dateShort: 'DD/MM/YYYY',
    time: 'HH:mm',
    datetime: 'DD MMMM YYYY HH:mm',
    locale: 'id-ID',
    numberFormat: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    }
  },
  
  // ===== ANIMASI =====
  ANIMATIONS: {
    enabled: true,
    duration: 300,
    delay: 100,
    easing: 'ease-in-out'
  },
  
  // ===== DASHBOARD =====
  DASHBOARD: {
    cards: [
      { id: 'totalMasuk', title: 'Total Kas Masuk', icon: 'fa-arrow-down', color: 'primary' },
      { id: 'totalKeluar', title: 'Total Kas Keluar', icon: 'fa-arrow-up', color: 'secondary' },
      { id: 'totalSaldo', title: 'Total Saldo Akhir', icon: 'fa-wallet', color: 'success' },
      { id: 'totalDonatur', title: 'Total Donatur', icon: 'fa-users', color: 'info' }
    ],
    charts: {
      bar: { enabled: true, title: '📊 Perbandingan per Sheet', type: 'bar' },
      pie: { enabled: true, title: '🧩 Distribusi Saldo', type: 'doughnut' },
      line: { enabled: true, title: '📈 Trend Bulanan', type: 'line' }
    }
  },
  
  // ===== FEATURES =====
  FEATURES: {
    darkMode: true,
    exportData: true,
    printReport: true,
    fullScreen: true,
    keyboardShortcuts: true
  }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getLogoForSheet(sheetName) {
  if (!sheetName) return CONFIG.ASSETS.logo;
  const fileName = sheetName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `${CONFIG.GITHUB_RAW}/assets/logo-${fileName}.png`;
}

function getBackgroundForSheet(sheetName) {
  if (!sheetName) return CONFIG.ASSETS.defaultBg;
  const fileName = sheetName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `${CONFIG.GITHUB_RAW}/assets/bg-${fileName}.png`;
}

function getSheetColor(index) {
  const colors = CONFIG.COLORS.sheetColors;
  return colors[index % colors.length];
}

function getSheetGradient(index) {
  const colors = CONFIG.COLORS.chartColors;
  const c1 = colors[index % colors.length];
  const c2 = colors[(index + 1) % colors.length];
  return `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
}

function formatRupiah(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return 'Rp 0';
  }
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

function formatDateIndonesia(date) {
  if (!date) return '-';
  const d = new Date(date);
  if (isNaN(d.getTime())) return String(date);
  return d.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

function isNumeric(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === 'number') return true;
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^0-9,.]/g, '').replace(/,/g, '.');
    return !isNaN(parseFloat(cleaned)) && isFinite(cleaned);
  }
  return false;
}

function parseNumber(value) {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^0-9,.]/g, '').replace(/,/g, '.');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

// Export untuk browser
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
  window.getLogoForSheet = getLogoForSheet;
  window.getBackgroundForSheet = getBackgroundForSheet;
  window.getSheetColor = getSheetColor;
  window.getSheetGradient = getSheetGradient;
  window.formatRupiah = formatRupiah;
  window.formatDateIndonesia = formatDateIndonesia;
  window.isNumeric = isNumeric;
  window.parseNumber = parseNumber;
}

console.log('✅ Config loaded successfully!');
console.log('📊 Repository:', CONFIG.GITHUB_REPO);
