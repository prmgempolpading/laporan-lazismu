// ============================================================
// CONFIGURATION - LAZISMU PRM GEMPOLPADING
// ============================================================
// Lokasi: GitHub root (prmgempolpading/laporan-lazismu)
// ============================================================

// ============================================================
// 1. KONFIGURASI UTAMA
// ============================================================

const CONFIG = {
  // ===== APPS SCRIPT URL =====
  // GANTI DENGAN URL WEB APP ANDA!
  // Cara dapat: Deploy > New Deployment > Web App > Copy URL
  APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyg1O6Bh6dVhw0ZmLTnqnKgut-m_LrsVpqFh8ZcWVUcGDFZnCkFuMbLUWaVN2Son0AUWA/exec',
  
  // ===== GITHUB REPO =====
  GITHUB_RAW: 'https://raw.githubusercontent.com/prmgempolpading/laporan-lazismu/main',
  GITHUB_REPO: 'https://github.com/prmgempolpading/laporan-lazismu',
  
  // ===== LOGO & ASSETS =====
  ASSETS: {
    logo: 'logo.png',
    favicon: 'logo.png',
    watermark: 'logo.png',
    defaultBg: 'assets/bg-default.png',
    // Logo per sheet otomatis: assets/logo-[nama-sheet].png
    // Background per sheet otomatis: assets/bg-[nama-sheet].png
  },
  
  // ===== WARNA THEME =====
  COLORS: {
    // Warna Utama
    primary: '#1E3A5F',      // Biru Lazismu
    secondary: '#F58220',    // Oren Lazismu
    primaryDark: '#152B45',
    primaryLight: '#3A5F8A',
    secondaryDark: '#C46A1A',
    secondaryLight: '#FAA94C',
    
    // Gradien
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #F58220 100%)',
    gradientLight: 'linear-gradient(135deg, #3A5F8A 0%, #FAA94C 100%)',
    gradientDark: 'linear-gradient(135deg, #152B45 0%, #C46A1A 100%)',
    
    // Status
    success: '#2ECC71',
    warning: '#F1C40F',
    danger: '#E74C3C',
    info: '#3498DB',
    
    // Background
    bg: '#F5F7FA',
    cardBg: '#FFFFFF',
    text: '#2C3E50',
    textLight: '#7F8C8D',
    
    // Chart Colors (20 warna)
    chartColors: [
      '#1E3A5F', '#F58220', '#2ECC71', '#E74C3C', '#3498DB',
      '#9B59B6', '#1ABC9C', '#E67E22', '#34495E', '#16A085',
      '#27AE60', '#2980B9', '#8E44AD', '#D35400', '#2C3E50',
      '#C0392B', '#1E8449', '#2471A3', '#6C3483', '#D4AC0D'
    ],
    
    // Warna untuk card per sheet
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
    interval: 300000, // 5 menit (dalam milidetik)
    onFocus: true,    // Refresh saat tab aktif
    onReconnect: true // Refresh saat koneksi kembali
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
    },
    currencyFormat: {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
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
      { 
        id: 'totalMasuk', 
        title: 'Total Kas Masuk', 
        icon: 'fa-arrow-down', 
        color: 'primary',
        description: 'Total pemasukan keseluruhan'
      },
      { 
        id: 'totalKeluar', 
        title: 'Total Kas Keluar', 
        icon: 'fa-arrow-up', 
        color: 'secondary',
        description: 'Total pengeluaran keseluruhan'
      },
      { 
        id: 'totalSaldo', 
        title: 'Total Saldo Akhir', 
        icon: 'fa-wallet', 
        color: 'success',
        description: 'Sisa saldo keseluruhan'
      },
      { 
        id: 'totalDonatur', 
        title: 'Total Donatur', 
        icon: 'fa-users', 
        color: 'info',
        description: 'Jumlah donatur unik'
      }
    ],
    charts: {
      bar: {
        enabled: true,
        title: '📊 Perbandingan per Sheet',
        type: 'bar'
      },
      pie: {
        enabled: true,
        title: '🧩 Distribusi Saldo',
        type: 'doughnut'
      },
      line: {
        enabled: true,
        title: '📈 Trend Bulanan',
        type: 'line'
      }
    }
  },
  
  // ===== TABEL =====
  TABLE: {
    striped: true,
    hover: true,
    bordered: true,
    responsive: true,
    compact: false
  },
  
  // ===== NOTIFIKASI =====
  NOTIFICATIONS: {
    enabled: true,
    duration: 4000,
    position: 'bottom-right'
  },
  
  // ===== FEATURES =====
  FEATURES: {
    darkMode: true,
    exportData: true,
    printReport: true,
    fullScreen: true,
    soundNotifications: false,
    keyboardShortcuts: true
  },
  
  // ===== API =====
  API: {
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000
  }
};

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================

