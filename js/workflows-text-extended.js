/**
 * Extended Text & Content Workflows (51-65)
 * Caption, Blog, Newsletter, Product Description, Copywriting, etc.
 */

const TextExtendedWorkflows = {

    'caption-generator-pro': {
        name: 'Caption Generator Pro',
        icon: '💬',
        category: 'text',
        description: 'Generate 30 engaging captions for all social platforms',
        output: '30 captions + hashtags',
        models: 'Gemini 2.5 Flash',
        difficulty: 'beginner',
        estimatedTime: '3-5 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Post Topic', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Twitter', 'All'], required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Professional', 'Casual', 'Funny', 'Inspirational', 'Educational'], required: true },
            { id: 'length', type: 'select', label: 'Length', options: ['Short', 'Medium', 'Long (storytelling)'], required: true }
        ],
        assetUploads: [
            { id: 'content_image', type: 'image', label: '[REFERENCE] Gambar untuk Caption', required: false }
        ]
    },

    'blog-post-generator': {
        name: 'Blog Post Generator',
        icon: '📰',
        category: 'text',
        description: 'Complete blog posts with meta descriptions and internal linking',
        output: '5 blog posts + SEO meta',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Blog Topic', required: true },
            { id: 'niche', type: 'text', label: 'Blog Niche', required: true },
            { id: 'word_count', type: 'select', label: 'Word Count', options: ['500-800', '1000-1500', '2000-2500', '3000+'], required: true },
            { id: 'format', type: 'select', label: 'Format', options: ['How-To', 'Listicle', 'Review', 'Comparison', 'Case Study'], required: true },
            { id: 'target_keyword', type: 'text', label: 'Target Keyword', required: true }
        ],
        assetUploads: [
            { id: 'reference_docs', type: 'document', label: '[DOCUMENT] Referensi/Research', required: false }
        ]
    },

    'newsletter-writer': {
        name: 'Newsletter Writer',
        icon: '📧',
        category: 'text',
        description: 'Engaging newsletter content with subject lines and preview text',
        output: '5 newsletters + 20 subjects',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '8-12 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Newsletter Topic', required: true },
            { id: 'type', type: 'select', label: 'Type', options: ['Weekly Digest', 'Product Update', 'Educational', 'Promotional', 'Personal'], required: true },
            { id: 'audience', type: 'select', label: 'Audience', options: ['New Subscribers', 'Engaged Users', 'Inactive', 'VIP', 'All'], required: true },
            { id: 'brand_name', type: 'text', label: 'Brand Name', required: true }
        ]
    },

    'product-desc-writer': {
        name: 'Product Description Writer',
        icon: '🏷️',
        category: 'text',
        description: 'Compelling e-commerce product descriptions with SEO',
        output: '10 descriptions + bullets',
        models: 'Gemini 2.5 Flash',
        difficulty: 'beginner',
        estimatedTime: '5-8 min',
        fields: [
            { id: 'product_name', type: 'text', label: 'Product Name', required: true },
            { id: 'category', type: 'select', label: 'Category', options: ['Fashion', 'Electronics', 'Beauty', 'Home', 'Food', 'Health', 'Sports'], required: true },
            { id: 'features', type: 'textarea', label: 'Key Features', required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Shopify', 'Amazon', 'Tokopedia', 'Shopee', 'General'], required: true }
        ],
        assetUploads: [
            { id: 'product_images', type: 'image', label: '[PRODUCT] Foto Produk', required: false, multiple: true }
        ]
    },

    'copywriting-formula': {
        name: 'Copywriting Formula Generator',
        icon: '✍️',
        category: 'text',
        description: 'Copy using AIDA, PAS, FAB, 4Ps formulas',
        output: '20 copy variations',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '5-8 min',
        fields: [
            { id: 'product', type: 'text', label: 'Product/Service', required: true },
            { id: 'target_audience', type: 'text', label: 'Target Audience', required: true },
            { id: 'formula', type: 'select', label: 'Formula', options: ['AIDA', 'PAS', 'FAB', '4Ps', 'Before-After-Bridge', 'All'], required: true },
            { id: 'use_case', type: 'select', label: 'Use Case', options: ['Landing Page', 'Ad Copy', 'Email', 'Social Post', 'Sales Page'], required: true }
        ]
    },

    'story-gen': {
        name: 'Story Generator',
        icon: '📖',
        category: 'text',
        description: 'Brand stories, customer success stories, and narratives',
        output: '5 stories + variations',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '8-12 min',
        fields: [
            { id: 'story_type', type: 'select', label: 'Story Type', options: ['Brand Origin', 'Customer Success', 'Behind-the-Scenes', 'Transformation', 'Journey'], required: true },
            { id: 'protagonist', type: 'text', label: 'Main Character', required: true },
            { id: 'conflict', type: 'text', label: 'Challenge/Problem', required: true },
            { id: 'tone', type: 'select', label: 'Tone', options: ['Inspirational', 'Emotional', 'Humorous', 'Professional', 'Dramatic'], required: true }
        ]
    },

    'linkedin-creator': {
        name: 'LinkedIn Content Creator',
        icon: '💼',
        category: 'text',
        description: 'Professional LinkedIn posts and articles',
        output: '20 posts + 5 articles',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '8-12 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Topic/Industry', required: true },
            { id: 'content_type', type: 'select', label: 'Type', options: ['Thought Leadership', 'Industry Insights', 'Personal Story', 'Tips', 'Announcement'], required: true },
            { id: 'goal', type: 'select', label: 'Goal', options: ['Build Authority', 'Generate Leads', 'Network', 'Recruit', 'Brand Awareness'], required: true }
        ]
    },

    'youtube-seo-optimizer': {
        name: 'YouTube SEO Optimizer',
        icon: '🎬',
        category: 'text',
        description: 'Optimized titles, descriptions, tags, and timestamps',
        output: '10 titles + full SEO package',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '5-8 min',
        fields: [
            { id: 'video_topic', type: 'text', label: 'Video Topic', required: true },
            { id: 'niche', type: 'text', label: 'Channel Niche', required: true },
            { id: 'video_length', type: 'select', label: 'Video Length', options: ['Short (<5 min)', 'Medium (5-15)', 'Long (15-30)', 'Very Long (30+)'], required: true },
            { id: 'style', type: 'select', label: 'Title Style', options: ['How-To', 'Listicle', 'Question', 'Shocking', 'Tutorial'], required: true }
        ]
    },

    'press-release-gen': {
        name: 'Press Release Generator',
        icon: '📰',
        category: 'text',
        description: 'Professional press releases with AP style formatting',
        output: '3 press releases + media kit',
        models: 'Gemini 2.5 Pro',
        difficulty: 'advanced',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'announcement', type: 'text', label: 'Announcement', required: true },
            { id: 'company', type: 'text', label: 'Company Name', required: true },
            { id: 'type', type: 'select', label: 'Type', options: ['Product Launch', 'Company News', 'Event', 'Partnership', 'Award'], required: true }
        ],
        assetUploads: [
            { id: 'company_logo', type: 'image', label: '[LOGO] Logo Perusahaan', required: false }
        ]
    },

    'faq-gen': {
        name: 'FAQ Generator',
        icon: '❓',
        category: 'text',
        description: 'Comprehensive FAQ sections with SEO-optimized answers',
        output: '30 FAQs + schema',
        models: 'Gemini 2.5 Flash',
        difficulty: 'beginner',
        estimatedTime: '5-8 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Product/Service', required: true },
            { id: 'audience', type: 'text', label: 'Target Audience', required: true },
            { id: 'categories', type: 'select', label: 'Categories', options: ['General', 'Pricing', 'Technical', 'Support', 'All'], required: true }
        ]
    },

    'quiz-poll-gen': {
        name: 'Quiz & Poll Generator',
        icon: '🎯',
        category: 'text',
        description: 'Engaging quizzes, polls, and interactive content',
        output: '10 quizzes + 20 polls',
        models: 'Gemini 2.5 Flash',
        difficulty: 'beginner',
        estimatedTime: '5-8 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Quiz Topic', required: true },
            { id: 'type', type: 'select', label: 'Type', options: ['Personality Quiz', 'Knowledge Test', 'Product Finder', 'Assessment', 'Fun Quiz'], required: true },
            { id: 'platform', type: 'select', label: 'Platform', options: ['Instagram Stories', 'Twitter', 'Website', 'Email', 'All'], required: true }
        ]
    },

    'ebook-outline-gen': {
        name: 'eBook Outline Generator',
        icon: '📚',
        category: 'text',
        description: 'Complete eBook outlines with chapter summaries',
        output: 'Full outline + briefs',
        models: 'Gemini 2.5 Pro',
        difficulty: 'advanced',
        estimatedTime: '15-20 min',
        fields: [
            { id: 'title', type: 'text', label: 'eBook Title', required: true },
            { id: 'topic', type: 'text', label: 'Main Topic', required: true },
            { id: 'chapters', type: 'select', label: 'Chapters', options: ['5', '7', '10', '12', '15'], required: true },
            { id: 'goal', type: 'select', label: 'Goal', options: ['Lead Magnet', 'Authority', 'Course Companion', 'Product Guide'], required: true }
        ]
    },

    'webinar-creator': {
        name: 'Webinar Content Creator',
        icon: '🎥',
        category: 'text',
        description: 'Complete webinar: script, slides, Q&A, follow-up emails',
        output: 'Full webinar package',
        models: 'Gemini 2.5 Pro',
        difficulty: 'advanced',
        estimatedTime: '15-20 min',
        fields: [
            { id: 'topic', type: 'text', label: 'Webinar Topic', required: true },
            { id: 'duration', type: 'select', label: 'Duration', options: ['30 min', '45 min', '60 min', '90 min'], required: true },
            { id: 'type', type: 'select', label: 'Type', options: ['Educational', 'Product Demo', 'Interview', 'Workshop', 'Panel'], required: true }
        ]
    },

    'chatbot-script-gen': {
        name: 'Chatbot Script Generator',
        icon: '🤖',
        category: 'text',
        description: 'Conversational chatbot scripts and response flows',
        output: '50 conversation flows',
        models: 'Gemini 2.5 Pro',
        difficulty: 'advanced',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'business', type: 'text', label: 'Business Type', required: true },
            { id: 'use_case', type: 'select', label: 'Use Case', options: ['Customer Support', 'Sales', 'Lead Qualification', 'FAQ Bot', 'Booking'], required: true },
            { id: 'tone', type: 'select', label: 'Personality', options: ['Professional', 'Friendly', 'Casual', 'Formal', 'Playful'], required: true }
        ]
    },

    'sop-gen': {
        name: 'SOP & Documentation',
        icon: '📋',
        category: 'text',
        description: 'Standard Operating Procedures and documentation',
        output: '5 SOPs + templates',
        models: 'Gemini 2.5 Pro',
        difficulty: 'intermediate',
        estimatedTime: '10-15 min',
        fields: [
            { id: 'process', type: 'text', label: 'Process Name', required: true },
            { id: 'department', type: 'select', label: 'Department', options: ['Marketing', 'Sales', 'Operations', 'HR', 'Finance', 'IT', 'Customer Service'], required: true },
            { id: 'detail_level', type: 'select', label: 'Detail Level', options: ['Overview', 'Detailed', 'Step-by-Step', 'Comprehensive'], required: true }
        ]
    }
};

// Export
if (typeof window !== 'undefined') {
    window.TextExtendedWorkflows = TextExtendedWorkflows;
}
