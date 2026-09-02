// ============================================================
// KONFIGURASI DASHBOARD LAZIZMU
// ============================================================

const CONFIG = {
    // ============ WEB APP URL ============
    // ISI DENGAN URL WEB APP ANDA SETELAH DEPLOY
    WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbzEyyJx_Gs0e1VjnVV03Fzunadsc3kmeD1htVGkGhywyJXr-E7vsFjgiPcrmfcbOaKyFQ/exec',
    
    // ============ TIMEOUT & RETRY ============
    FETCH_TIMEOUT: 30000,
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000,
    
    // ============ REFRESH INTERVAL ============
    REFRESH_INTERVAL: 60000, // 1 menit
    
    // ============ TEMA & WARNA ============
    COLORS: {
        primary: '#2C3E50',
        secondary: '#3498DB',
        success: '#27AE60',
        danger: '#E74C3C',
        warning: '#F39C12',
        info: '#1ABC9C',
        purple: '#8E44AD',
        orange: '#E67E22'
    },
    
    // ============ KONFIGURASI GRAFIK ============
    CHART_CONFIG: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: { size: 12, weight: '600' }
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    },
    
    // ============ KONFIGURASI TABEL ============
    TABLE_CONFIG: {
        rowsPerPage: 50,
        enableSearch: true,
        enableSort: true
    },
    
    // ============ FORMAT ============
    FORMAT: {
        currency: 'IDR',
        locale: 'id-ID',
        dateFormat: 'dd MMMM yyyy',
        timeFormat: 'HH:mm:ss'
    }
};

// ============================================================
// FUNGSI UTILITY
// ============================================================

function formatRupiah(angka) {
    if (angka === undefined || angka === null || isNaN(angka)) {
        return 'Rp 0';
    }
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}

function formatRupiahShort(angka) {
    if (angka === undefined || angka === null || isNaN(angka)) {
        return 'Rp0';
    }
    if (angka >= 1000000000) {
        return 'Rp' + (angka / 1000000000).toFixed(1) + 'M';
    }
    if (angka >= 1000000) {
        return 'Rp' + (angka / 1000000).toFixed(1) + 'Jt';
    }
    if (angka >= 1000) {
        return 'Rp' + (angka / 1000).toFixed(1) + 'K';
    }
    return 'Rp' + angka;
}

function formatDate(date) {
    if (!date) return '-';
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return '-';
        return d.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch {
        return '-';
    }
}

function formatTime(date) {
    if (!date) return '-';
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return '-';
        return d.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch {
        return '-';
    }
}

function formatDateTime(date) {
    return formatDate(date) + ' ' + formatTime(date);
}

function safeParseFloat(value) {
    if (value === undefined || value === null || value === '') return 0;
    const parsed = parseFloat(value.toString().replace(/,/g, ''));
    return isNaN(parsed) ? 0 : parsed;
}

function truncateText(text, length = 50) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}
