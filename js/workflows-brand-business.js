/**
 * Brand & Business Workflows - Extended Workflows for Magic Studio Ultra
 * Workflows 36-50: Brand Strategy, Industry-Specific, Business Tools
 * Compatible with: Kosmetik, Fashion, Skincare, F&B, UMKM, Kemasan, dll
 */

const BrandBusinessWorkflows = {

    // ═══════════════════════════════════════════════════════════════
    // 🏢 BRAND & BUSINESS STRATEGY (36-41)
    // ═══════════════════════════════════════════════════════════════

    'brand-strategy': {
        name: 'Brand Strategy Generator',
        icon: '🎯',
        category: 'branding',
        description: 'Complete brand foundation for any business type',
        output: 'Full brand strategy package',
        models: 'Gemini 2.5 Pro + Web Research',
        difficulty: 'advanced',
        estimatedTime: '25-35 min',
        popular: true,
        industries: ['Kosmetik', 'Fashion', 'Skincare', 'F&B', 'UMKM', 'Kemasan'],
        fields: [
            { id: 'business_name', type: 'text', label: 'Nama Bisnis/Brand', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Fashion', 'Skincare', 'F&B (Makanan)', 'F&B (Minuman)', 'Kemasan', 'Aksesoris', 'Home & Living', 'Health & Wellness', 'UMKM Lainnya'], required: true },
            { id: 'product_type', type: 'text', label: 'Jenis Produk Spesifik', required: true },
            { id: 'target_market', type: 'textarea', label: 'Deskripsi Target Market', required: true },
            { id: 'price_point', type: 'select', label: 'Price Point', options: ['Budget (< 100rb)', 'Mid-range (100rb-500rb)', 'Premium (500rb-2jt)', 'Luxury (> 2jt)'], required: true },
            { id: 'unique_value', type: 'textarea', label: 'Apa yang membuat produk Anda berbeda?', required: true },
            { id: 'competitors', type: 'text', label: 'Kompetitor Utama (pisah koma)', required: false },
            { id: 'business_goals', type: 'select', label: 'Goal Utama', options: ['Brand Awareness', 'Sales Growth', 'Market Expansion', 'Product Launch', 'Rebranding'], required: true },
            { id: 'budget_range', type: 'select', label: 'Budget Range', options: ['Bootstrap (< 5jt)', 'Starter (5-20jt)', 'Growth (20-100jt)', 'Scale (> 100jt)'], required: true }
        ],
        assetUploads: [
            { id: 'reference_docs', type: 'document', label: 'Dokumen Referensi', required: false },
            { id: 'competitor_images', type: 'image', label: '[REFERENCE] Gambar Kompetitor', required: false },
            { id: 'inspiration', type: 'image', label: '[REFERENCE] Inspirasi Visual', required: false }
        ]
    },

    'product-launch-campaign': {
        name: 'Product Launch Campaign',
        icon: '🚀',
        category: 'marketing',
        description: 'Complete product launch strategy + content',
        output: 'Full launch package (pre, launch, post)',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'advanced',
        estimatedTime: '30-45 min',
        popular: true,
        industries: ['All'],
        fields: [
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori', options: ['Skincare', 'Makeup', 'Fashion', 'Food', 'Beverage', 'Accessories', 'Home', 'Health', 'Other'], required: true },
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'launch_date', type: 'text', label: 'Tanggal Launch', placeholder: 'DD/MM/YYYY', required: true },
            { id: 'product_price', type: 'text', label: 'Harga Produk', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'key_benefits', type: 'textarea', label: '3 Benefit Utama', required: true },
            { id: 'unique_selling_point', type: 'text', label: 'Unique Selling Point', required: true },
            { id: 'campaign_budget', type: 'select', label: 'Budget Campaign', options: ['Minimal (< 5jt)', 'Standard (5-20jt)', 'Premium (20-50jt)', 'Enterprise (> 50jt)'], required: true },
            { id: 'launch_offer', type: 'text', label: 'Promo Launch (jika ada)', required: false }
        ],
        assetUploads: [
            { id: 'product_images', type: 'image', label: '[PRODUCT] Foto Produk', required: true, multiple: true },
            { id: 'brand_assets', type: 'image', label: '[LOGO] Logo & Brand Assets', required: false }
        ]
    },

    'ecommerce-content-kit': {
        name: 'E-Commerce Content Kit',
        icon: '🛒',
        category: 'marketing',
        description: 'Marketplace listings for Shopee, Tokopedia, TikTok Shop',
        output: 'Complete e-commerce package',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        popular: true,
        industries: ['All Products'],
        fields: [
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'category', type: 'select', label: 'Kategori', options: ['Fashion', 'Beauty', 'Skincare', 'Food', 'Beverage', 'Electronics', 'Home', 'Health', 'Accessories', 'Other'], required: true },
            { id: 'brand_name', type: 'text', label: 'Nama Brand/Toko', required: true },
            { id: 'price', type: 'text', label: 'Harga Produk', required: true },
            { id: 'variants', type: 'textarea', label: 'Varian Produk (warna, ukuran, dll)', required: false },
            { id: 'key_features', type: 'textarea', label: 'Fitur Utama (min 3)', required: true },
            { id: 'materials', type: 'text', label: 'Bahan/Material', required: false },
            { id: 'target_platforms', type: 'select', label: 'Platform Target', options: ['Shopee', 'Tokopedia', 'Lazada', 'TikTok Shop', 'Instagram Shop', 'All'], required: true },
            { id: 'shipping_location', type: 'text', label: 'Lokasi Pengiriman', required: true }
        ],
        assetUploads: [
            { id: 'product_images', type: 'image', label: '[PRODUCT] Foto Produk (min 5)', required: true, multiple: true },
            { id: 'size_chart', type: 'image', label: '[REFERENCE] Size Chart (fashion)', required: false }
        ]
    },

    'packaging-design': {
        name: 'Packaging Design Generator',
        icon: '📦',
        category: 'branding',
        description: 'Packaging concepts + specs for production',
        output: '3 concepts + technical specs',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'advanced',
        estimatedTime: '20-30 min',
        industries: ['Kosmetik', 'Skincare', 'F&B', 'Fashion', 'UMKM'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori', options: ['Kosmetik', 'Skincare', 'Makanan Ringan', 'Makanan Berat', 'Minuman', 'Fashion', 'Aksesoris', 'Home & Living', 'Health Supplement', 'Lainnya'], required: true },
            { id: 'product_type', type: 'text', label: 'Jenis Produk Spesifik', required: true },
            { id: 'product_size', type: 'text', label: 'Ukuran Produk (ml/gram/pcs)', required: true },
            { id: 'packaging_type', type: 'select', label: 'Tipe Kemasan', options: ['Box/Dus', 'Pouch/Sachet', 'Botol', 'Jar/Pot', 'Tube', 'Standing Pouch', 'Hang Tag', 'Label Sticker', 'Wrapper', 'Custom'], required: true },
            { id: 'target_market', type: 'textarea', label: 'Target Market', required: true },
            { id: 'price_point', type: 'select', label: 'Price Point', options: ['Budget', 'Mid-range', 'Premium', 'Luxury'], required: true },
            { id: 'brand_personality', type: 'select', label: 'Brand Personality', options: ['Modern', 'Minimalist', 'Bold', 'Elegant', 'Playful', 'Natural', 'Professional', 'Youthful'], required: true },
            { id: 'quantity_needed', type: 'select', label: 'Quantity', options: ['100-500', '500-1000', '1000-5000', '5000+'], required: true },
            { id: 'special_requirements', type: 'select', label: 'Special Requirements', options: ['Eco-friendly', 'Halal certified', 'BPOM ready', 'Food-grade', 'Waterproof', 'Premium finishing', 'None'], required: false }
        ],
        assetUploads: [
            { id: 'product_image', type: 'image', label: '[PRODUCT] Foto Produk', required: false },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Kemasan', required: false, multiple: true }
        ]
    },

    'product-catalog': {
        name: 'Product Catalog Generator',
        icon: '📖',
        category: 'marketing',
        description: 'Digital/print catalogs for all products',
        output: 'Complete catalog package',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '20-30 min',
        industries: ['All Products'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Fashion', 'Skincare', 'F&B', 'Aksesoris', 'Home & Living', 'UMKM Lainnya'], required: true },
            { id: 'catalog_type', type: 'select', label: 'Tipe Katalog', options: ['Digital Only', 'Print Only', 'Both Digital & Print'], required: true },
            { id: 'catalog_purpose', type: 'select', label: 'Tujuan Katalog', options: ['Retail Catalog', 'Wholesale/B2B', 'Lookbook', 'Price List', 'Product Menu'], required: true },
            { id: 'product_count', type: 'text', label: 'Jumlah Produk', required: true },
            { id: 'price_display', type: 'select', label: 'Tampilan Harga', options: ['Tampilkan Harga', 'Sembunyikan Harga', 'Range Harga Saja'], required: true },
            { id: 'target_audience', type: 'select', label: 'Target Audience', options: ['End Consumer (B2C)', 'Reseller/Distributor (B2B)', 'Both'], required: true },
            { id: 'language', type: 'select', label: 'Bahasa', options: ['Bahasa Indonesia', 'English', 'Bilingual'], required: true },
            { id: 'style_preference', type: 'select', label: 'Style', options: ['Minimalist', 'Bold & Colorful', 'Elegant Premium', 'Playful', 'Professional'], required: true }
        ],
        assetUploads: [
            { id: 'product_images', type: 'image', label: '[PRODUCT] Foto Produk', required: true, multiple: true },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'product_data', type: 'document', label: 'Data Produk (Excel/CSV)', required: false },
            { id: 'style_reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'competitor-analysis': {
        name: 'Competitor Analysis Generator',
        icon: '🔍',
        category: 'marketing',
        description: 'Comprehensive competitive intelligence',
        output: 'Full analysis report + strategy',
        models: 'Gemini 2.5 Pro + Web Research',
        difficulty: 'advanced',
        estimatedTime: '25-35 min',
        industries: ['All'],
        fields: [
            { id: 'your_brand', type: 'text', label: 'Nama Brand Anda', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Fashion', 'Skincare', 'F&B', 'Aksesoris', 'Home & Living', 'Health & Wellness', 'UMKM Lainnya'], required: true },
            { id: 'product_category', type: 'text', label: 'Kategori Produk Spesifik', required: true },
            { id: 'competitors', type: 'textarea', label: 'Nama Kompetitor (max 5, pisah koma)', required: true },
            { id: 'market_scope', type: 'select', label: 'Scope Market', options: ['Lokal (1 kota)', 'Regional', 'Nasional', 'Asia Tenggara', 'Global'], required: true },
            { id: 'price_segment', type: 'select', label: 'Segmen Harga', options: ['Budget', 'Mid-range', 'Premium', 'Luxury', 'Multi-segment'], required: true },
            { id: 'analysis_focus', type: 'select', label: 'Fokus Analisis', options: ['Pricing Strategy', 'Marketing & Branding', 'Product Features', 'Distribution', 'All Areas'], required: true },
            { id: 'your_strengths', type: 'textarea', label: 'Kelebihan Brand Anda Saat Ini', required: false },
            { id: 'business_goal', type: 'select', label: 'Goal Bisnis', options: ['Increase Market Share', 'Defend Position', 'Enter New Segment', 'Launch New Product', 'Rebrand/Reposition'], required: true }
        ],
        assetUploads: [
            { id: 'competitor_screenshots', type: 'image', label: '[REFERENCE] Screenshot Kompetitor', required: false, multiple: true },
            { id: 'market_data', type: 'document', label: 'Data Market (jika ada)', required: false }
        ]
    }
};

// Export for use in main app
if (typeof window !== 'undefined') {
    window.BrandBusinessWorkflows = BrandBusinessWorkflows;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrandBusinessWorkflows;
}
