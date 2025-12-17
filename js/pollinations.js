/**
 * Pollinations AI Integration
 * Text and Image Generation
 */

const PollinationsAI = {
    textEndpoint: 'https://text.pollinations.ai/',
    imageEndpoint: 'https://image.pollinations.ai/prompt/',

    async generateText(prompt, options = {}) {
        const systemPrompt = options.systemPrompt || 'You are a professional social media content creator.';
        const fullPrompt = `${systemPrompt}\n\n${prompt}`;
        
        try {
            const response = await fetch(this.textEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: prompt }
                    ],
                    model: options.model || 'openai',
                    seed: options.seed || Math.floor(Math.random() * 10000)
                })
            });
            
            if (!response.ok) throw new Error('API Error');
            return await response.text();
        } catch (error) {
            console.error('Pollinations Text Error:', error);
            // Fallback to GET method
            try {
                const encodedPrompt = encodeURIComponent(fullPrompt);
                const response = await fetch(`${this.textEndpoint}${encodedPrompt}`);
                return await response.text();
            } catch (e) {
                throw new Error('Failed to generate text');
            }
        }
    },

    generateImageUrl(prompt, options = {}) {
        const width = options.width || 1024;
        const height = options.height || 1024;
        const seed = options.seed || Math.floor(Math.random() * 100000);
        const encodedPrompt = encodeURIComponent(prompt);
        return `${this.imageEndpoint}${encodedPrompt}?width=${width}&height=${height}&seed=${seed}&nologo=true`;
    },

    getDimensions(ratio) {
        const dims = {
            '1:1': { width: 1024, height: 1024 },
            '9:16': { width: 768, height: 1365 },
            '16:9': { width: 1365, height: 768 },
            '4:5': { width: 864, height: 1080 }
        };
        return dims[ratio] || dims['1:1'];
    },

    enhancePrompt(prompt, style = 'realistic') {
        const styles = {
            realistic: 'professional photography, high quality, detailed, sharp focus',
            aesthetic: 'aesthetic, soft colors, dreamy, instagram style, trendy',
            minimalist: 'minimalist, clean, simple, modern design',
            vibrant: 'vibrant colors, bold, eye-catching, dynamic',
            corporate: 'professional, corporate, business style, clean'
        };
        return `${prompt}, ${styles[style] || styles.realistic}`;
    }
};

/**
 * Content Generator - Uses Knowledge Base Context
 */