/**
 * Mendapatkan URL logo untuk sheet tertentu
 * @param {string} sheetName - Nama sheet
 * @returns {string} URL logo
 */
function getLogoForSheet(sheetName) {
  if (!sheetName) return CONFIG.ASSETS.logo;
  
  const fileName = sheetName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  // Coba cari logo spesifik
  const specificLogo = `${CONFIG.GITHUB_RAW}/assets/logo-${fileName}.png`;
  
  // Return default jika tidak ada
  return specificLogo;
}

/**
 * Mendapatkan URL background untuk sheet tertentu
 * @param {string} sheetName - Nama sheet
 * @returns {string} URL background
 */
function getBackgroundForSheet(sheetName) {
  if (!sheetName) return CONFIG.ASSETS.defaultBg;
  
  const fileName = sheetName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  const specificBg = `${CONFIG.GITHUB_RAW}/assets/bg-${fileName}.png`;
  
  return specificBg;
}

/**
 * Mendapatkan warna untuk sheet berdasarkan index
 * @param {number} index - Index sheet
 * @returns {string} Warna hex
 */
function getSheetColor(index) {
  const colors = CONFIG.COLORS.sheetColors;
  return colors[index % colors.length];
}

/**
 * Mendapatkan gradien untuk sheet berdasarkan index
 * @param {number} index - Index sheet
 * @returns {string} Gradien CSS
 */
function getSheetGradient(index) {
  const colors = CONFIG.COLORS.chartColors;
  const c1 = colors[index % colors.length];
  const c2 = colors[(index + 1) % colors.length];
  return `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
}

/**
 * Format Rupiah
 * @param {number} amount - Angka
 * @returns {string} Format Rupiah
 */
function formatRupiah(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return 'Rp 0';
  }
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

/**
 * Format Tanggal Indonesia
 * @param {string|Date} date - Tanggal
 * @returns {string} Format tanggal
 */
function formatDateIndonesia(date) {
  if (!date) return '-';
  
  const d = new Date(date);
  if (isNaN(d.getTime())) return String(date);
  
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };
  
  return d.toLocaleDateString('id-ID', options);
}

/**
 * Cek apakah string adalah angka
 * @param {*} value - Nilai yang dicek
 * @returns {boolean} true jika angka
 */
function isNumeric(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === 'number') return true;
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^0-9,.]/g, '').replace(/,/g, '.');
    return !isNaN(parseFloat(cleaned)) && isFinite(cleaned);
  }
  return false;
}

/**
 * Parse angka dari string
 * @param {*} value - Nilai yang diparse
 * @returns {number} Angka
 */
function parseNumber(value) {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const cleaned = value.replace(/[^0-9,.]/g, '').replace(/,/g, '.');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

// ============================================================
// 3. EXPORT CONFIG
// ============================================================

// Untuk browser
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

// Untuk Node.js / module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CONFIG,
    getLogoForSheet,
    getBackgroundForSheet,
    getSheetColor,
    getSheetGradient,
    formatRupiah,
    formatDateIndonesia,
    isNumeric,
    parseNumber
  };
}

console.log('✅ Config loaded successfully!');
console.log('📊 Repository:', CONFIG.GITHUB_REPO);
console.log('🔗 Apps Script:', CONFIG.APP_SCRIPT_URL);
