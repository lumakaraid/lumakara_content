/**
 * Visual & Graphics Workflows (66-80)
 * Social Templates, Thumbnails, Infographics, Memes, Quotes, Banners, etc.
 */

const VisualGraphicsWorkflows = {

    // ═══════════════════════════════════════════════════════════════
    // 🎨 SOCIAL MEDIA TEMPLATES (66-70)
    // ═══════════════════════════════════════════════════════════════

    'social-templates': {
        name: 'Social Media Templates',
        icon: '📱',
        category: 'image',
        description: 'Ready-to-use templates for all social platforms',
        output: '20 templates + variations',
        models: 'Imagen 4 + Gemini',
        difficulty: 'beginner',
        estimatedTime: '10-15 min',
        popular: true,
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['Kosmetik', 'Fashion', 'Skincare', 'F&B', 'Tech', 'Education', 'Health', 'UMKM'], required: true },
            { id: 'template_type', type: 'select', label: 'Tipe Template', options: ['Quote Post', 'Promo/Sale', 'Product Feature', 'Tips/Educational', 'Announcement', 'Testimonial', 'All Types'], required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram Feed', 'Instagram Story', 'Facebook', 'LinkedIn', 'Twitter', 'All'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Minimalist', 'Bold & Colorful', 'Elegant', 'Playful', 'Professional'], required: true },
            { id: 'primary_color', type: 'text', label: 'Warna Utama (hex)', placeholder: '#FF5733', required: false }
        ],
        assetUploads: [
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'thumbnail-generator': {
        name: 'Thumbnail Generator',
        icon: '🖼️',
        category: 'image',
        description: 'Eye-catching thumbnails for YouTube, blogs, courses',
        output: '10 thumbnails + variations',
        models: 'Imagen 4 + Gemini',
        difficulty: 'beginner',
        estimatedTime: '8-12 min',
        popular: true,
        fields: [
            { id: 'title', type: 'text', label: 'Judul Video/Konten', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['YouTube', 'Blog', 'Course/Webinar', 'Podcast', 'All'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Bold Text', 'Face + Text', 'Minimalist', 'Dramatic', 'Colorful'], required: true },
            { id: 'emotion', type: 'select', label: 'Emosi', options: ['Excited', 'Curious', 'Shocked', 'Happy', 'Professional'], required: true },
            { id: 'text_overlay', type: 'text', label: 'Text di Thumbnail', required: false }
        ],
        assetUploads: [
            { id: 'face_photo', type: 'image', label: '[FACE] Foto Wajah (opsional)', required: false },
            { id: 'product_image', type: 'image', label: '[PRODUCT] Foto Produk (opsional)', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'infographic-generator': {
        name: 'Infographic Generator',
        icon: '📊',
        category: 'image',
        description: 'Data visualization and infographic designs',
        output: '5 infographics + variations',
        models: 'Imagen 4 + Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Topik Infografis', required: true },
            { id: 'data_points', type: 'textarea', label: 'Data/Statistik (pisah dengan enter)', required: true },
            { id: 'infographic_type', type: 'select', label: 'Tipe', options: ['Timeline', 'Comparison', 'Process/Steps', 'Statistics', 'List/Tips', 'Map/Location'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Modern Flat', 'Illustrated', 'Corporate', 'Playful', 'Minimalist'], required: true },
            { id: 'orientation', type: 'select', label: 'Orientasi', options: ['Vertical (Pinterest)', 'Horizontal (Blog)', 'Square (Instagram)'], required: true }
        ],
        assetUploads: [
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: false },
            { id: 'icons', type: 'image', label: '[REFERENCE] Icon/Ilustrasi', required: false, multiple: true }
        ]
    },

    'meme-generator': {
        name: 'Meme Generator',
        icon: '😂',
        category: 'image',
        description: 'Viral memes for brand engagement',
        output: '20 memes + variations',
        models: 'Imagen 4 + Gemini 2.5 Flash',
        difficulty: 'beginner',
        estimatedTime: '5-10 min',
        popular: true,
        fields: [
            { id: 'topic', type: 'text', label: 'Topik/Tema Meme', required: true },
            { id: 'industry', type: 'select', label: 'Industri', options: ['General', 'Tech', 'Marketing', 'Fashion', 'Food', 'Fitness', 'Finance', 'Education'], required: true },
            { id: 'meme_style', type: 'select', label: 'Style Meme', options: ['Classic Format', 'Relatable', 'Trending Template', 'Original', 'Reaction'], required: true },
            { id: 'humor_level', type: 'select', label: 'Level Humor', options: ['Subtle/Witty', 'Obvious/Direct', 'Sarcastic', 'Wholesome', 'Edgy'], required: true },
            { id: 'target_audience', type: 'select', label: 'Target', options: ['Gen Z', 'Millennials', 'Professionals', 'General', 'Niche Community'], required: true }
        ],
        assetUploads: [
            { id: 'reference_meme', type: 'image', label: '[REFERENCE] Template Meme', required: false }
        ]
    },

    'quote-graphics': {
        name: 'Quote Graphics Generator',
        icon: '💬',
        category: 'image',
        description: 'Beautiful quote cards for social media',
        output: '15 quote graphics',
        models: 'Imagen 4 + Gemini',
        difficulty: 'beginner',
        estimatedTime: '5-10 min',
        fields: [
            { id: 'quotes', type: 'textarea', label: 'Quotes (satu per baris)', required: true },
            { id: 'quote_source', type: 'select', label: 'Sumber Quote', options: ['Original/Brand', 'Famous Person', 'Customer Testimonial', 'Industry Expert', 'Anonymous'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Minimalist', 'Bold Typography', 'Photo Background', 'Gradient', 'Illustrated'], required: true },
            { id: 'mood', type: 'select', label: 'Mood', options: ['Inspirational', 'Motivational', 'Thoughtful', 'Funny', 'Professional'], required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'LinkedIn', 'Twitter', 'Pinterest', 'All'], required: true }
        ],
        assetUploads: [
            { id: 'background', type: 'image', label: '[REFERENCE] Background Image', required: false },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: false }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎨 MARKETING GRAPHICS (71-75)
    // ═══════════════════════════════════════════════════════════════

    'banner-generator': {
        name: 'Banner Generator',
        icon: '🏷️',
        category: 'image',
        description: 'Web banners, ads, and promotional graphics',
        output: '10 banners + all sizes',
        models: 'Imagen 4 + Gemini',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'campaign_name', type: 'text', label: 'Nama Campaign/Promo', required: true },
            { id: 'banner_type', type: 'select', label: 'Tipe Banner', options: ['Website Hero', 'Social Media Ad', 'Google Display', 'Email Header', 'Marketplace Banner', 'All'], required: true },
            { id: 'message', type: 'text', label: 'Pesan Utama', required: true },
            { id: 'cta', type: 'text', label: 'Call to Action', placeholder: 'Shop Now, Learn More, etc.', required: true },
            { id: 'promo_details', type: 'text', label: 'Detail Promo (diskon, dll)', required: false },
            { id: 'style', type: 'select', label: 'Style', options: ['Modern', 'Bold', 'Elegant', 'Playful', 'Minimalist'], required: true }
        ],
        assetUploads: [
            { id: 'product_image', type: 'image', label: '[PRODUCT] Foto Produk', required: false },
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Design', required: false }
        ]
    },

    'avatar-generator': {
        name: 'Avatar & Profile Generator',
        icon: '👤',
        category: 'image',
        description: 'Profile pictures and avatars for all platforms',
        output: '10 avatars + variations',
        models: 'Imagen 4',
        difficulty: 'beginner',
        estimatedTime: '5-10 min',
        fields: [
            { id: 'avatar_type', type: 'select', label: 'Tipe Avatar', options: ['Photo-based', 'Illustrated', 'Logo-based', '3D Character', 'Abstract'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Professional', 'Casual', 'Artistic', 'Minimalist', 'Fun/Playful'], required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['LinkedIn', 'Instagram', 'Twitter', 'Discord', 'All'], required: true },
            { id: 'brand_personality', type: 'select', label: 'Personality', options: ['Friendly', 'Professional', 'Creative', 'Bold', 'Approachable'], required: true }
        ],
        assetUploads: [
            { id: 'face_photo', type: 'image', label: '[FACE] Foto Wajah', required: false },
            { id: 'logo', type: 'image', label: '[LOGO] Logo (untuk logo-based)', required: false }
        ]
    },

    'pattern-texture': {
        name: 'Pattern & Texture Generator',
        icon: '🎨',
        category: 'image',
        description: 'Seamless patterns and textures for branding',
        output: '10 patterns + variations',
        models: 'Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'pattern_type', type: 'select', label: 'Tipe Pattern', options: ['Geometric', 'Organic/Nature', 'Abstract', 'Branded Elements', 'Textile/Fabric'], required: true },
            { id: 'use_case', type: 'select', label: 'Penggunaan', options: ['Packaging', 'Social Media Background', 'Website', 'Print Material', 'Product Design'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Modern', 'Classic', 'Playful', 'Elegant', 'Bold'], required: true },
            { id: 'color_scheme', type: 'select', label: 'Skema Warna', options: ['Monochrome', 'Brand Colors', 'Pastel', 'Bold/Vibrant', 'Earth Tones'], required: true },
            { id: 'density', type: 'select', label: 'Density', options: ['Sparse', 'Medium', 'Dense'], required: true }
        ],
        assetUploads: [
            { id: 'brand_elements', type: 'image', label: '[LOGO] Elemen Brand', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Pattern', required: false }
        ]
    },

    'icon-set-generator': {
        name: 'Icon Set Generator',
        icon: '⭐',
        category: 'image',
        description: 'Custom icon sets for websites and apps',
        output: '30 icons + variations',
        models: 'Imagen 4 + Gemini',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        fields: [
            { id: 'icon_category', type: 'text', label: 'Kategori Icon (e.g., e-commerce, social)', required: true },
            { id: 'icon_style', type: 'select', label: 'Style', options: ['Line/Outline', 'Filled', 'Duotone', 'Gradient', '3D'], required: true },
            { id: 'use_case', type: 'select', label: 'Penggunaan', options: ['Website/App', 'Social Media', 'Presentation', 'Print', 'All'], required: true },
            { id: 'corner_style', type: 'select', label: 'Corner Style', options: ['Rounded', 'Sharp', 'Mixed'], required: true },
            { id: 'stroke_weight', type: 'select', label: 'Stroke Weight', options: ['Thin', 'Regular', 'Bold'], required: true }
        ],
        assetUploads: [
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'story-template': {
        name: 'Story Template Generator',
        icon: '📲',
        category: 'image',
        description: 'Instagram/Facebook story templates',
        output: '15 story templates',
        models: 'Imagen 4 + Gemini',
        difficulty: 'beginner',
        estimatedTime: '8-12 min',
        popular: true,
        fields: [
            { id: 'brand_name', type: 'text', label: 'Nama Brand', required: true },
            { id: 'template_purpose', type: 'select', label: 'Tujuan', options: ['Product Showcase', 'Q&A', 'Poll/Quiz', 'Announcement', 'Behind the Scenes', 'Tips', 'Testimonial', 'All'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Minimalist', 'Bold', 'Elegant', 'Playful', 'Professional'], required: true },
            { id: 'interactive_elements', type: 'select', label: 'Elemen Interaktif', options: ['Poll', 'Question Box', 'Slider', 'Quiz', 'Countdown', 'None'], required: true }
        ],
        assetUploads: [
            { id: 'logo', type: 'image', label: '[LOGO] Logo Brand', required: true },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 📸 SPECIALIZED PHOTOGRAPHY (76-77)
    // ═══════════════════════════════════════════════════════════════

    'food-photography': {
        name: 'Food Photography Generator',
        icon: '🍕',
        category: 'image',
        description: 'Appetizing food photos for F&B businesses',
        output: '10 food photos + variations',
        models: 'Imagen 4',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        popular: true,
        industries: ['F&B'],
        fields: [
            { id: 'food_type', type: 'text', label: 'Jenis Makanan/Minuman', required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Rustic/Homey', 'Modern/Clean', 'Dark & Moody', 'Bright & Airy', 'Lifestyle'], required: true },
            { id: 'angle', type: 'select', label: 'Angle', options: ['Flat Lay (Top)', '45 Degree', 'Eye Level', 'Close-up Detail', 'Mixed'], required: true },
            { id: 'props', type: 'select', label: 'Props', options: ['Minimal', 'Full Styling', 'Ingredients', 'Utensils', 'Hands/Action'], required: true },
            { id: 'lighting', type: 'select', label: 'Lighting', options: ['Natural Light', 'Studio', 'Warm/Golden', 'Cool/Blue', 'Dramatic'], required: true }
        ],
        assetUploads: [
            { id: 'food_photo', type: 'image', label: '[PRODUCT] Foto Makanan Asli', required: false },
            { id: 'reference', type: 'image', label: '[REFERENCE] Referensi Style', required: false }
        ]
    },

    'real-estate-visuals': {
        name: 'Real Estate Visuals',
        icon: '🏠',
        category: 'image',
        description: 'Property photos and virtual staging',
        output: '10 property visuals',
        models: 'Imagen 4 + Gemini',
        difficulty: 'intermediate',
        estimatedTime: '15-20 min',
        industries: ['Real Estate'],
        fields: [
            { id: 'property_type', type: 'select', label: 'Tipe Properti', options: ['Rumah', 'Apartemen', 'Ruko', 'Kantor', 'Villa', 'Tanah'], required: true },
            { id: 'visual_type', type: 'select', label: 'Tipe Visual', options: ['Exterior', 'Interior', 'Virtual Staging', 'Floor Plan 3D', 'Aerial View'], required: true },
            { id: 'style', type: 'select', label: 'Style Interior', options: ['Modern', 'Minimalist', 'Classic', 'Industrial', 'Scandinavian', 'Tropical'], required: true },
            { id: 'room_type', type: 'select', label: 'Ruangan', options: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'All Rooms'], required: true },
            { id: 'lighting', type: 'select', label: 'Lighting', options: ['Bright & Airy', 'Warm & Cozy', 'Natural', 'Evening/Night'], required: true }
        ],
        assetUploads: [
            { id: 'property_photos', type: 'image', label: '[PRODUCT] Foto Properti', required: false, multiple: true },
            { id: 'floor_plan', type: 'image', label: '[DOCUMENT] Denah/Floor Plan', required: false }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎵 AUDIO CONTENT (78-80)
    // ═══════════════════════════════════════════════════════════════

    'voiceover-generator': {
        name: 'Voiceover Generator',
        icon: '🎙️',
        category: 'audio',
        description: 'AI voiceovers for videos and presentations',
        output: '5 voiceover scripts + audio',
        models: 'Gemini 2.5 Pro + AudioLM',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'script', type: 'textarea', label: 'Script/Teks untuk Voiceover', required: true },
            { id: 'voice_type', type: 'select', label: 'Tipe Suara', options: ['Male - Professional', 'Male - Casual', 'Female - Professional', 'Female - Casual', 'Neutral'], required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Energetic', 'Calm', 'Authoritative', 'Friendly', 'Dramatic'], required: true },
            { id: 'speed', type: 'select', label: 'Kecepatan', options: ['Slow', 'Normal', 'Fast'], required: true },
            { id: 'use_case', type: 'select', label: 'Penggunaan', options: ['YouTube Video', 'Explainer', 'Ad/Commercial', 'Podcast Intro', 'Presentation'], required: true },
            { id: 'language', type: 'select', label: 'Bahasa', options: ['Bahasa Indonesia', 'English', 'Both'], required: true }
        ],
        assetUploads: [
            { id: 'reference_audio', type: 'document', label: '[REFERENCE] Referensi Audio', required: false }
        ]
    },

    'music-generator': {
        name: 'Background Music Generator',
        icon: '🎵',
        category: 'audio',
        description: 'Royalty-free background music for content',
        output: '5 music tracks',
        models: 'Lyria 2',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'genre', type: 'select', label: 'Genre', options: ['Corporate', 'Upbeat/Pop', 'Cinematic', 'Lo-fi/Chill', 'Electronic', 'Acoustic', 'Ambient'], required: true },
            { id: 'mood', type: 'select', label: 'Mood', options: ['Happy/Uplifting', 'Calm/Relaxing', 'Energetic', 'Dramatic', 'Inspirational', 'Mysterious'], required: true },
            { id: 'duration', type: 'select', label: 'Durasi', options: ['15 seconds', '30 seconds', '1 minute', '2 minutes', '3+ minutes'], required: true },
            { id: 'tempo', type: 'select', label: 'Tempo', options: ['Slow', 'Medium', 'Fast'], required: true },
            { id: 'use_case', type: 'select', label: 'Penggunaan', options: ['YouTube Video', 'TikTok/Reels', 'Podcast', 'Presentation', 'Ad/Commercial', 'Website'], required: true },
            { id: 'instruments', type: 'select', label: 'Instrumen Utama', options: ['Piano', 'Guitar', 'Synth/Electronic', 'Orchestra', 'Mixed'], required: true }
        ]
    },

    'sound-effects': {
        name: 'Sound Effects Generator',
        icon: '🔊',
        category: 'audio',
        description: 'Custom sound effects for videos and apps',
        output: '20 sound effects',
        models: 'AudioLM',
        difficulty: 'beginner',
        estimatedTime: '5-10 min',
        fields: [
            { id: 'sfx_category', type: 'select', label: 'Kategori', options: ['UI/App Sounds', 'Transitions', 'Notifications', 'Nature', 'Urban', 'Whoosh/Swoosh', 'Impact', 'Ambient'], required: true },
            { id: 'style', type: 'select', label: 'Style', options: ['Modern/Digital', 'Organic/Natural', 'Cartoon/Playful', 'Cinematic', 'Minimal'], required: true },
            { id: 'use_case', type: 'select', label: 'Penggunaan', options: ['Video Editing', 'App/Website', 'Podcast', 'Game', 'Presentation'], required: true },
            { id: 'duration', type: 'select', label: 'Durasi', options: ['Short (<1s)', 'Medium (1-3s)', 'Long (3-5s)'], required: true }
        ]
    }
};

// Export for use in main app
if (typeof window !== 'undefined') {
    window.VisualGraphicsWorkflows = VisualGraphicsWorkflows;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualGraphicsWorkflows;
}