const ContentGenerator = {
    async generateContent(topic, options = {}) {
        const context = DB.knowledgeBase.getContextString();
        const project = DB.projects.getActive();
        
        const platformSpecs = {
            instagram: { maxLength: 2200, hashtagCount: 15, style: 'visual, engaging, emoji-friendly' },
            tiktok: { maxLength: 300, hashtagCount: 5, style: 'trendy, casual, hook-focused' },
            twitter: { maxLength: 280, hashtagCount: 3, style: 'concise, punchy, conversational' },
            linkedin: { maxLength: 3000, hashtagCount: 5, style: 'professional, insightful, value-driven' },
            facebook: { maxLength: 500, hashtagCount: 3, style: 'friendly, community-focused' },
            youtube: { maxLength: 5000, hashtagCount: 10, style: 'descriptive, SEO-optimized' },
            blog: { maxLength: 10000, hashtagCount: 0, style: 'comprehensive, SEO-friendly, structured' }
        };

        const spec = platformSpecs[options.platform] || platformSpecs.instagram;
        const tone = project?.toneOfVoice || 'casual';

        const prompt = `
${context}

=== TASK ===
Create ${options.type || 'post'} content for ${options.platform || 'Instagram'}.

Topic: ${topic}
${options.pillar ? `Content Pillar: ${options.pillar}` : ''}
Tone: ${tone}
Style: ${spec.style}
Max Length: ${spec.maxLength} characters

Requirements:
1. Create an attention-grabbing hook
2. Write engaging main content that provides value
3. Include a clear call-to-action
${options.includeHashtags ? `4. Add ${spec.hashtagCount} relevant hashtags` : ''}

Format the response as:
HOOK: [attention-grabbing opening]

CAPTION:
[main content]

CTA: [call to action]

${options.includeHashtags ? 'HASHTAGS: [hashtags]' : ''}
`;

        const result = await PollinationsAI.generateText(prompt, {
            systemPrompt: `You are a professional social media content creator for ${project?.brandName || 'a brand'}. 
            Create content that matches the brand voice and resonates with the target audience.
            Always write in Indonesian unless specified otherwise.`
        });

        return this.parseGeneratedContent(result, options);
    },

    parseGeneratedContent(text, options) {
        const result = {
            hook: '',
            caption: '',
            cta: '',
            hashtags: [],
            raw: text
        };

        // Parse hook
        const hookMatch = text.match(/HOOK:\s*(.+?)(?=\n|CAPTION)/is);
        if (hookMatch) result.hook = hookMatch[1].trim();

        // Parse caption
        const captionMatch = text.match(/CAPTION:\s*(.+?)(?=CTA:|HASHTAGS:|$)/is);
        if (captionMatch) result.caption = captionMatch[1].trim();

        // Parse CTA
        const ctaMatch = text.match(/CTA:\s*(.+?)(?=HASHTAGS:|$)/is);
        if (ctaMatch) result.cta = ctaMatch[1].trim();

        // Parse hashtags
        const hashtagMatch = text.match(/HASHTAGS?:\s*(.+?)$/is);
        if (hashtagMatch) {
            result.hashtags = hashtagMatch[1].match(/#\w+/g) || [];
        }

        return result;
    },

    async generateMonthlyPlan(year, month) {
        const context = DB.knowledgeBase.getContextString();
        const project = DB.projects.getActive();
        const pillars = DB.knowledgeBase.getPillars();
        
        if (!project) throw new Error('No active project');

        const postingDays = project.postingDays || ['mon', 'wed', 'fri'];
        const postsPerDay = project.postsPerDay || 1;
        const platforms = project.platforms || ['instagram', 'tiktok'];

        // Calculate posting dates for the month
        const postingDates = this.getPostingDates(year, month, postingDays);
        const totalPosts = postingDates.length * postsPerDay * platforms.length;

        const prompt = `
${context}

=== TASK ===
Create a monthly content plan for ${new Date(year, month).toLocaleString('id-ID', { month: 'long', year: 'numeric' })}.

Requirements:
- Total posts needed: ${totalPosts}
- Platforms: ${platforms.join(', ')}
- Content Pillars: ${pillars.length > 0 ? pillars.join(', ') : 'General content'}
- Posting days: ${postingDays.join(', ')}
- Posts per day: ${postsPerDay}

For each post, provide:
1. Title (short, descriptive)
2. Topic/Idea
3. Platform
4. Content Type (post/reel/story/carousel)
5. Content Pillar
6. Brief caption idea

Format each post as:
---POST---
TITLE: [title]
TOPIC: [topic]
PLATFORM: [platform]
TYPE: [type]
PILLAR: [pillar]
CAPTION_IDEA: [brief caption idea]
---END---

Generate ${Math.min(totalPosts, 30)} unique content ideas that align with the brand.
`;

        const result = await PollinationsAI.generateText(prompt, {
            systemPrompt: `You are a strategic content planner for ${project.brandName || 'a brand'}. 
            Create diverse, engaging content ideas that align with the brand voice and target audience.
            Distribute content evenly across pillars and platforms.
            Write in Indonesian.`
        });

        return this.parseMonthlyPlan(result, postingDates, platforms, postsPerDay);
    },

    getPostingDates(year, month, postingDays) {
        const dayMap = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
        const targetDays = postingDays.map(d => dayMap[d]);
        const dates = [];
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            if (targetDays.includes(date.getDay())) {
                dates.push(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
            }
        }
        return dates;
    },

    parseMonthlyPlan(text, postingDates, platforms, postsPerDay) {
        const posts = [];
        const postBlocks = text.split(/---POST---/).filter(b => b.includes('TITLE:'));

        let dateIndex = 0;
        let platformIndex = 0;
        let dayPostCount = 0;

        postBlocks.forEach((block, i) => {
            const title = block.match(/TITLE:\s*(.+?)(?=\n|TOPIC)/is)?.[1]?.trim() || `Content ${i + 1}`;
            const topic = block.match(/TOPIC:\s*(.+?)(?=\n|PLATFORM)/is)?.[1]?.trim() || '';
            const platform = block.match(/PLATFORM:\s*(.+?)(?=\n|TYPE)/is)?.[1]?.trim()?.toLowerCase() || platforms[platformIndex];
            const type = block.match(/TYPE:\s*(.+?)(?=\n|PILLAR)/is)?.[1]?.trim()?.toLowerCase() || 'post';
            const pillar = block.match(/PILLAR:\s*(.+?)(?=\n|CAPTION)/is)?.[1]?.trim() || '';
            const captionIdea = block.match(/CAPTION_IDEA:\s*(.+?)(?=---|$)/is)?.[1]?.trim() || '';

            posts.push({
                title,
                caption: captionIdea,
                platform: platforms.includes(platform) ? platform : platforms[platformIndex % platforms.length],
                type: ['post', 'reel', 'story', 'carousel', 'thread', 'article'].includes(type) ? type : 'post',
                pillar,
                status: 'draft',
                scheduledDate: postingDates[dateIndex] || null,
                scheduledTime: '09:00'
            });

            // Rotate through platforms and dates
            platformIndex++;
            if (platformIndex >= platforms.length) {
                platformIndex = 0;
                dayPostCount++;
                if (dayPostCount >= postsPerDay) {
                    dayPostCount = 0;
                    dateIndex++;
                }
            }
        });

        return posts;
    },

    async generateImagePrompt(topic, platform) {
        const project = DB.projects.getActive();
        const prompt = `Create a detailed image prompt for social media visual.
Topic: ${topic}
Platform: ${platform}
Brand: ${project?.brandName || 'Brand'}
Style: Professional, engaging, modern

Respond with ONLY the image prompt, no explanation. Make it detailed and specific.`;

        return await PollinationsAI.generateText(prompt);
    }
};
