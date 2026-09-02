// ============================================
// CONFIGURATION - Lazizmu PRM Gempolpading
// Simpan di: assets/js/config.js
// ============================================

const CONFIG = {
  // ===== APPS SCRIPT URL =====
  // GANTI DENGAN URL WEB APP ANDA
  // Cara dapat: Deploy > New deployment > Web app > Copy URL
  APP_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz4gErTvIMA9lCG1TMR4s_NU48roMM8knwH2TVS0nOwMA2bKK74y4SbYBPWKregtYnKYw/exec',
  
  // ===== GITHUB REPO =====
  GITHUB_RAW: 'https://raw.githubusercontent.com/prmgempolpading/laporan-lazismu/main',
  
  // ===== LOGO PATH =====
  LOGO: {
    main: 'assets/logo-lazizmu.png',
    favicon: 'assets/favicon.ico',
    watermark: 'assets/watermark.png',
    // Background per sheet: assets/bg-[sheetname].png
    // Logo per sheet: assets/logo-[sheetname].png
  },
  
  // ===== WARNA THEME =====
  COLORS: {
    primary: '#1E3A5F',     // Biru Lazizmu
    secondary: '#F58220',    // Oren Lazizmu
    primaryLight: '#3A5F8A',
    secondaryLight: '#FAA94C',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #F58220 100%)',
    gradientLight: 'linear-gradient(135deg, #3A5F8A 0%, #FAA94C 100%)',
    
    // Warna untuk card/chart
    chartColors: [
      '#1E3A5F', '#F58220', '#2ECC71', '#E74C3C', 
      '#3498DB', '#9B59B6', '#1ABC9C', '#E67E22',
      '#34495E', '#16A085', '#27AE60', '#2980B9'
    ],
    
    status: {
      success: '#2ECC71',
      warning: '#F1C40F',
      danger: '#E74C3C',
      info: '#3498DB'
    }
  },
  
  // ===== PAGINATION =====
  PAGINATION: {
    itemsPerPage: 20,
    maxButtons: 5
  },
  
  // ===== AUTO REFRESH =====
  AUTO_REFRESH: {
    enabled: true,
    interval: 300000, // 5 menit
    onFocus: true // Refresh saat tab aktif
  },
  
  // ===== FORMAT =====
  FORMAT: {
    currency: 'Rp',
    date: 'DD MMMM YYYY',
    locale: 'id-ID',
    numberFormat: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  },
  
  // ===== ANIMASI =====
  ANIMATIONS: {
    enabled: true,
    duration: 300,
    delay: 100
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
      bar: true,
      pie: true,
      line: true
    }
  }
};

// ===== HELPER FUNCTIONS =====
function getLogoForSheet(sheetName) {
  // Coba cari logo spesifik untuk sheet
  const fileName = sheetName.toLowerCase().replace(/\s+/g, '-');
  return `${CONFIG.GITHUB_RAW}/assets/logo-${fileName}.png`;
}

function getBackgroundForSheet(sheetName) {
  const fileName = sheetName.toLowerCase().replace(/\s+/g, '-');
  return `${CONFIG.GITHUB_RAW}/assets/bg-${fileName}.png`;
}

function getSheetColor(index) {
  const colors = CONFIG.COLORS.chartColors;
  return colors[index % colors.length];
}

function getGradientForSheet(index) {
  const colors = CONFIG.COLORS.chartColors;
  const c1 = colors[index % colors.length];
  const c2 = colors[(index + 1) % colors.length];
  return `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
}
