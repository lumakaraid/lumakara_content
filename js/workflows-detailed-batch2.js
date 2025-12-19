// ==================== WORKFLOWS DETAILED - BATCH 2 (WF-031 to WF-070) ====================
// Complete form fields for comprehensive Google Opal output
// Version 3.0 - December 2025

const WorkflowsDetailedBatch2 = {

    // ═══════════════════════════════════════════════════════════════
    // WF-031 to WF-040: Text & Marketing Tools
    // ═══════════════════════════════════════════════════════════════

    'script-writer': {
        id: 'WF-031', file: '31-script-writer.txt', name: 'Script Writer Pro', icon: '📜', category: 'text',
        tags: ['text', 'video'], description: 'Professional scripts for video/audio with timing and B-roll suggestions',
        output: '5 script variations', models: 'Gemini 3 Pro', difficulty: 'advanced', estimatedTime: '10-15 min',
        opalLink: 'https://opal.google/?flow=drive:/1s6LpnDc5LplwUYtVKOipbAFnNh4BN7LN&shared&mode=app',
        fields: [
            { id: 'script_type', type: 'select', label: 'Tipe Script', options: ['YouTube Video', 'TikTok/Reels', 'Podcast', 'Voiceover/Narration', 'Documentary', 'Commercial/Ad', 'Tutorial', 'Explainer', 'Webinar'], required: true },
            { id: 'topic', type: 'text', label: 'Topik', required: true },
            { id: 'duration', type: 'select', label: 'Durasi', options: ['15 seconds', '30 seconds', '60 seconds', '3 minutes', '5 minutes', '10 minutes', '15+ minutes'], required: true },
            { id: 'delivery_style', type: 'select', label: 'Gaya Delivery', options: ['Energetic', 'Calm/Soothing', 'Professional', 'Humorous', 'Dramatic', 'Conversational', 'Authoritative'], required: true },
            { id: 'target_audience', type: 'text', label: 'Target Audience', required: true },
            { id: 'key_points', type: 'textarea', label: 'Poin-Poin Utama', required: true },
            { id: 'include_broll', type: 'select', label: 'Include B-Roll Suggestions?', options: ['Yes', 'No'], required: true },
            { id: 'include_timing', type: 'select', label: 'Include Timing Markers?', options: ['Yes', 'No'], required: true },
            { id: 'cta', type: 'text', label: 'Call-to-Action', required: false }
        ],
        promptTemplate: `=== SCRIPT WRITING REQUEST ===\n\nTYPE: {script_type}\nTOPIC: {topic}\nDURATION: {duration}\nSTYLE: {delivery_style}\nAUDIENCE: {target_audience}\n\nKEY POINTS:\n{key_points}\n\nB-ROLL: {include_broll}\nTIMING: {include_timing}\nCTA: {cta}\n\nGenerate 5 script variations with timing markers and B-roll suggestions.`
    },

    'hashtag-generator': {
        id: 'WF-032', file: '32-hashtag-generator.txt', name: 'Hashtag Generator', icon: '#️⃣', category: 'marketing',
        tags: ['marketing', 'text', 'utility'], description: 'Research and generate optimal hashtags for maximum reach',
        output: '100+ hashtags', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '3-5 min',
        opalLink: 'https://opal.google/?flow=drive:/1gsS3dWt96exdBJUvSDu17RzDSTed3Tk0&shared&mode=app',
        fields: [
            { id: 'content_topic', type: 'text', label: 'Topik Konten', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'TikTok', 'Twitter', 'LinkedIn', 'YouTube', 'All Platforms'], required: true },
            { id: 'niche', type: 'text', label: 'Niche/Industri', required: true },
            { id: 'target_audience', type: 'text', label: 'Target Audience', required: true },
            { id: 'hashtag_type', type: 'select', label: 'Tipe Hashtag', options: ['Mixed (recommended)', 'High Volume Only', 'Niche Only', 'Trending Only'], required: true },
            { id: 'brand_hashtag', type: 'text', label: 'Brand Hashtag (opsional)', placeholder: '#YourBrand', required: false },
            { id: 'location', type: 'text', label: 'Lokasi (opsional)', placeholder: 'Jakarta, Indonesia', required: false }
        ],
        promptTemplate: `=== HASHTAG RESEARCH REQUEST ===\n\nTOPIC: {content_topic}\nPLATFORM: {platform}\nNICHE: {niche}\nAUDIENCE: {target_audience}\nTYPE: {hashtag_type}\nBRAND: {brand_hashtag}\nLOCATION: {location}\n\nGenerate 100+ hashtags categorized by:\n- High volume (1M+ posts)\n- Medium volume (100K-1M)\n- Niche (10K-100K)\n- Trending\n- Location-based\n- Brand-specific`
    },

    'bio-generator': {
        id: 'WF-033', file: '33-bio-generator.txt', name: 'Bio Generator', icon: '👤', category: 'text',
        tags: ['text', 'marketing'], description: 'Professional bios for all social platforms',
        output: '20 bio variations', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '3-5 min',
        opalLink: 'https://opal.google/?flow=drive:/1aedBx-tAZoaQmn-uUdJsSuhXhTcMhiBc&shared&mode=app',
        fields: [
            { id: 'name', type: 'text', label: 'Nama/Brand', required: true },
            { id: 'profession', type: 'text', label: 'Profesi/Niche', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'All Platforms'], required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual/Friendly', 'Witty/Humorous', 'Inspirational', 'Mysterious', 'Direct'], required: true },
            { id: 'key_achievements', type: 'textarea', label: 'Pencapaian/Kredensial', placeholder: 'Sebutkan pencapaian, sertifikasi, atau kredensial...', required: false },
            { id: 'unique_value', type: 'text', label: 'Unique Value Proposition', placeholder: 'Apa yang membuat Anda berbeda?', required: true },
            { id: 'cta', type: 'text', label: 'Call-to-Action', placeholder: 'Link in bio, DM for collab, dll', required: false },
            { id: 'include_emojis', type: 'select', label: 'Include Emojis?', options: ['Yes', 'Minimal', 'No'], required: true }
        ],
        promptTemplate: `=== BIO GENERATION REQUEST ===\n\nNAME: {name}\nPROFESSION: {profession}\nPLATFORM: {platform}\nTONE: {tone}\nACHIEVEMENTS: {key_achievements}\nUVP: {unique_value}\nCTA: {cta}\nEMOJIS: {include_emojis}\n\nGenerate 20 bio variations optimized for each platform's character limits.`
    },

    'hook-generator': {
        id: 'WF-034', file: '34-hook-generator.txt', name: 'Hook Generator Ultra', icon: '🎣', category: 'text',
        tags: ['text', 'popular', 'marketing'], description: 'Generate 50 viral hooks using AIDA, PAS, 4U frameworks',
        output: '50 hooks + A/B variants', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '3-5 min', popular: true,
        opalLink: 'https://opal.google/?flow=drive:/1VBLM7Ajl1ck43Lk0IP1XJn7cMPjWdlyv&shared&mode=app',
        fields: [
            { id: 'content_topic', type: 'text', label: 'Topik Konten', required: true },
            { id: 'hook_type', type: 'select', label: 'Tipe Hook', options: ['Video Hook (first 3 sec)', 'Caption Hook', 'Email Subject Line', 'Headline', 'Ad Copy', 'Thumbnail Text', 'Thread Opener'], required: true },
            { id: 'target_emotion', type: 'select', label: 'Target Emosi', options: ['Curiosity', 'Fear/FOMO', 'Excitement', 'Urgency', 'Desire', 'Surprise', 'Anger/Frustration', 'Hope'], required: true },
            { id: 'framework', type: 'select', label: 'Framework', options: ['AIDA', 'PAS', '4U', 'Before-After-Bridge', 'Problem-Agitate-Solve', 'All Frameworks'], required: true },
            { id: 'target_audience', type: 'text', label: 'Target Audience', required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual', 'Bold/Controversial', 'Friendly', 'Urgent'], required: true },
            { id: 'include_numbers', type: 'select', label: 'Include Numbers/Stats?', options: ['Yes', 'No', 'Some'], required: true }
        ],
        promptTemplate: `=== HOOK GENERATION REQUEST ===\n\nTOPIC: {content_topic}\nTYPE: {hook_type}\nEMOTION: {target_emotion}\nFRAMEWORK: {framework}\nAUDIENCE: {target_audience}\nTONE: {tone}\nNUMBERS: {include_numbers}\n\nGenerate 50 hooks with A/B variants for testing.`
    },

    'trend-content': {
        id: 'WF-035', file: '35-trend-content-generator.txt', name: 'Trend Content Generator', icon: '📈', category: 'marketing',
        tags: ['marketing', 'text'], description: 'Generate content based on current trends and viral formats',
        output: '20 trend-based content', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '8-12 min',
        opalLink: 'https://opal.google/?flow=drive:/19CPpUyQlK3xYnFTpwDYnH4TBBZtrDP-8&shared&mode=app',
        fields: [
            { id: 'niche', type: 'text', label: 'Niche/Industri', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['TikTok', 'Instagram Reels', 'Twitter/X', 'YouTube Shorts', 'All Platforms'], required: true },
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'content_type', type: 'select', label: 'Tipe Konten', options: ['Video Ideas', 'Post Ideas', 'Thread Ideas', 'All Types'], required: true },
            { id: 'trend_type', type: 'select', label: 'Tipe Trend', options: ['Current Viral', 'Evergreen Trends', 'Seasonal', 'Industry-Specific', 'All'], required: true },
            { id: 'brand_voice', type: 'select', label: 'Brand Voice', options: ['Professional', 'Playful', 'Edgy', 'Educational', 'Inspirational'], required: true }
        ],
        promptTemplate: `=== TREND CONTENT REQUEST ===\n\nNICHE: {niche}\nPLATFORM: {platform}\nBRAND: {brand_name}\nCONTENT TYPE: {content_type}\nTREND TYPE: {trend_type}\nVOICE: {brand_voice}\n\nResearch current trends and generate 20 content ideas with:\n- Trend explanation\n- How to adapt for brand\n- Script/caption\n- Best posting time`
    },

    'brand-strategy': {
        id: 'WF-036', file: '36-brand-strategy-generator.txt', name: 'Brand Strategy Generator', icon: '🎯', category: 'branding',
        tags: ['branding', 'business'], description: 'Complete brand strategy document with positioning and messaging',
        output: 'Full strategy doc', models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '20-30 min',
        opalLink: 'https://opal.google/?flow=drive:/1n09EgFPEx46RuZ6hjOSnvw1r0wyZ5S-e&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'industry', type: 'text', label: 'Industri', required: true },
            { id: 'business_description', type: 'textarea', label: 'Deskripsi Bisnis', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience (detail)', required: true },
            { id: 'competitors', type: 'textarea', label: 'Kompetitor Utama', required: true },
            { id: 'unique_value', type: 'textarea', label: 'Unique Value Proposition', required: true },
            { id: 'brand_values', type: 'textarea', label: 'Nilai-Nilai Brand', required: true },
            { id: 'goals', type: 'textarea', label: 'Tujuan Bisnis (1 tahun)', required: true },
            { id: 'budget_range', type: 'select', label: 'Budget Marketing', options: ['Bootstrap (<$1K/month)', 'Small ($1K-5K/month)', 'Medium ($5K-20K/month)', 'Large ($20K+/month)'], required: true }
        ],
        promptTemplate: `=== BRAND STRATEGY REQUEST ===\n\nBRAND: {brand_name}\nINDUSTRY: {industry}\nDESCRIPTION: {business_description}\n\nTARGET AUDIENCE:\n{target_audience}\n\nCOMPETITORS:\n{competitors}\n\nUVP: {unique_value}\n\nVALUES:\n{brand_values}\n\nGOALS:\n{goals}\n\nBUDGET: {budget_range}\n\nGenerate comprehensive brand strategy including:\n- Brand positioning\n- Messaging framework\n- Voice & tone guidelines\n- Content strategy\n- Channel strategy\n- Competitive differentiation\n- 90-day action plan`
    },

    'product-launch-campaign': {
        id: 'WF-037', file: '37-product-launch-campaign.txt', name: 'Product Launch Campaign', icon: '🚀', category: 'marketing',
        tags: ['marketing', 'business', 'complete'], description: 'Complete product launch campaign materials',
        output: 'Full launch kit', models: 'All Models', difficulty: 'advanced', estimatedTime: '30-45 min',
        opalLink: 'https://opal.google/?flow=drive:/1XD_WIiMPaIcV1y_v1qwD1qyQCdTAFWVP&shared&mode=app',
        fields: [
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'product_description', type: 'textarea', label: 'Deskripsi Produk', required: true },
            { id: 'launch_date', type: 'date', label: 'Tanggal Launch', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'price_point', type: 'text', label: 'Harga', required: true },
            { id: 'unique_features', type: 'textarea', label: 'Fitur Unik', required: true },
            { id: 'competitors', type: 'textarea', label: 'Kompetitor', required: false },
            { id: 'budget', type: 'select', label: 'Budget Campaign', options: ['Low (<$5K)', 'Medium ($5K-20K)', 'High ($20K-50K)', 'Enterprise ($50K+)'], required: true },
            { id: 'channels', type: 'select', label: 'Channel Utama', options: ['Social Media', 'Email', 'Paid Ads', 'PR/Media', 'All Channels'], required: true },
            { id: 'launch_type', type: 'select', label: 'Tipe Launch', options: ['Soft Launch', 'Hard Launch', 'Pre-order', 'Waitlist', 'Limited Release'], required: true }
        ],
        promptTemplate: `=== PRODUCT LAUNCH REQUEST ===\n\nPRODUCT: {product_name}\nDESCRIPTION: {product_description}\nLAUNCH DATE: {launch_date}\nPRICE: {price_point}\n\nAUDIENCE:\n{target_audience}\n\nFEATURES:\n{unique_features}\n\nCOMPETITORS: {competitors}\nBUDGET: {budget}\nCHANNELS: {channels}\nLAUNCH TYPE: {launch_type}\n\nGenerate complete launch campaign:\n- Pre-launch content (teaser, countdown)\n- Launch day content\n- Post-launch content\n- Email sequences\n- Social media posts\n- Ad creatives\n- Press release\n- Influencer briefs`
    },

    'ecommerce-content-kit': {
        id: 'WF-038', file: '38-ecommerce-content-kit.txt', name: 'E-Commerce Content Kit', icon: '🛒', category: 'ecommerce',
        tags: ['ecommerce', 'marketing', 'complete'], description: 'Complete e-commerce content package for online stores',
        output: 'Full e-commerce kit', models: 'All Models', difficulty: 'advanced', estimatedTime: '25-35 min',
        opalLink: 'https://opal.google/?flow=drive:/1x-ofLtg1P6V0RvslSQrjdhPi92DHFxIm&shared&mode=app',
        fields: [
            { id: 'store_name', type: 'text', label: 'Nama Toko', required: true },
            { id: 'store_description', type: 'textarea', label: 'Deskripsi Toko', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori Produk', options: ['Fashion', 'Beauty/Skincare', 'Electronics', 'Home & Living', 'Food & Beverage', 'Health & Wellness', 'Kids & Baby', 'Sports & Outdoor', 'Art & Craft'], required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'price_range', type: 'select', label: 'Range Harga', options: ['Budget (<$50)', 'Mid-range ($50-200)', 'Premium ($200-500)', 'Luxury ($500+)'], required: true },
            { id: 'platforms', type: 'select', label: 'Platform Jualan', options: ['Own Website', 'Shopee', 'Tokopedia', 'Lazada', 'Instagram Shop', 'Multiple Platforms'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: false },
            { id: 'usp', type: 'textarea', label: 'Unique Selling Points', required: true }
        ],
        promptTemplate: `=== E-COMMERCE KIT REQUEST ===\n\nSTORE: {store_name}\nDESCRIPTION: {store_description}\nCATEGORY: {product_category}\nAUDIENCE: {target_audience}\nPRICE RANGE: {price_range}\nPLATFORMS: {platforms}\nCOLORS: {brand_colors}\nUSP: {usp}\n\nGenerate complete e-commerce kit:\n- Product descriptions (templates)\n- Category descriptions\n- Homepage copy\n- About us page\n- FAQ content\n- Email templates\n- Social media content\n- Ad creatives\n- Banner designs`
    },

    'packaging-design': {
        id: 'WF-039', file: '39-packaging-design-generator.txt', name: 'Packaging Design Generator', icon: '📦', category: 'image',
        tags: ['image', 'ecommerce', 'branding'], description: 'Product packaging design concepts and mockups',
        output: '10 packaging designs', models: 'Imagen 4', difficulty: 'intermediate', estimatedTime: '15-20 min',
        opalLink: 'https://opal.google/?flow=drive:/11M9I4i4Q65SQv4M4io4Qj_5FLYA5ulgG&shared&mode=app',
        fields: [
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'product_type', type: 'text', label: 'Tipe Produk', required: true },
            { id: 'package_type', type: 'select', label: 'Tipe Kemasan', options: ['Box/Kotak', 'Bottle/Botol', 'Pouch/Sachet', 'Tube', 'Jar/Toples', 'Can/Kaleng', 'Bag/Tas', 'Wrapper', 'Custom'], required: true },
            { id: 'package_size', type: 'text', label: 'Ukuran Kemasan', placeholder: 'e.g., 100ml, 500g, 10x15cm', required: true },
            { id: 'design_style', type: 'select', label: 'Gaya Desain', options: ['Minimalist', 'Luxury/Premium', 'Eco-friendly/Natural', 'Bold/Colorful', 'Classic/Traditional', 'Modern/Futuristic', 'Playful/Fun', 'Vintage/Retro'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true },
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'tagline', type: 'text', label: 'Tagline (opsional)', required: false },
            { id: 'key_info', type: 'textarea', label: 'Info yang Harus Ada', placeholder: 'Ingredients, weight, instructions, dll', required: true },
            { id: 'target_market', type: 'select', label: 'Target Market', options: ['Mass Market', 'Premium', 'Luxury', 'Kids', 'Health-conscious', 'Eco-conscious'], required: true }
        ],
        promptTemplate: `=== PACKAGING DESIGN REQUEST ===\n\nPRODUCT: {product_name}\nTYPE: {product_type}\nPACKAGE: {package_type}\nSIZE: {package_size}\n\nDESIGN:\n- Style: {design_style}\n- Colors: {brand_colors}\n- Brand: {brand_name}\n- Tagline: {tagline}\n\nREQUIRED INFO:\n{key_info}\n\nTARGET: {target_market}\n\nGenerate 10 packaging design concepts with:\n- Front view\n- Back view\n- Side views\n- 3D mockups\n- Flat layout`
    },

    'product-catalog': {
        id: 'WF-040', file: '40-product-catalog-generator.txt', name: 'Product Catalog Generator', icon: '📚', category: 'ecommerce',
        tags: ['ecommerce', 'marketing'], description: 'Professional product catalog layouts and content',
        output: '20-page catalog', models: 'Gemini + Imagen 4', difficulty: 'advanced', estimatedTime: '25-35 min',
        opalLink: 'https://opal.google/?flow=drive:/1_vU2zuMGSQ42asjomFaNf1WwbBD80Cun&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'catalog_title', type: 'text', label: 'Judul Katalog', placeholder: 'e.g., Spring Collection 2025', required: true },
            { id: 'products', type: 'textarea', label: 'Daftar Produk', placeholder: 'Masukkan nama produk dan deskripsi singkat...', required: true },
            { id: 'catalog_style', type: 'select', label: 'Gaya Katalog', options: ['Modern Minimal', 'Classic Elegant', 'Bold & Colorful', 'Luxury', 'Eco/Natural'], required: true },
            { id: 'page_count', type: 'select', label: 'Jumlah Halaman', options: ['10 pages', '20 pages', '30 pages', '50 pages'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true },
            { id: 'include_prices', type: 'select', label: 'Include Harga?', options: ['Yes', 'No', 'On Request'], required: true },
            { id: 'format', type: 'select', label: 'Format', options: ['Digital (PDF)', 'Print Ready', 'Both'], required: true }
        ],
        promptTemplate: `=== PRODUCT CATALOG REQUEST ===\n\nBRAND: {brand_name}\nTITLE: {catalog_title}\nSTYLE: {catalog_style}\nPAGES: {page_count}\nCOLORS: {brand_colors}\nPRICES: {include_prices}\nFORMAT: {format}\n\nPRODUCTS:\n{products}\n\nGenerate complete catalog with:\n- Cover design\n- Table of contents\n- Product pages\n- Category dividers\n- Back cover\n- Contact page`
    },

    // ═══════════════════════════════════════════════════════════════
    // WF-041 to WF-055: Business & Text Tools
    // ═══════════════════════════════════════════════════════════════

    'competitor-analysis': {
        id: 'WF-041', file: '41-competitor-analysis-generator.txt', name: 'Competitor Analysis Generator', icon: '🔍',
        category: 'business', tags: ['business', 'marketing'],
        description: 'Comprehensive competitor analysis report', output: 'Full analysis report',
        models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '20-30 min',
        opalLink: 'https://opal.google/?flow=drive:/1fizEEGR45eclktl-BAZoZJiYZIHmItAT&shared&mode=app',
        fields: [
            { id: 'your_brand', type: 'text', label: 'Nama Brand Anda', required: true },
            { id: 'your_description', type: 'textarea', label: 'Deskripsi Bisnis Anda', required: true },
            { id: 'competitors', type: 'textarea', label: 'Kompetitor (satu per baris)', required: true },
            { id: 'industry', type: 'text', label: 'Industri', required: true },
            { id: 'analysis_focus', type: 'select', label: 'Fokus Analisis', options: ['All Areas', 'Marketing/Content', 'Product/Pricing', 'Social Media', 'SEO/Website', 'Customer Experience'], required: true },
            { id: 'market_region', type: 'text', label: 'Region/Market', placeholder: 'Indonesia, Southeast Asia, Global', required: true }
        ],
        promptTemplate: `=== COMPETITOR ANALYSIS REQUEST ===\n\nYOUR BRAND: {your_brand}\nDESCRIPTION: {your_description}\nINDUSTRY: {industry}\nREGION: {market_region}\nFOCUS: {analysis_focus}\n\nCOMPETITORS:\n{competitors}\n\nGenerate comprehensive analysis:\n- Company overview\n- Product/service comparison\n- Pricing analysis\n- Marketing strategy\n- Social media presence\n- SWOT for each\n- Opportunities for differentiation\n- Recommendations`
    },

    'influencer-brief': {
        id: 'WF-042', file: '42-influencer-brief-generator.txt', name: 'Influencer Brief Generator', icon: '🤝',
        category: 'marketing', tags: ['marketing', 'business'],
        description: 'Professional influencer collaboration briefs', output: '5 brief templates',
        models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '10-15 min',
        opalLink: 'https://opal.google/?flow=drive:/1Ci0U7hFJjH5GzPH6C1lo_mOTYCV-N5To&shared&mode=app',
        fields: [
            { id: 'campaign_name', type: 'text', label: 'Nama Campaign', required: true },
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_service', type: 'textarea', label: 'Produk/Jasa yang Dipromosikan', required: true },
            { id: 'campaign_objective', type: 'select', label: 'Objective', options: ['Brand Awareness', 'Product Launch', 'Sales/Conversion', 'Content Creation', 'Event Promotion'], required: true },
            { id: 'influencer_type', type: 'select', label: 'Tipe Influencer', options: ['Nano (1K-10K)', 'Micro (10K-50K)', 'Mid-tier (50K-500K)', 'Macro (500K-1M)', 'Mega (1M+)'], required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'TikTok', 'YouTube', 'Twitter', 'Multiple'], required: true },
            { id: 'content_type', type: 'select', label: 'Tipe Konten', options: ['Feed Post', 'Story', 'Reels/TikTok', 'YouTube Video', 'Live Stream', 'Multiple'], required: true },
            { id: 'budget_range', type: 'text', label: 'Budget per Influencer', placeholder: 'e.g., $500-1000', required: true },
            { id: 'key_messages', type: 'textarea', label: 'Key Messages', required: true },
            { id: 'dos_donts', type: 'textarea', label: "Do's and Don'ts", required: false }
        ],
        promptTemplate: `=== INFLUENCER BRIEF REQUEST ===\n\nCAMPAIGN: {campaign_name}\nBRAND: {brand_name}\nPRODUCT: {product_service}\nOBJECTIVE: {campaign_objective}\n\nINFLUENCER:\n- Type: {influencer_type}\n- Platform: {platform}\n- Content: {content_type}\n- Budget: {budget_range}\n\nKEY MESSAGES:\n{key_messages}\n\nDO'S AND DON'TS:\n{dos_donts}\n\nGenerate 5 brief templates with:\n- Campaign overview\n- Deliverables\n- Timeline\n- Content guidelines\n- Hashtags & mentions\n- Approval process\n- Payment terms`
    },

    'umkm-starter-kit': {
        id: 'WF-043', file: '43-umkm-starter-kit.txt', name: 'UMKM Starter Kit', icon: '🏪',
        category: 'business', tags: ['business', 'complete', 'ecommerce'],
        description: 'Complete starter kit for small businesses (UMKM)', output: 'Full business kit',
        models: 'All Models', difficulty: 'intermediate', estimatedTime: '30-45 min',
        opalLink: 'https://opal.google/?flow=drive:/1iqgY7Xi9OrZNi7f32EfBXCxF3keZWNMV&shared&mode=app',
        fields: [
            { id: 'business_name', type: 'text', label: 'Nama Usaha', required: true },
            { id: 'business_type', type: 'select', label: 'Tipe Usaha', options: ['Food & Beverage', 'Fashion/Clothing', 'Craft/Handmade', 'Service', 'Retail/Reseller', 'Beauty/Skincare', 'Home Industry'], required: true },
            { id: 'business_description', type: 'textarea', label: 'Deskripsi Usaha', required: true },
            { id: 'products_services', type: 'textarea', label: 'Produk/Jasa yang Dijual', required: true },
            { id: 'target_market', type: 'textarea', label: 'Target Pasar', required: true },
            { id: 'location', type: 'text', label: 'Lokasi', required: true },
            { id: 'budget', type: 'select', label: 'Budget Marketing', options: ['< Rp 500K/bulan', 'Rp 500K - 2Jt/bulan', 'Rp 2Jt - 5Jt/bulan', '> Rp 5Jt/bulan'], required: true },
            { id: 'selling_channels', type: 'select', label: 'Channel Penjualan', options: ['Offline Only', 'Online Only', 'Both'], required: true },
            { id: 'social_media', type: 'select', label: 'Social Media Aktif', options: ['Instagram', 'TikTok', 'Facebook', 'WhatsApp Business', 'Multiple'], required: true }
        ],
        promptTemplate: `=== UMKM STARTER KIT REQUEST ===\n\nBUSINESS: {business_name}\nTYPE: {business_type}\nDESCRIPTION: {business_description}\nPRODUCTS: {products_services}\nTARGET: {target_market}\nLOCATION: {location}\nBUDGET: {budget}\nCHANNELS: {selling_channels}\nSOCIAL: {social_media}\n\nGenerate complete UMKM kit:\n- Brand identity (logo, colors)\n- Social media templates\n- Product photography guide\n- Caption templates\n- Price list template\n- Business card design\n- WhatsApp catalog\n- Marketing calendar\n- Customer service scripts`
    },

    'food-beverage-kit': {
        id: 'WF-044', file: '44-food-beverage-content-kit.txt', name: 'Food & Beverage Content Kit', icon: '🍔',
        category: 'ecommerce', tags: ['ecommerce', 'image', 'marketing'],
        description: 'Complete F&B marketing content package', output: 'Full F&B kit',
        models: 'Imagen 4 + Gemini', difficulty: 'intermediate', estimatedTime: '20-30 min',
        opalLink: 'https://opal.google/?flow=drive:/1xkazQVZJAidZMfL8uo_QeKjKcVUv7CfT&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand/Resto', required: true },
            { id: 'business_type', type: 'select', label: 'Tipe Bisnis', options: ['Restaurant', 'Cafe', 'Bakery', 'Beverage/Minuman', 'Snack/Cemilan', 'Catering', 'Cloud Kitchen', 'Food Truck'], required: true },
            { id: 'cuisine_type', type: 'text', label: 'Tipe Masakan', placeholder: 'Indonesian, Western, Japanese, dll', required: true },
            { id: 'signature_items', type: 'textarea', label: 'Menu Andalan', required: true },
            { id: 'price_range', type: 'select', label: 'Range Harga', options: ['Budget (<Rp 30K)', 'Mid (Rp 30K-100K)', 'Premium (Rp 100K-300K)', 'Fine Dining (>Rp 300K)'], required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'brand_personality', type: 'select', label: 'Personality Brand', options: ['Homey/Cozy', 'Modern/Trendy', 'Traditional/Authentic', 'Healthy/Clean', 'Fun/Playful', 'Premium/Elegant'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: false }
        ],
        promptTemplate: `=== F&B CONTENT KIT REQUEST ===\n\nBRAND: {brand_name}\nTYPE: {business_type}\nCUISINE: {cuisine_type}\nSIGNATURE: {signature_items}\nPRICE: {price_range}\nAUDIENCE: {target_audience}\nPERSONALITY: {brand_personality}\nCOLORS: {brand_colors}\n\nGenerate complete F&B kit:\n- Food photography concepts\n- Menu design templates\n- Social media posts\n- Story templates\n- Promo graphics\n- Review response templates\n- Delivery packaging ideas\n- Table tent designs`
    },

    'fashion-lookbook': {
        id: 'WF-045', file: '45-fashion-lookbook-generator.txt', name: 'Fashion Lookbook Generator', icon: '👗',
        category: 'ecommerce', tags: ['ecommerce', 'image'],
        description: 'Professional fashion lookbook layouts', output: '20-page lookbook',
        models: 'Imagen 4 + Gemini', difficulty: 'advanced', estimatedTime: '25-35 min',
        opalLink: 'https://opal.google/?flow=drive:/18i-cw3fN-yR0dqRaKnqzWF6nxhKN-dV2&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'collection_name', type: 'text', label: 'Nama Koleksi', required: true },
            { id: 'season', type: 'select', label: 'Season', options: ['Spring/Summer', 'Fall/Winter', 'Resort', 'Holiday', 'Year-round'], required: true },
            { id: 'fashion_style', type: 'select', label: 'Gaya Fashion', options: ['Casual', 'Formal', 'Streetwear', 'Luxury', 'Minimalist', 'Bohemian', 'Sporty', 'Vintage'], required: true },
            { id: 'target_demographic', type: 'select', label: 'Target Demographic', options: ['Women 18-25', 'Women 25-35', 'Women 35+', 'Men 18-25', 'Men 25-35', 'Men 35+', 'Unisex', 'Kids'], required: true },
            { id: 'items_count', type: 'text', label: 'Jumlah Item', placeholder: 'e.g., 20 items', required: true },
            { id: 'lookbook_style', type: 'select', label: 'Gaya Lookbook', options: ['Editorial', 'Commercial', 'Lifestyle', 'Studio', 'Street Style'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true }
        ],
        promptTemplate: `=== FASHION LOOKBOOK REQUEST ===\n\nBRAND: {brand_name}\nCOLLECTION: {collection_name}\nSEASON: {season}\nSTYLE: {fashion_style}\nTARGET: {target_demographic}\nITEMS: {items_count}\nLOOKBOOK STYLE: {lookbook_style}\nCOLORS: {brand_colors}\n\nGenerate 20-page lookbook with:\n- Cover design\n- Collection story\n- Product pages\n- Styling suggestions\n- Size guide\n- Order information`
    },

    'skincare-cosmetic-kit': {
        id: 'WF-046', file: '46-skincare-cosmetic-kit.txt', name: 'Skincare & Cosmetic Kit', icon: '💄',
        category: 'ecommerce', tags: ['ecommerce', 'image', 'marketing'],
        description: 'Complete beauty brand content package', output: 'Full beauty kit',
        models: 'Imagen 4 + Gemini', difficulty: 'intermediate', estimatedTime: '20-30 min',
        opalLink: 'https://opal.google/?flow=drive:/1dafUuNUMXgNQIe6SWj4dHl41-TNkiNdp&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'product_type', type: 'select', label: 'Tipe Produk', options: ['Skincare', 'Makeup/Cosmetics', 'Haircare', 'Bodycare', 'Fragrance', 'Nail Care', 'Multiple'], required: true },
            { id: 'brand_positioning', type: 'select', label: 'Positioning', options: ['Natural/Organic', 'Clinical/Scientific', 'Luxury/Premium', 'K-Beauty', 'Affordable/Mass', 'Indie/Artisan'], required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'hero_products', type: 'textarea', label: 'Produk Unggulan', required: true },
            { id: 'key_ingredients', type: 'textarea', label: 'Key Ingredients', required: false },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true },
            { id: 'aesthetic', type: 'select', label: 'Aesthetic', options: ['Clean/Minimal', 'Luxurious', 'Playful/Colorful', 'Natural/Earthy', 'Clinical/Medical', 'Artistic'], required: true }
        ],
        promptTemplate: `=== BEAUTY KIT REQUEST ===\n\nBRAND: {brand_name}\nTYPE: {product_type}\nPOSITIONING: {brand_positioning}\nAUDIENCE: {target_audience}\nHERO PRODUCTS: {hero_products}\nINGREDIENTS: {key_ingredients}\nCOLORS: {brand_colors}\nAESTHETIC: {aesthetic}\n\nGenerate complete beauty kit:\n- Product photography\n- Before/after templates\n- Ingredient spotlights\n- Tutorial content\n- Review templates\n- Social media posts\n- Packaging mockups\n- Routine guides`
    },

    'testimonial-social-proof': {
        id: 'WF-047', file: '47-testimonial-social-proof.txt', name: 'Testimonial & Social Proof', icon: '⭐',
        category: 'marketing', tags: ['marketing', 'text', 'image'],
        description: 'Generate testimonial graphics and social proof content', output: '20 testimonial assets',
        models: 'Gemini + Imagen 4', difficulty: 'beginner', estimatedTime: '8-12 min',
        opalLink: 'https://opal.google/?flow=drive:/1j0U_oEG_jq9h-Fg_Cqbgm-MQTGpAUB0C&shared&mode=app',
        fields: [
            { id: 'product_service', type: 'text', label: 'Produk/Jasa', required: true },
            { id: 'industry', type: 'text', label: 'Industri', required: true },
            { id: 'testimonials', type: 'textarea', label: 'Testimonial yang Ada', placeholder: 'Masukkan testimonial yang sudah ada (satu per baris)...', required: false },
            { id: 'testimonial_type', type: 'select', label: 'Tipe Testimonial', options: ['Text Only', 'With Photo', 'Video Script', 'Case Study', 'All Types'], required: true },
            { id: 'customer_type', type: 'select', label: 'Tipe Customer', options: ['B2C Individual', 'B2B Company', 'Influencer', 'Expert/Professional', 'Mixed'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: false },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'Website', 'LinkedIn', 'All Platforms'], required: true }
        ],
        promptTemplate: `=== TESTIMONIAL REQUEST ===\n\nPRODUCT: {product_service}\nINDUSTRY: {industry}\nEXISTING: {testimonials}\nTYPE: {testimonial_type}\nCUSTOMER: {customer_type}\nCOLORS: {brand_colors}\nPLATFORM: {platform}\n\nGenerate 20 testimonial assets:\n- Quote graphics\n- Before/after stories\n- Case study summaries\n- Video testimonial scripts\n- Review response templates\n- Social proof badges`
    },

    'business-stationery': {
        id: 'WF-048', file: '48-business-card-stationery.txt', name: 'Business Card & Stationery', icon: '💼',
        category: 'branding', tags: ['branding', 'image'],
        description: 'Professional business stationery designs', output: '10 stationery designs',
        models: 'Imagen 4', difficulty: 'intermediate', estimatedTime: '10-15 min',
        opalLink: 'https://opal.google/?flow=drive:/1tCt9sb97Jgy87dTdDhPZQ4rdWOcFxzNx&shared&mode=app',
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand/Perusahaan', required: true },
            { id: 'tagline', type: 'text', label: 'Tagline', required: false },
            { id: 'contact_info', type: 'textarea', label: 'Info Kontak', placeholder: 'Nama, jabatan, email, phone, website, alamat...', required: true },
            { id: 'design_style', type: 'select', label: 'Gaya Desain', options: ['Modern Minimal', 'Classic/Traditional', 'Creative/Artistic', 'Corporate Professional', 'Luxury/Premium'], required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true },
            { id: 'items_needed', type: 'select', label: 'Item yang Dibutuhkan', options: ['Business Card Only', 'Full Stationery Set', 'Digital + Print'], required: true },
            { id: 'special_finish', type: 'select', label: 'Finishing Khusus', options: ['Standard', 'Emboss/Deboss', 'Foil Stamping', 'Spot UV', 'Die Cut'], required: false }
        ],
        promptTemplate: `=== STATIONERY REQUEST ===\n\nBRAND: {brand_name}\nTAGLINE: {tagline}\nCONTACT:\n{contact_info}\nSTYLE: {design_style}\nCOLORS: {brand_colors}\nITEMS: {items_needed}\nFINISH: {special_finish}\n\nGenerate stationery set:\n- Business cards (front & back)\n- Letterhead\n- Envelope\n- Email signature\n- Invoice template\n- Presentation folder`
    },

    'event-promotion-kit': {
        id: 'WF-049', file: '49-event-promotion-kit.txt', name: 'Event Promotion Kit', icon: '🎉',
        category: 'marketing', tags: ['marketing', 'image', 'complete'],
        description: 'Complete event marketing materials', output: 'Full event kit',
        models: 'Imagen 4 + Gemini', difficulty: 'intermediate', estimatedTime: '20-30 min',
        opalLink: 'https://opal.google/?flow=drive:/1RfbZbGBi3q-nBb_qivYKSPvOc1MbgoPJ&shared&mode=app',
        fields: [
            { id: 'event_name', type: 'text', label: 'Nama Event', required: true },
            { id: 'event_type', type: 'select', label: 'Tipe Event', options: ['Conference/Seminar', 'Workshop/Training', 'Webinar/Online', 'Product Launch', 'Networking', 'Party/Celebration', 'Sale/Promo', 'Exhibition'], required: true },
            { id: 'event_date', type: 'date', label: 'Tanggal Event', required: true },
            { id: 'event_time', type: 'text', label: 'Waktu', placeholder: '09:00 - 17:00 WIB', required: true },
            { id: 'venue', type: 'text', label: 'Lokasi/Venue', required: true },
            { id: 'event_description', type: 'textarea', label: 'Deskripsi Event', required: true },
            { id: 'speakers_guests', type: 'textarea', label: 'Pembicara/Guest (opsional)', required: false },
            { id: 'ticket_price', type: 'text', label: 'Harga Tiket', placeholder: 'Free, Rp 100K, dll', required: true },
            { id: 'target_audience', type: 'textarea', label: 'Target Audience', required: true },
            { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true }
        ],
        promptTemplate: `=== EVENT PROMOTION REQUEST ===\n\nEVENT: {event_name}\nTYPE: {event_type}\nDATE: {event_date}\nTIME: {event_time}\nVENUE: {venue}\nDESCRIPTION: {event_description}\nSPEAKERS: {speakers_guests}\nPRICE: {ticket_price}\nAUDIENCE: {target_audience}\nCOLORS: {brand_colors}\n\nGenerate complete event kit:\n- Event poster\n- Social media posts\n- Story templates\n- Email invitation\n- Registration page copy\n- Countdown graphics\n- Speaker cards\n- Thank you graphics`
    },

    'reseller-dropship-kit': {
        id: 'WF-050', file: '50-reseller-dropship-kit.txt', name: 'Reseller & Dropship Kit', icon: '📦',
        category: 'ecommerce', tags: ['ecommerce', 'business'],
        description: 'Marketing kit for resellers and dropshippers', output: 'Full reseller kit',
        models: 'Gemini + Imagen 4', difficulty: 'intermediate', estimatedTime: '15-20 min',
        opalLink: 'https://opal.google/?flow=drive:/19hfoKiNWJjykbsvAFyP5Jyi-dBW-JU0s&shared&mode=app',
        fields: [
            { id: 'product_name', type: 'text', label: 'Nama Produk', required: true },
            { id: 'product_category', type: 'select', label: 'Kategori', options: ['Fashion', 'Beauty', 'Health', 'Electronics', 'Home', 'Food', 'Kids', 'Other'], required: true },
            { id: 'supplier_brand', type: 'text', label: 'Nama Supplier/Brand', required: true },
            { id: 'product_description', type: 'textarea', label: 'Deskripsi Produk', required: true },
            { id: 'price_info', type: 'textarea', label: 'Info Harga', placeholder: 'Harga modal, harga jual, margin...', required: true },
            { id: 'target_reseller', type: 'select', label: 'Target Reseller', options: ['Pemula', 'Berpengalaman', 'Semua Level'], required: true },
            { id: 'selling_points', type: 'textarea', label: 'Selling Points', required: true }
        ],
        promptTemplate: `=== RESELLER KIT REQUEST ===\n\nPRODUCT: {product_name}\nCATEGORY: {product_category}\nSUPPLIER: {supplier_brand}\nDESCRIPTION: {product_description}\nPRICE: {price_info}\nTARGET: {target_reseller}\nSELLING POINTS: {selling_points}\n\nGenerate reseller kit:\n- Product photos\n- Ready-to-post captions\n- Price list template\n- Testimonial templates\n- FAQ for customers\n- WhatsApp broadcast templates\n- Comparison graphics`
    },

    // ═══════════════════════════════════════════════════════════════
    // WF-051 to WF-070: Text & Visual Tools
    // ═══════════════════════════════════════════════════════════════

    'caption-generator': {
        id: 'WF-051', file: '51-caption-generator.txt', name: 'Caption Generator Pro', icon: '💬',
        category: 'text', tags: ['text', 'marketing', 'popular'],
        description: 'Generate 30 engaging captions for all platforms', output: '30 captions + hashtags',
        models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '3-5 min', popular: true,
        opalLink: 'https://opal.google/?flow=drive:/1xgfTl0InF8hleZABdeWivx-jupz-ZrwT&shared&mode=app',
        fields: [
            { id: 'post_topic', type: 'text', label: 'Topik Post', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Twitter', 'All Platforms'], required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual', 'Funny/Witty', 'Inspirational', 'Educational', 'Promotional'], required: true },
            { id: 'caption_length', type: 'select', label: 'Panjang Caption', options: ['Short (1-2 lines)', 'Medium (3-5 lines)', 'Long (storytelling)'], required: true },
            { id: 'include_cta', type: 'select', label: 'Include CTA?', options: ['Yes', 'No'], required: true },
            { id: 'include_emojis', type: 'select', label: 'Include Emojis?', options: ['Yes - Heavy', 'Yes - Minimal', 'No'], required: true },
            { id: 'brand_voice', type: 'textarea', label: 'Brand Voice (opsional)', placeholder: 'Deskripsikan gaya komunikasi brand...', required: false }
        ],
        promptTemplate: `=== CAPTION GENERATION REQUEST ===\n\nTOPIC: {post_topic}\nPLATFORM: {platform}\nTONE: {tone}\nLENGTH: {caption_length}\nCTA: {include_cta}\nEMOJIS: {include_emojis}\nBRAND VOICE: {brand_voice}\n\nGenerate 30 caption variations with hashtags.`
    },

    'blog-post-generator': {
        id: 'WF-052', file: '52-blog-post-generator.txt', name: 'Blog Post Generator', icon: '📰',
        category: 'text', tags: ['text', 'marketing'],
        description: 'Complete blog posts with meta descriptions', output: '5 blog posts + SEO meta',
        models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '10-15 min',
        opalLink: 'https://opal.google/?flow=drive:/1ngj_mawJUnrzb25hY9REhyodshIBujwF&shared&mode=app',
        fields: [
            { id: 'blog_topic', type: 'text', label: 'Topik Blog', required: true },
            { id: 'blog_niche', type: 'text', label: 'Niche Blog', required: true },
            { id: 'target_keywords', type: 'textarea', label: 'Target Keywords', required: true },
            { id: 'word_count', type: 'select', label: 'Jumlah Kata', options: ['500-800 (short)', '1000-1500 (medium)', '2000-2500 (long)', '3000+ (pillar)'], required: true },
            { id: 'blog_format', type: 'select', label: 'Format', options: ['How-To Guide', 'Listicle', 'Review', 'Comparison', 'Case Study', 'Opinion/Editorial'], required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual', 'Educational', 'Conversational'], required: true },
            { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }
        ],
        promptTemplate: `=== BLOG POST REQUEST ===\n\nTOPIC: {blog_topic}\nNICHE: {blog_niche}\nKEYWORDS: {target_keywords}\nWORDS: {word_count}\nFORMAT: {blog_format}\nTONE: {tone}\nAUDIENCE: {target_audience}\n\nGenerate 5 complete blog posts with SEO optimization.`
    },

    'newsletter-writer': { id: 'WF-053', file: '53-newsletter-writer.txt', name: 'Newsletter Writer', icon: '📧', category: 'text', tags: ['text', 'marketing'], description: 'Engaging newsletter content with subject lines', output: '5 newsletters + 20 subjects', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '8-12 min', fields: [{ id: 'newsletter_topic', type: 'text', label: 'Topik Newsletter', required: true }, { id: 'newsletter_type', type: 'select', label: 'Tipe', options: ['Weekly Digest', 'Product Update', 'Educational', 'Promotional', 'Personal'], required: true }, { id: 'audience', type: 'text', label: 'Audience', required: true }, { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Friendly', 'Casual', 'Urgent'], required: true }], promptTemplate: `=== NEWSLETTER REQUEST ===\n\nTOPIC: {newsletter_topic}\nTYPE: {newsletter_type}\nAUDIENCE: {audience}\nTONE: {tone}\n\nGenerate 5 newsletters with 20 subject line options.` },

    'product-desc-writer': { id: 'WF-054', file: '54-product-description-writer.txt', name: 'Product Description Writer', icon: '🏷️', category: 'text', tags: ['text', 'ecommerce'], description: 'Compelling e-commerce product descriptions', output: '10 descriptions + bullets', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '5-8 min', fields: [{ id: 'product_name', type: 'text', label: 'Nama Produk', required: true }, { id: 'product_category', type: 'select', label: 'Kategori', options: ['Fashion', 'Electronics', 'Beauty', 'Home', 'Food', 'Health', 'Sports'], required: true }, { id: 'key_features', type: 'textarea', label: 'Fitur Utama', required: true }, { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }, { id: 'platform', type: 'select', label: 'Platform', options: ['Shopify', 'Amazon', 'Tokopedia', 'Shopee', 'General'], required: true }], promptTemplate: `=== PRODUCT DESCRIPTION REQUEST ===\n\nPRODUCT: {product_name}\nCATEGORY: {product_category}\nFEATURES: {key_features}\nAUDIENCE: {target_audience}\nPLATFORM: {platform}\n\nGenerate 10 product descriptions with bullet points.` },

    'copywriting-formula': { id: 'WF-055', file: '55-copywriting-formula.txt', name: 'Copywriting Formula Generator', icon: '✍️', category: 'text', tags: ['text', 'marketing'], description: 'Copy using AIDA, PAS, FAB, 4Ps formulas', output: '20 copy variations', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '5-8 min', fields: [{ id: 'product_service', type: 'text', label: 'Produk/Jasa', required: true }, { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }, { id: 'formula', type: 'select', label: 'Formula', options: ['AIDA', 'PAS', 'FAB', '4Ps', 'Before-After-Bridge', 'All Formulas'], required: true }, { id: 'use_case', type: 'select', label: 'Use Case', options: ['Landing Page', 'Ad Copy', 'Email', 'Social Post', 'Sales Page'], required: true }, { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual', 'Urgent', 'Friendly'], required: true }], promptTemplate: `=== COPYWRITING REQUEST ===\n\nPRODUCT: {product_service}\nAUDIENCE: {target_audience}\nFORMULA: {formula}\nUSE CASE: {use_case}\nTONE: {tone}\n\nGenerate 20 copy variations using specified formulas.` },

    'story-generator': { id: 'WF-056', file: '56-story-generator.txt', name: 'Story Generator', icon: '📖', category: 'text', tags: ['text', 'marketing'], description: 'Brand stories and customer success narratives', output: '5 stories + variations', models: 'Gemini 3 Pro', difficulty: 'intermediate', estimatedTime: '8-12 min', fields: [{ id: 'story_type', type: 'select', label: 'Tipe Story', options: ['Brand Origin', 'Customer Success', 'Behind-the-Scenes', 'Transformation', 'Journey'], required: true }, { id: 'protagonist', type: 'text', label: 'Tokoh Utama', required: true }, { id: 'conflict', type: 'text', label: 'Tantangan/Masalah', required: true }, { id: 'resolution', type: 'text', label: 'Solusi/Hasil', required: true }, { id: 'tone', type: 'select', label: 'Tone', options: ['Inspirational', 'Emotional', 'Humorous', 'Professional', 'Dramatic'], required: true }], promptTemplate: `=== STORY GENERATION REQUEST ===\n\nTYPE: {story_type}\nPROTAGONIST: {protagonist}\nCONFLICT: {conflict}\nRESOLUTION: {resolution}\nTONE: {tone}\n\nGenerate 5 story variations.` },

    'linkedin-content': { id: 'WF-057', file: '57-linkedin-content.txt', name: 'LinkedIn Content Creator', icon: '💼', category: 'text', tags: ['text', 'marketing', 'business'], description: 'Professional LinkedIn posts and articles', output: '20 posts + 5 articles', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '8-12 min', fields: [{ id: 'topic', type: 'text', label: 'Topik/Industri', required: true }, { id: 'content_type', type: 'select', label: 'Tipe Konten', options: ['Thought Leadership', 'Industry Insights', 'Personal Story', 'Tips & Advice', 'Announcement', 'Case Study'], required: true }, { id: 'goal', type: 'select', label: 'Tujuan', options: ['Build Authority', 'Generate Leads', 'Network', 'Recruit', 'Brand Awareness'], required: true }, { id: 'your_role', type: 'text', label: 'Jabatan/Role Anda', required: true }], promptTemplate: `=== LINKEDIN CONTENT REQUEST ===\n\nTOPIC: {topic}\nTYPE: {content_type}\nGOAL: {goal}\nROLE: {your_role}\n\nGenerate 20 LinkedIn posts and 5 articles.` },

    'youtube-seo': { id: 'WF-058', file: '58-youtube-seo.txt', name: 'YouTube SEO Optimizer', icon: '🎬', category: 'text', tags: ['text', 'video', 'marketing'], description: 'Optimized titles, descriptions, tags, timestamps', output: '10 titles + full SEO package', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '5-8 min', fields: [{ id: 'video_topic', type: 'text', label: 'Topik Video', required: true }, { id: 'channel_niche', type: 'text', label: 'Niche Channel', required: true }, { id: 'video_length', type: 'select', label: 'Durasi Video', options: ['Short (<5 min)', 'Medium (5-15 min)', 'Long (15-30 min)', 'Very Long (30+ min)'], required: true }, { id: 'title_style', type: 'select', label: 'Gaya Title', options: ['How-To', 'Listicle', 'Question', 'Shocking/Clickbait', 'Tutorial', 'Review'], required: true }], promptTemplate: `=== YOUTUBE SEO REQUEST ===\n\nTOPIC: {video_topic}\nNICHE: {channel_niche}\nLENGTH: {video_length}\nTITLE STYLE: {title_style}\n\nGenerate complete YouTube SEO package.` },

    'press-release': { id: 'WF-059', file: '59-press-release.txt', name: 'Press Release Generator', icon: '📰', category: 'text', tags: ['text', 'business', 'marketing'], description: 'Professional press releases with AP style', output: '3 press releases + media kit', models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '10-15 min', fields: [{ id: 'announcement', type: 'text', label: 'Pengumuman', required: true }, { id: 'company_name', type: 'text', label: 'Nama Perusahaan', required: true }, { id: 'release_type', type: 'select', label: 'Tipe', options: ['Product Launch', 'Company News', 'Event', 'Partnership', 'Award', 'Funding'], required: true }, { id: 'key_details', type: 'textarea', label: 'Detail Penting', required: true }, { id: 'quotes', type: 'textarea', label: 'Kutipan (opsional)', required: false }], promptTemplate: `=== PRESS RELEASE REQUEST ===\n\nANNOUNCEMENT: {announcement}\nCOMPANY: {company_name}\nTYPE: {release_type}\nDETAILS: {key_details}\nQUOTES: {quotes}\n\nGenerate 3 press release versions with media kit.` },

    'faq-generator': { id: 'WF-060', file: '60-faq-generator.txt', name: 'FAQ Generator', icon: '❓', category: 'text', tags: ['text', 'business'], description: 'Comprehensive FAQ sections with SEO answers', output: '30 FAQs + schema', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '5-8 min', fields: [{ id: 'product_service', type: 'text', label: 'Produk/Jasa', required: true }, { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }, { id: 'faq_categories', type: 'select', label: 'Kategori FAQ', options: ['General', 'Pricing', 'Technical', 'Support', 'Shipping', 'All Categories'], required: true }, { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Friendly', 'Technical'], required: true }], promptTemplate: `=== FAQ GENERATION REQUEST ===\n\nPRODUCT: {product_service}\nAUDIENCE: {target_audience}\nCATEGORIES: {faq_categories}\nTONE: {tone}\n\nGenerate 30 FAQs with SEO-optimized answers and schema markup.` },

    'quiz-poll-generator': { id: 'WF-061', file: '61-quiz-poll-generator.txt', name: 'Quiz & Poll Generator', icon: '🎯', category: 'text', tags: ['text', 'marketing'], description: 'Engaging quizzes, polls, and interactive content', output: '10 quizzes + 20 polls', models: 'Gemini 2.5 Flash', difficulty: 'beginner', estimatedTime: '5-8 min', fields: [{ id: 'topic', type: 'text', label: 'Topik', required: true }, { id: 'quiz_type', type: 'select', label: 'Tipe', options: ['Personality Quiz', 'Knowledge Test', 'Product Finder', 'Assessment', 'Fun Quiz'], required: true }, { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram Stories', 'Twitter', 'Website', 'Email', 'All'], required: true }], promptTemplate: `=== QUIZ/POLL REQUEST ===\n\nTOPIC: {topic}\nTYPE: {quiz_type}\nPLATFORM: {platform}\n\nGenerate 10 quizzes and 20 polls.` },

    'ebook-outline': { id: 'WF-062', file: '62-ebook-outline.txt', name: 'eBook Outline Generator', icon: '📚', category: 'text', tags: ['text', 'marketing'], description: 'Complete eBook outlines with chapter summaries', output: 'Full outline + briefs', models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '15-20 min', fields: [{ id: 'ebook_title', type: 'text', label: 'Judul eBook', required: true }, { id: 'main_topic', type: 'text', label: 'Topik Utama', required: true }, { id: 'chapter_count', type: 'select', label: 'Jumlah Chapter', options: ['5', '7', '10', '12', '15'], required: true }, { id: 'goal', type: 'select', label: 'Tujuan', options: ['Lead Magnet', 'Authority Building', 'Course Companion', 'Product Guide'], required: true }, { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }], promptTemplate: `=== EBOOK OUTLINE REQUEST ===\n\nTITLE: {ebook_title}\nTOPIC: {main_topic}\nCHAPTERS: {chapter_count}\nGOAL: {goal}\nAUDIENCE: {target_audience}\n\nGenerate complete eBook outline with chapter summaries.` },

    'webinar-content': { id: 'WF-063', file: '63-webinar-content.txt', name: 'Webinar Content Creator', icon: '🎥', category: 'text', tags: ['text', 'marketing', 'business'], description: 'Complete webinar: script, slides, Q&A, follow-up', output: 'Full webinar package', models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '15-20 min', fields: [{ id: 'webinar_topic', type: 'text', label: 'Topik Webinar', required: true }, { id: 'duration', type: 'select', label: 'Durasi', options: ['30 min', '45 min', '60 min', '90 min'], required: true }, { id: 'webinar_type', type: 'select', label: 'Tipe', options: ['Educational', 'Product Demo', 'Interview', 'Workshop', 'Panel Discussion'], required: true }, { id: 'target_audience', type: 'text', label: 'Target Audience', required: true }], promptTemplate: `=== WEBINAR CONTENT REQUEST ===\n\nTOPIC: {webinar_topic}\nDURATION: {duration}\nTYPE: {webinar_type}\nAUDIENCE: {target_audience}\n\nGenerate complete webinar package.` },

    'chatbot-script': { id: 'WF-064', file: '64-chatbot-script.txt', name: 'Chatbot Script Generator', icon: '🤖', category: 'text', tags: ['text', 'business'], description: 'Conversational chatbot scripts and flows', output: '50 conversation flows', models: 'Gemini 2.5 Pro', difficulty: 'advanced', estimatedTime: '10-15 min', fields: [{ id: 'business_type', type: 'text', label: 'Tipe Bisnis', required: true }, { id: 'use_case', type: 'select', label: 'Use Case', options: ['Customer Support', 'Sales', 'Lead Qualification', 'FAQ Bot', 'Booking/Reservation'], required: true }, { id: 'personality', type: 'select', label: 'Personality', options: ['Professional', 'Friendly', 'Casual', 'Formal', 'Playful'], required: true }, { id: 'common_questions', type: 'textarea', label: 'Pertanyaan Umum', required: true }], promptTemplate: `=== CHATBOT SCRIPT REQUEST ===\n\nBUSINESS: {business_type}\nUSE CASE: {use_case}\nPERSONALITY: {personality}\nCOMMON QUESTIONS:\n{common_questions}\n\nGenerate 50 conversation flows.` },

    'sop-documentation': { id: 'WF-065', file: '65-sop-documentation.txt', name: 'SOP & Documentation', icon: '📋', category: 'text', tags: ['text', 'business'], description: 'Standard Operating Procedures and documentation', output: '5 SOPs + templates', models: 'Gemini 2.5 Pro', difficulty: 'intermediate', estimatedTime: '10-15 min', fields: [{ id: 'process_name', type: 'text', label: 'Nama Proses', required: true }, { id: 'department', type: 'select', label: 'Departemen', options: ['Marketing', 'Sales', 'Operations', 'HR', 'Finance', 'IT', 'Customer Service'], required: true }, { id: 'detail_level', type: 'select', label: 'Level Detail', options: ['Overview', 'Detailed', 'Step-by-Step', 'Comprehensive'], required: true }, { id: 'process_steps', type: 'textarea', label: 'Langkah-Langkah Proses', required: true }], promptTemplate: `=== SOP REQUEST ===\n\nPROCESS: {process_name}\nDEPARTMENT: {department}\nDETAIL: {detail_level}\nSTEPS:\n{process_steps}\n\nGenerate 5 SOP variations with templates.` },

    'social-templates': { id: 'WF-066', file: '66-social-templates.txt', name: 'Social Media Templates', icon: '📱', category: 'image', tags: ['image', 'marketing'], description: 'Branded templates for all platforms', output: '50+ templates', models: 'Imagen 4 + Gemini', difficulty: 'intermediate', estimatedTime: '15-20 min', fields: [{ id: 'brand_name', type: 'text', label: 'Nama Brand', required: true }, { id: 'visual_style', type: 'select', label: 'Gaya Visual', options: ['Modern', 'Minimalist', 'Bold', 'Elegant', 'Playful'], required: true }, { id: 'primary_color', type: 'color', label: 'Warna Utama', required: true }, { id: 'secondary_color', type: 'color', label: 'Warna Sekunder', required: true }, { id: 'platforms', type: 'select', label: 'Platform', options: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'All'], required: true }], promptTemplate: `=== SOCIAL TEMPLATES REQUEST ===\n\nBRAND: {brand_name}\nSTYLE: {visual_style}\nCOLORS: {primary_color}, {secondary_color}\nPLATFORMS: {platforms}\n\nGenerate 50+ social media templates.` },

    'thumbnail-generator': { id: 'WF-067', file: '67-thumbnail-generator.txt', name: 'Thumbnail Generator Pro', icon: '🖼️', category: 'image', tags: ['image', 'video', 'popular'], description: 'Click-worthy thumbnails for YouTube, blogs, courses', output: '20 thumbnail variations', models: 'Imagen 4', difficulty: 'beginner', estimatedTime: '5-8 min', popular: true, opalLink: 'https://opal.google/?flow=drive:/1Df49C7DTqOWYLmVHd_b3qC2m5WmzRrzS&shared&mode=app', fields: [{ id: 'video_title', type: 'text', label: 'Judul Video/Konten', required: true }, { id: 'thumbnail_style', type: 'select', label: 'Gaya Thumbnail', options: ['Face + Text', 'Product Focus', 'Before/After', 'Listicle (Numbers)', 'Dramatic', 'Minimalist'], required: true }, { id: 'emotion', type: 'select', label: 'Emosi', options: ['Excitement', 'Curiosity', 'Shock', 'Trust', 'Urgency', 'Joy'], required: true }, { id: 'platform', type: 'select', label: 'Platform', options: ['YouTube', 'Blog', 'Course', 'Podcast', 'All'], required: true }, { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: false }], promptTemplate: `=== THUMBNAIL REQUEST ===\n\nTITLE: {video_title}\nSTYLE: {thumbnail_style}\nEMOTION: {emotion}\nPLATFORM: {platform}\nCOLORS: {brand_colors}\n\nGenerate 20 click-worthy thumbnails.` },

    'infographic-generator': { id: 'WF-068', file: '68-infographic-generator.txt', name: 'Infographic Generator', icon: '📊', category: 'image', tags: ['image', 'marketing'], description: 'Data-driven infographics with charts', output: '10 infographic designs', models: 'Imagen 4 + Gemini', difficulty: 'intermediate', estimatedTime: '10-15 min', fields: [{ id: 'infographic_topic', type: 'text', label: 'Topik Infographic', required: true }, { id: 'data_points', type: 'textarea', label: 'Data/Statistik', required: true }, { id: 'infographic_style', type: 'select', label: 'Gaya', options: ['Modern', 'Corporate', 'Playful', 'Minimalist', 'Data-Heavy', 'Timeline'], required: true }, { id: 'orientation', type: 'select', label: 'Orientasi', options: ['Vertical (Pinterest)', 'Horizontal', 'Square', 'Multi-page'], required: true }, { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: true }], promptTemplate: `=== INFOGRAPHIC REQUEST ===\n\nTOPIC: {infographic_topic}\nDATA:\n{data_points}\nSTYLE: {infographic_style}\nORIENTATION: {orientation}\nCOLORS: {brand_colors}\n\nGenerate 10 infographic designs.` },

    'meme-generator': { id: 'WF-069', file: '69-meme-generator.txt', name: 'Meme Generator Pro', icon: '😂', category: 'image', tags: ['image', 'marketing'], description: 'Trending memes and relatable content', output: '30 memes', models: 'Imagen 4 + Gemini', difficulty: 'beginner', estimatedTime: '5-8 min', fields: [{ id: 'meme_topic', type: 'text', label: 'Topik/Niche', required: true }, { id: 'meme_style', type: 'select', label: 'Gaya Meme', options: ['Classic Format', 'Reaction', 'Relatable', 'Industry-Specific', 'Trending', 'Original'], required: true }, { id: 'humor_level', type: 'select', label: 'Level Humor', options: ['Subtle', 'Moderate', 'Bold', 'Edgy'], required: true }, { id: 'brand_safe', type: 'select', label: 'Brand Safe?', options: ['Yes - Keep it professional', 'No - Can be edgy'], required: true }], promptTemplate: `=== MEME REQUEST ===\n\nTOPIC: {meme_topic}\nSTYLE: {meme_style}\nHUMOR: {humor_level}\nBRAND SAFE: {brand_safe}\n\nGenerate 30 memes.` },

    'quote-graphics': { id: 'WF-070', file: '70-quote-graphics.txt', name: 'Quote Graphics Generator', icon: '💭', category: 'image', tags: ['image', 'marketing'], description: 'Beautiful quote graphics with typography', output: '30 quote graphics', models: 'Imagen 4', difficulty: 'beginner', estimatedTime: '5-8 min', fields: [{ id: 'quotes', type: 'textarea', label: 'Quotes (satu per baris)', required: true }, { id: 'quote_style', type: 'select', label: 'Gaya', options: ['Minimalist', 'Nature Background', 'Gradient', 'Photo Overlay', 'Abstract', 'Vintage'], required: true }, { id: 'typography', type: 'select', label: 'Typography', options: ['Modern Sans', 'Elegant Serif', 'Handwritten', 'Bold Display', 'Mixed'], required: true }, { id: 'brand_colors', type: 'text', label: 'Warna Brand', placeholder: '#6366F1, #EC4899', required: false }], promptTemplate: `=== QUOTE GRAPHICS REQUEST ===\n\nQUOTES:\n{quotes}\nSTYLE: {quote_style}\nTYPOGRAPHY: {typography}\nCOLORS: {brand_colors}\n\nGenerate 30 quote graphics.` }
};

// Export Batch 2
window.WorkflowsDetailedBatch2 = WorkflowsDetailedBatch2;
