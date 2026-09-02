// ============================================================
// KONFIGURASI DASHBOARD LAZIZMU
// ============================================================

const CONFIG = {
    // ============ WAJIB DIISI ============
    // URL Web App setelah deploy di Apps Script
    // Contoh: https://script.google.com/macros/s/AKfycbxyz123/exec
    WEB_APP_URL: 'YOUR_WEB_APP_URL_HERE',
    
    // ============ TEMA & WARNA ============
    COLORS: {
        primary: '#2C3E50',
        secondary: '#3498DB',
        success: '#27AE60',
        danger: '#E74C3C',
        warning: '#F39C12',
        info: '#1ABC9C',
        light: '#ECF0F1',
        dark: '#2C3E50',
        purple: '#8E44AD',
        orange: '#E67E22',
        teal: '#1ABC9C'
    },
    
    // ============ REFRESH INTERVAL ============
    REFRESH_INTERVAL: 60000, // 1 menit (dalam milidetik)
    
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
                    font: {
                        size: 12,
                        weight: '600'
                    }
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

// Format Rupiah
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

// Format Rupiah dengan desimal (untuk grafik)
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

// Format Tanggal Indonesia
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

// Format Waktu
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

// Format Tanggal + Waktu
function formatDateTime(date) {
    return formatDate(date) + ' ' + formatTime(date);
}

// Nama Bulan
function getMonthName(month) {
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                   'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return months[month - 1] || month;
}

// Nama Hari
function getDayName(day) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return days[day] || day;
}

// Random Color (untuk grafik)
function getRandomColor() {
    const colors = [
        '#3498DB', '#E74C3C', '#F39C12', '#27AE60', '#8E44AD',
        '#1ABC9C', '#E67E22', '#2ECC71', '#9B59B6', '#34495E',
        '#16A085', '#C0392B', '#2980B9', '#D35400', '#7F8C8D'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Truncate text
function truncateText(text, length = 50) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

// Parse angka dengan aman
function safeParseFloat(value) {
    if (value === undefined || value === null || value === '') return 0;
    const parsed = parseFloat(value.toString().replace(/,/g, ''));
    return isNaN(parsed) ? 0 : parsed;
}

// Debounce function untuk performance
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
