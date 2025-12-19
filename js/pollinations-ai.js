/**
 * ═══════════════════════════════════════════════════════════════════════════
 * POLLINATIONS AI - Free AI Integration for Lumaverse
 * Text Generation, Image Generation, and more
 * ═══════════════════════════════════════════════════════════════════════════
 */

const PollinationsAI = {
    // API Endpoints
    endpoints: {
        text: 'https://text.pollinations.ai/',
        image: 'https://image.pollinations.ai/prompt/',
        imageModels: ['flux', 'turbo', 'flux-realism', 'flux-anime', 'flux-3d']
    },

    // Generate text with Pollinations AI (with retry)
    async generateText(prompt, options = {}) {
        const {
            model = 'openai',
            systemPrompt = 'You are a helpful AI assistant for content creation.',
            temperature = 0.7,
            maxTokens = 2000,
            retries = 2
        } = options;

        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const messages = [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ];

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

                const response = await fetch(this.endpoints.text, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages,
                        model,
                        temperature,
                        max_tokens: maxTokens
                    }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    console.error(`Attempt ${attempt + 1} failed:`, response.status);
                    if (attempt < retries) continue;
                    throw new Error('Text generation failed');
                }
                
                const text = await response.text();
                if (text && text.trim()) {
                    return { success: true, text };
                }
                throw new Error('Empty response');
            } catch (error) {
                console.error(`Pollinations Error (attempt ${attempt + 1}):`, error);
                if (attempt === retries) {
                    return { success: false, error: error.message };
                }
                await new Promise(r => setTimeout(r, 1000)); // Wait 1s before retry
            }
        }
        return { success: false, error: 'All retries failed' };
    },

    // Generate image with Pollinations AI
    generateImageUrl(prompt, options = {}) {
        const {
            width = 1024,
            height = 1024,
            model = 'flux',
            seed = Math.floor(Math.random() * 999999),
            nologo = true,
            enhance = true
        } = options;

        const encodedPrompt = encodeURIComponent(prompt);
        const params = new URLSearchParams({
            width: width.toString(),
            height: height.toString(),
            model,
            seed: seed.toString(),
            nologo: nologo.toString(),
            enhance: enhance.toString()
        });

        return `${this.endpoints.image}${encodedPrompt}?${params.toString()}`;
    },

    // Generate multiple images
    generateMultipleImages(prompt, count = 4, options = {}) {
        const images = [];
        for (let i = 0; i < count; i++) {
            const seed = Math.floor(Math.random() * 999999);
            images.push({
                url: this.generateImageUrl(prompt, { ...options, seed }),
                seed
            });
        }
        return images;
    },

    // AI Content Generation Prompts
    contentPrompts: {
        article: (topic, tone, pillar) => `
Write a comprehensive article about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- Include an engaging headline
- Write a compelling introduction
- Include 3-5 main sections with subheadings
- Add practical tips or actionable advice
- Write a strong conclusion with call-to-action
- Suggest 5-10 relevant hashtags
- Keep it SEO-friendly

Write in Indonesian language.`,

        thread: (topic, tone, pillar) => `
Create a viral Twitter/X thread about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- Start with a powerful hook (Tweet 1)
- Include 5-8 value-packed tweets
- Each tweet should be under 280 characters
- End with a summary and CTA
- Include relevant hashtags

Format each tweet as:
🧵 1/X: [Hook tweet]
2/X: [Content]
...

Write in Indonesian language.`,

        shortVideo: (topic, tone, pillar) => `
Create a short-form video script (15-60 seconds) about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- Hook (first 3 seconds) - must grab attention
- Main content (body)
- Call-to-action
- Suggested visuals/B-roll
- Caption for posting
- Relevant hashtags

Format:
🎬 HOOK (0-3s): [Attention grabber]
📱 BODY (3-50s): [Main content with timestamps]
🎯 CTA (50-60s): [Call to action]
📝 CAPTION: [Post caption]
#️⃣ HASHTAGS: [Relevant hashtags]

Write in Indonesian language.`,

        carousel: (topic, tone, pillar) => `
Create an Instagram carousel post about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- Cover slide (hook/title)
- 5-8 content slides
- Each slide: headline + brief explanation
- CTA slide at the end
- Caption with hashtags

Format:
📱 SLIDE 1 (Cover): [Hook/Title]
📱 SLIDE 2: [Content]
...
📱 SLIDE X (CTA): [Call to action]
📝 CAPTION: [Full caption]
#️⃣ HASHTAGS: [Relevant hashtags]

Write in Indonesian language.`,

        story: (topic, tone, pillar) => `
Create an Instagram/TikTok Story sequence about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- 3-5 story slides
- Text overlays for each
- Sticker/poll suggestions
- Music mood recommendation

Format each story:
📱 STORY 1: [Content + text overlay]
🎵 Music: [Mood/genre]
🔘 Interactive: [Poll/quiz/sticker suggestion]

Write in Indonesian language.`,

        longVideo: (topic, tone, pillar) => `
Create a long-form video script (5-15 minutes) about: ${topic}

Requirements:
- Tone: ${tone}
- Content Pillar: ${pillar}
- Hook intro (first 30 seconds)
- Chapter breakdown with timestamps
- Key talking points for each section
- B-roll suggestions
- Outro with CTA
- Video description for YouTube
- Tags/keywords

Format:
🎬 INTRO (0:00-0:30): [Hook]
📚 CHAPTER 1 (0:30-3:00): [Title + talking points]
📚 CHAPTER 2 (3:00-6:00): [Title + talking points]
...
🎯 OUTRO: [CTA]
📝 DESCRIPTION: [YouTube description]
🏷️ TAGS: [Keywords]

Write in Indonesian language.`
    },

    // Generate content based on type
    async generateContent(topic, type, tone = 'professional', pillar = 'Education') {
        const typeKey = type.replace('text_', '').replace('video_', '').replace('image_', '');
        const promptGenerator = this.contentPrompts[typeKey];
        
        if (!promptGenerator) {
            return { success: false, error: 'Unknown content type' };
        }

        const prompt = promptGenerator(topic, tone, pillar);
        const result = await this.generateText(prompt, {
            systemPrompt: 'You are an expert content creator. Create engaging content in Indonesian.',
            temperature: 0.8,
            retries: 2
        });

        // If API fails, return fallback content
        if (!result.success) {
            return { 
                success: true, 
                text: this.getFallbackContent(topic, typeKey, tone, pillar) 
            };
        }
        return result;
    },

    // Fallback content when API fails
    getFallbackContent(topic, type, tone, pillar) {
        const templates = {
            article: `📝 ARTIKEL: ${topic}\n\n🎯 Tone: ${tone} | Pillar: ${pillar}\n\n---\n\n**Headline:** Tips ${topic} yang Wajib Kamu Tahu!\n\n**Intro:**\nDi era digital ini, ${topic} menjadi semakin penting. Mari kita bahas lebih dalam.\n\n**Poin Utama:**\n1. Pahami dasar-dasar ${topic}\n2. Terapkan strategi yang tepat\n3. Evaluasi dan tingkatkan terus\n\n**Kesimpulan:**\nDengan menerapkan tips di atas, kamu bisa sukses dalam ${topic}.\n\n**Hashtags:** #${topic.replace(/\s/g,'')} #tips #viral #indonesia`,
            
            thread: `🧵 THREAD: ${topic}\n\n1/7: 🔥 Mau tau rahasia ${topic}? Thread ini akan mengubah cara pandangmu!\n\n2/7: Pertama, kamu perlu memahami fundamentalnya...\n\n3/7: Kedua, praktik adalah kunci utama...\n\n4/7: Ketiga, konsistensi mengalahkan segalanya...\n\n5/7: Tips bonus: Jangan takut gagal!\n\n6/7: Recap: Pahami, praktik, konsisten.\n\n7/7: Like & RT kalau bermanfaat! Follow untuk tips lainnya 🚀\n\n#${topic.replace(/\s/g,'')} #thread #tips`,
            
            shortVideo: `🎬 SCRIPT VIDEO PENDEK: ${topic}\n\n⏱️ Durasi: 30-60 detik\n\n🎣 HOOK (0-3s):\n"Stop scroll! Ini yang kamu butuhkan tentang ${topic}..."\n\n📱 BODY (3-50s):\n- Poin 1: [Jelaskan benefit utama]\n- Poin 2: [Berikan contoh nyata]\n- Poin 3: [Tips actionable]\n\n🎯 CTA (50-60s):\n"Follow untuk tips lainnya! Comment kalau mau part 2!"\n\n📝 CAPTION:\n${topic} yang wajib kamu tahu! 🔥\n\n#${topic.replace(/\s/g,'')} #fyp #viral #tips`,
            
            carousel: `🎨 CAROUSEL: ${topic}\n\n📱 SLIDE 1 (Cover):\n"${topic} - Panduan Lengkap"\n\n📱 SLIDE 2:\nApa itu ${topic}?\n[Definisi singkat]\n\n📱 SLIDE 3:\nMengapa penting?\n[3 alasan utama]\n\n📱 SLIDE 4:\nCara memulai\n[Step by step]\n\n📱 SLIDE 5:\nTips sukses\n[3 tips praktis]\n\n📱 SLIDE 6 (CTA):\nSave post ini! 💾\nFollow @akunkamu\n\n📝 CAPTION:\nPanduan lengkap ${topic}! Swipe sampai habis ➡️\n\n#${topic.replace(/\s/g,'')} #carousel #tips #edukasi`,
            
            story: `📱 STORY SEQUENCE: ${topic}\n\n🎬 STORY 1:\nText: "Mau tau tentang ${topic}?"\nSticker: Poll (Ya/Tidak)\n\n🎬 STORY 2:\nText: "Ini dia tipsnya..."\nMusic: Upbeat/Trending\n\n🎬 STORY 3:\nText: "Tip #1: [Tips pertama]"\nSticker: Emoji slider\n\n🎬 STORY 4:\nText: "Tip #2: [Tips kedua]"\n\n🎬 STORY 5:\nText: "DM 'TIPS' untuk info lengkap!"\nSticker: Question box`,
            
            longVideo: `🎬 SCRIPT VIDEO PANJANG: ${topic}\n\n⏱️ Durasi: 8-10 menit\n\n📍 INTRO (0:00-0:30):\n"Hai semuanya! Di video ini kita akan bahas ${topic} secara lengkap..."\n\n📚 CHAPTER 1 (0:30-3:00): Pengenalan\n- Apa itu ${topic}\n- Mengapa ini penting\n\n📚 CHAPTER 2 (3:00-6:00): Cara Praktis\n- Step 1: [Langkah pertama]\n- Step 2: [Langkah kedua]\n- Step 3: [Langkah ketiga]\n\n📚 CHAPTER 3 (6:00-8:00): Tips & Tricks\n- Tips untuk pemula\n- Kesalahan yang harus dihindari\n\n🎯 OUTRO (8:00-8:30):\n"Jangan lupa like, subscribe, dan nyalakan lonceng!"\n\n📝 DESKRIPSI:\nPanduan lengkap ${topic}. Timestamps ada di bawah!\n\n🏷️ TAGS: ${topic}, tutorial, panduan, tips`
        };
        
        return templates[type] || `📄 Konten untuk: ${topic}\n\nTone: ${tone}\nPillar: ${pillar}\n\nSilakan gunakan Magic Studio untuk hasil yang lebih baik dengan workflow yang sesuai.`;
    },

    // AI Chat - Smart Assistant
    async chat(message, conversationHistory = []) {
        const systemPrompt = `Kamu adalah Lumaverse AI, asisten cerdas untuk content creator. Kamu bisa:
- Membuat konten (artikel, caption, script, thread)
- Memberikan ide dan strategi marketing
- Merekomendasikan workflow dari 133 tools yang tersedia
- Membantu brainstorming dan problem solving
- Menjawab pertanyaan tentang social media dan branding

Beberapa workflow populer: SEO Article (WF-001), Viral Thread (WF-002), Carousel (WF-003), Short Video (WF-005), Brand Kit (WF-012), Ad Creative (WF-026), Logo Generator (WF-029).

Jawab dengan bahasa yang sama dengan user. Berikan jawaban yang helpful dan actionable.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory.slice(-6),
            { role: 'user', content: message }
        ];

        try {
            const response = await fetch(this.endpoints.text, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages, model: 'openai', temperature: 0.7 })
            });

            if (!response.ok) {
                console.error('API Error:', response.status);
                throw new Error('API request failed');
            }
            
            const text = await response.text();
            if (!text || text.trim() === '') throw new Error('Empty response');
            return { success: true, text };
        } catch (error) {
            console.error('Chat Error:', error);
            // Fallback response
            return { 
                success: true, 
                text: this.getFallbackResponse(message) 
            };
        }
    },

    // Fallback responses when API fails
    getFallbackResponse(message) {
        const msg = message.toLowerCase();
        if (msg.includes('artikel') || msg.includes('article')) {
            return '📝 Untuk membuat artikel, gunakan workflow **SEO Article Generator (WF-001)**. Masuk ke Magic Studio dan pilih workflow tersebut, lalu isi form dengan topik yang kamu inginkan!';
        }
        if (msg.includes('video') || msg.includes('tiktok') || msg.includes('reels')) {
            return '🎬 Untuk konten video, coba **Short Video Generator (WF-005)** untuk TikTok/Reels atau **YouTube Video Generator (WF-006)** untuk YouTube. Kamu bisa temukan di Magic Studio!';
        }
        if (msg.includes('carousel') || msg.includes('instagram')) {
            return '🎨 Untuk carousel Instagram, gunakan **Carousel Image Generator (WF-003)**. Workflow ini akan membantu kamu membuat slide-slide menarik!';
        }
        if (msg.includes('logo') || msg.includes('brand')) {
            return '🏷️ Untuk branding, coba **Brand Kit Generator (WF-012)** atau **Logo Generator (WF-029)**. Keduanya ada di Magic Studio kategori Branding!';
        }
        if (msg.includes('ide') || msg.includes('idea')) {
            return '💡 Beberapa ide konten viral:\n1. Behind the scenes bisnis kamu\n2. Tips & tricks di industri kamu\n3. Transformation/before-after\n4. Day in my life\n5. Q&A dengan audience\n\nMau saya bantu develop salah satu ide ini?';
        }
        return '👋 Hai! Saya Lumaverse AI. Saya bisa membantu kamu dengan:\n\n• Membuat konten (artikel, video script, caption)\n• Ide dan strategi marketing\n• Merekomendasikan workflow yang tepat\n\nCoba tanya sesuatu yang spesifik, misalnya "buatkan caption untuk produk skincare" atau "workflow apa untuk bikin logo?"';
    },

    // Suggest topics based on industry
    async suggestTopics(industry = 'general', count = 5) {
        const prompt = `Generate ${count} viral content ideas for ${industry} industry. 
Each idea should be:
- Trending and relevant
- Engaging and shareable
- Suitable for social media

Format as numbered list with brief description.`;

        return await this.generateText(prompt, {
            systemPrompt: 'You are a trend analyst and content strategist.',
            temperature: 0.9
        });
    }
};

console.log('🤖 Pollinations AI loaded');
