/**
 * Industry-Specific Workflows - Extended Workflows for Magic Studio Ultra
 * Workflows 42-50: Influencer, UMKM, F&B, Fashion, Skincare, Testimonial, etc.
 * Compatible with: Kosmetik, Fashion, Skincare, F&B, UMKM, Kemasan, dll
 */

const IndustrySpecificWorkflows = {

    // ═══════════════════════════════════════════════════════════════
    // 📣 MARKETING & PROMOTION (42, 47, 49)
    // ═══════════════════════════════════════════════════════════════

    'influencer-brief': {
        name: 'Influencer Brief Generator',
        icon: '🤝',
        category: 'marketing',
        description: 'Complete influencer campaign package',
        output: 'Brief + templates + scripts',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        popular: true,
        industries: ['All'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_name', type: 'text', label: 'Nama Produk untuk Campaign', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Skincare', 'Fashion', 'F&B', 'Aksesoris', 'Home & Living', 'Health & Wellness', 'UMKM Lainnya'], required: true },
            { id: 'campaign_objective', type: 'select', label: 'Objective', options: ['Brand Awareness', 'Product Launch', 'Sales/Conversion', 'Engagement', 'User Generated Content'], required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'budget_range', type: 'select', label: 'Budget', options: ['< 5 Juta', '5-15 Juta', '15-50 Juta', '50-100 Juta', '> 100 Juta'], required: true },
            { id: 'influencer_tier', type: 'select', label: 'Tier Influencer', options: ['Nano (1K-10K)', 'Micro (10K-100K)', 'Macro (100K-1M)', 'Mega (1M+)', 'Mixed'], required: true },
            { id: 'platform_focus', type: 'select', label: 'Platform', options: ['Instagram', 'TikTok', 'YouTube', 'Twitter/X', 'Multi-platform'], required: true },
            { id: 'content_type', type: 'select', label: 'Tipe Konten', options: ['Review', 'Tutorial', 'Unboxing', 'Lifestyle/OOTD', 'Challenge', 'Giveaway'], required: true },
            { id: 'campaign_duration', type: 'select', label: 'Durasi Campaign', options: ['1 Minggu', '2 Minggu', '1 Bulan', '3 Bulan', 'Ongoing'], required: true },
            { id: 'key_messages', type: 'textarea', label: 'Pesan Utama', required: true }
        ],
        assetUploads: [
            { id: 'product_images', type: 'image', label: '[PRODUCT] Foto Produk', required: false, multiple: true },
            { id: 'brand_assets', type: 'image', label: '[LOGO] Logo & Brand Assets', required: false },
            { id: 'reference_content', type: 'image', label: '[REFERENCE] Referensi Konten', required: false, multiple: true }
        ]
    },

    'testimonial-social-proof': {
        name: 'Testimonial & Social Proof',
        icon: '⭐',
        category: 'marketing',
        description: 'Social proof content from customer reviews',
        output: 'Polished testimonials + visuals',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        industries: ['All'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Skincare', 'Fashion', 'F&B', 'Jasa', 'Home & Living', 'Health', 'UMKM Lainnya'], required: true },
            { id: 'product_service', type: 'text', label: 'Produk/Jasa Utama', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'key_benefits', type: 'textarea', label: 'Manfaat Utama (yang sering disebut customer)', required: true },
            { id: 'testimonial_count', type: 'text', label: 'Jumlah Testimonial yang Dimiliki', required: false },
            { id: 'testimonial_source', type: 'select', label: 'Sumber Testimonial', options: ['WhatsApp Chat', 'Instagram DM', 'Marketplace Review', 'Google Review', 'Email', 'Mixed'], required: true },
            { id: 'content_goal', type: 'select', label: 'Goal Konten', options: ['Build Trust', 'Overcome Objections', 'Increase Conversion', 'Social Media Content', 'Website Content'], required: true },
            { id: 'ugc_interest', type: 'select', label: 'UGC Campaign?', options: ['Yes - Want UGC Campaign', 'No - Just Testimonials', 'Maybe Later'], required: true }
        ],
        assetUploads: [
            { id: 'testimonial_screenshots', type: 'image', label: '[REFERENCE] Screenshot Testimonial', required: false, multiple: true },
            { id: 'customer_photos', type: 'image', label: '[FACE] Foto Customer (dengan izin)', required: false, multiple: true },
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk', required: false }
        ],
        textInputs: [
            { id: 'raw_testimonials', type: 'textarea', label: 'Testimonial Mentah dari Customer', placeholder: 'Paste screenshot text atau ketik testimonial yang sudah ada', required: false }
        ]
    },

    'event-promotion-kit': {
        name: 'Event & Promotion Kit',
        icon: '🎉',
        category: 'marketing',
        description: 'Complete event marketing materials',
        output: 'Posters + social media + copy',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '20-25 min',
        industries: ['All'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'event_type', type: 'select', label: 'Tipe Event', options: ['Product Launch', 'Sale/Promo', 'Bazaar/Pop-up', 'Workshop', 'Webinar/Online Event', 'Grand Opening', 'Anniversary', 'Giveaway', 'Meet & Greet', 'Other'], required: true },
            { id: 'event_name', type: 'text', label: 'Nama Event', required: true },
            { id: 'event_date', type: 'text', label: 'Tanggal Event', placeholder: 'DD/MM/YYYY', required: true },
            { id: 'event_time', type: 'text', label: 'Waktu Event', required: true },
            { id: 'venue_platform', type: 'text', label: 'Lokasi/Platform', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Peserta', required: true },
            { id: 'promo_details', type: 'textarea', label: 'Detail Promo/Penawaran', required: false },
            { id: 'registration_required', type: 'select', label: 'Registrasi', options: ['Yes - Free', 'Yes - Paid', 'No - Open Event'], required: true },
            { id: 'ticket_price', type: 'text', label: 'Harga Tiket (jika berbayar)', required: false },
            { id: 'event_highlights', type: 'textarea', label: 'Highlight Event (speaker, performer, dll)', required: false },
            { id: 'event_style', type: 'select', label: 'Style Visual', options: ['Bold & Energetic', 'Elegant & Premium', 'Fun & Playful', 'Professional & Corporate', 'Minimalist & Clean'], required: true }
        ],
        assetUploads: [
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk (jika ada)', required: false },
            { id: 'venue_photos', type: 'image', label: '[REFERENCE] Foto Venue/Lokasi', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Design', required: false }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 🏭 INDUSTRY-SPECIFIC (43-46)
    // ═══════════════════════════════════════════════════════════════

    'umkm-starter-kit': {
        name: 'UMKM Starter Kit',
        icon: '🏪',
        category: 'complete',
        description: 'Complete business starter for new UMKM',
        output: 'Full business starter package',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '25-35 min',
        popular: true,
        industries: ['UMKM', 'All'],
        fields: [
            { id: 'business_name', type: 'text', label: 'Nama Bisnis (kosongkan jika butuh saran)', required: false },
            { id: 'business_type', type: 'select', label: 'Jenis Bisnis', options: ['Makanan', 'Minuman', 'Fashion', 'Aksesoris', 'Kerajinan', 'Jasa', 'Kosmetik', 'Skincare', 'Home & Living', 'Lainnya'], required: true },
            { id: 'product_service', type: 'textarea', label: 'Produk/Jasa yang Dijual', required: true },
            { id: 'target_market', type: 'textarea', label: 'Siapa Target Pembeli Anda?', required: true },
            { id: 'location', type: 'text', label: 'Lokasi Bisnis (kota)', required: true },
            { id: 'budget', type: 'select', label: 'Modal Awal', options: ['< 1 Juta', '1-5 Juta', '5-10 Juta', '10-25 Juta', '> 25 Juta'], required: true },
            { id: 'owner_background', type: 'textarea', label: 'Ceritakan tentang Anda dan kenapa memulai bisnis ini', required: false },
            { id: 'unique_selling', type: 'textarea', label: 'Apa yang membuat produk/jasa Anda berbeda?', required: true },
            { id: 'goals', type: 'select', label: 'Goal Utama', options: ['Jualan Online', 'Buka Toko Fisik', 'Jadi Reseller', 'Brand Sendiri', 'Side Hustle', 'Full-time Business'], required: true },
            { id: 'platforms', type: 'select', label: 'Platform Jualan', options: ['Instagram', 'TikTok', 'Shopee', 'Tokopedia', 'WhatsApp', 'Offline', 'Multi-platform'], required: true }
        ],
        assetUploads: [
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk/Jasa', required: false, multiple: true },
            { id: 'inspiration', type: 'image', label: '[REFERENCE] Inspirasi Brand', required: false, multiple: true }
        ]
    },

    'food-beverage-kit': {
        name: 'Food & Beverage Content Kit',
        icon: '🍔',
        category: 'complete',
        description: 'Complete F&B content package',
        output: 'Photography + menu + social media',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '20-30 min',
        popular: true,
        industries: ['F&B'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand/Usaha', required: true },
            { id: 'business_type', type: 'select', label: 'Tipe Bisnis', options: ['Restoran', 'Cafe', 'Catering', 'Home Industry', 'Snack/Cemilan', 'Minuman', 'Kue & Bakery', 'Frozen Food'], required: true },
            { id: 'product_category', type: 'text', label: 'Kategori Produk (Indonesian food, Western, dll)', required: true },
            { id: 'signature_items', type: 'textarea', label: 'Menu Andalan (pisah dengan koma)', required: true },
            { id: 'price_range', type: 'select', label: 'Range Harga', options: ['Budget (<25rb)', 'Mid (25-50rb)', 'Premium (50-100rb)', 'Fine Dining (>100rb)'], required: true },
            { id: 'target_market', type: 'textarea', label: 'Target Pembeli', required: true },
            { id: 'location', type: 'text', label: 'Lokasi', required: true },
            { id: 'delivery_options', type: 'select', label: 'Delivery Options', options: ['Dine-in Only', 'Takeaway', 'GoFood/GrabFood', 'ShopeeFood', 'Self-delivery', 'All'], required: true },
            { id: 'certifications', type: 'select', label: 'Sertifikasi', options: ['Halal MUI', 'BPOM', 'PIRT', 'None yet', 'Multiple'], required: true },
            { id: 'content_style', type: 'select', label: 'Style Konten', options: ['Homey & Warm', 'Modern & Clean', 'Traditional', 'Playful & Fun', 'Premium & Elegant'], required: true }
        ],
        assetUploads: [
            { id: 'food_photos', type: 'image', label: '[PRODUCT] Foto Makanan/Minuman', required: true, multiple: true },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'fashion-lookbook': {
        name: 'Fashion Lookbook Generator',
        icon: '👗',
        category: 'complete',
        description: 'Complete fashion lookbook + content',
        output: 'Lookbook + descriptions + social',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '25-35 min',
        popular: true,
        industries: ['Fashion'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'fashion_category', type: 'select', label: 'Kategori Fashion', options: ['Hijab/Modest Fashion', 'Streetwear', 'Casual Wear', 'Formal/Office', 'Activewear', 'Kids Fashion', 'Plus Size', 'Unisex'], required: true },
            { id: 'collection_name', type: 'text', label: 'Nama Koleksi', required: true },
            { id: 'season', type: 'select', label: 'Season', options: ['Spring/Summer', 'Fall/Winter', 'Ramadan Collection', 'Lebaran Collection', 'Year-round'], required: true },
            { id: 'target_demographic', type: 'textarea', label: 'Target Market (usia, gaya hidup)', required: true },
            { id: 'price_point', type: 'select', label: 'Price Point', options: ['Budget (<100rb)', 'Mid (100-300rb)', 'Premium (300rb-1jt)', 'Luxury (>1jt)'], required: true },
            { id: 'brand_aesthetic', type: 'select', label: 'Brand Aesthetic', options: ['Minimalist', 'Bold & Colorful', 'Elegant', 'Edgy', 'Bohemian', 'Classic', 'Modern'], required: true },
            { id: 'size_range', type: 'select', label: 'Size Range', options: ['XS-L', 'S-XL', 'XS-XXL', 'Plus Size', 'All Size', 'Custom'], required: true },
            { id: 'product_count', type: 'text', label: 'Jumlah Produk dalam Koleksi', required: true },
            { id: 'lookbook_style', type: 'select', label: 'Lookbook Style', options: ['Editorial High Fashion', 'Lifestyle Casual', 'Catalog Clean', 'Street Style', 'Studio Minimal'], required: true }
        ],
        assetUploads: [
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk Fashion', required: true, multiple: true },
            { id: 'model_face', type: 'image', label: '[FACE] Foto Model (Opsional)', required: false },
            { id: 'style_reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false, multiple: true }
        ]
    },

    'skincare-cosmetic-kit': {
        name: 'Skincare & Cosmetic Kit',
        icon: '💄',
        category: 'complete',
        description: 'Beauty content + BPOM compliance',
        output: 'Content + claims + compliance',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'advanced',
        estimatedTime: '25-35 min',
        popular: true,
        industries: ['Skincare', 'Kosmetik'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori', options: ['Skincare', 'Makeup/Cosmetic', 'Haircare', 'Bodycare', 'Beauty Tools'], required: true },
            { id: 'product_type', type: 'text', label: 'Jenis Produk (serum, moisturizer, lipstick, dll)', required: true },
            { id: 'key_ingredients', type: 'textarea', label: 'Kandungan Utama (pisah dengan koma)', required: true },
            { id: 'skin_concerns', type: 'select', label: 'Skin Concern', options: ['Acne', 'Aging', 'Dryness', 'Oily', 'Hyperpigmentation', 'Sensitivity', 'Dullness', 'Multiple'], required: true },
            { id: 'target_skin_type', type: 'select', label: 'Target Skin Type', options: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive', 'All Skin Types'], required: true },
            { id: 'price_point', type: 'select', label: 'Price Point', options: ['Drugstore (<100rb)', 'Mid-range (100-300rb)', 'High-end (300rb-1jt)', 'Luxury (>1jt)'], required: true },
            { id: 'certifications', type: 'select', label: 'Sertifikasi', options: ['BPOM', 'Halal MUI', 'Cruelty-free', 'Vegan', 'Dermatologically Tested', 'Multiple', 'None yet'], required: true },
            { id: 'brand_positioning', type: 'select', label: 'Brand Positioning', options: ['Natural/Organic', 'Clinical/Science-based', 'K-beauty Inspired', 'Local Pride', 'Luxury', 'Affordable Quality'], required: true },
            { id: 'content_focus', type: 'select', label: 'Fokus Konten', options: ['Product Education', 'Routine Building', 'Ingredient Story', 'Results/Testimonial', 'Trend Content', 'All'], required: true }
        ],
        assetUploads: [
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk', required: true, multiple: true },
            { id: 'model_face', type: 'image', label: '[FACE] Foto Model untuk Demo', required: false },
            { id: 'texture_shots', type: 'image', label: '[REFERENCE] Foto Tekstur Produk', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 🛠️ BUSINESS TOOLS (48, 50)
    // ═══════════════════════════════════════════════════════════════

    'business-stationery': {
        name: 'Business Card & Stationery',
        icon: '💼',
        category: 'branding',
        description: 'Complete business stationery kit',
        output: 'Cards + letterhead + templates',
        models: 'Imagen 4 + Gemini',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        industries: ['All'],
        fields: [
            { id: 'business_name', type: 'text', label: 'Nama Bisnis/Brand', required: true },
            { id: 'tagline', type: 'text', label: 'Tagline (opsional)', required: false },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Corporate', 'Creative Agency', 'Consulting', 'F&B', 'Fashion', 'Beauty', 'Tech', 'Healthcare', 'Education', 'UMKM', 'Freelancer', 'Personal Brand'], required: true },
            { id: 'business_type', type: 'select', label: 'Tipe Bisnis', options: ['Corporate/PT', 'CV', 'UMKM', 'Freelancer', 'Personal Brand'], required: true },
            { id: 'owner_name', type: 'text', label: 'Nama Pemilik/Contact Person', required: true },
            { id: 'job_title', type: 'text', label: 'Jabatan', required: true },
            { id: 'phone', type: 'text', label: 'Nomor Telepon', required: true },
            { id: 'email', type: 'text', label: 'Email', required: true },
            { id: 'website', type: 'text', label: 'Website (opsional)', required: false },
            { id: 'address', type: 'textarea', label: 'Alamat', required: false },
            { id: 'social_media', type: 'text', label: 'Social Media Handles', required: false },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand (hex code)', required: false },
            { id: 'style_preference', type: 'select', label: 'Style', options: ['Minimalist', 'Bold & Modern', 'Elegant & Premium', 'Playful & Creative', 'Professional & Corporate'], required: true }
        ],
        assetUploads: [
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'reseller-dropship-kit': {
        name: 'Reseller & Dropship Kit',
        icon: '🤝',
        category: 'marketing',
        description: 'Complete reseller marketing package',
        output: 'Marketing kit + templates + training',
        models: 'Gemini 2.5 Pro + Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '20-30 min',
        popular: true,
        industries: ['All Products'],
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori Produk', options: ['Kosmetik', 'Skincare', 'Fashion', 'F&B', 'Health Supplement', 'Home & Living', 'Baby & Kids', 'Aksesoris', 'Lainnya'], required: true },
            { id: 'products_count', type: 'text', label: 'Jumlah Produk', required: true },
            { id: 'price_range', type: 'text', label: 'Range Harga Retail (Rp X - Rp X)', required: true },
            { id: 'reseller_discount', type: 'text', label: 'Diskon untuk Reseller (%)', required: true },
            { id: 'minimum_order', type: 'text', label: 'Minimum Order', required: true },
            { id: 'commission_type', type: 'select', label: 'Tipe Komisi', options: ['Fixed Discount', 'Tiered Discount', 'Commission per Sale', 'Hybrid'], required: true },
            { id: 'support_provided', type: 'select', label: 'Support yang Diberikan', options: ['Marketing Kit', 'Product Training', 'WhatsApp Group', 'Mentoring', 'Dropship Service', 'All'], required: true },
            { id: 'target_reseller', type: 'textarea', label: 'Target Reseller Ideal (ibu rumah tangga, mahasiswa, dll)', required: true },
            { id: 'unique_program', type: 'textarea', label: 'Keunikan Program Reseller Anda', required: false }
        ],
        assetUploads: [
            { id: 'product_photos', type: 'image', label: '[PRODUCT] Foto Produk', required: true, multiple: true },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'price_list', type: 'document', label: 'Price List (Opsional)', required: false }
        ]
    }
};

// Export for use in main app
if (typeof window !== 'undefined') {
    window.IndustrySpecificWorkflows = IndustrySpecificWorkflows;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = IndustrySpecificWorkflows;
}
