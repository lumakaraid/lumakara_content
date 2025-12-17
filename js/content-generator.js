/**
 * Content Generator Helper Module
 * Additional content generation utilities
 */

const ContentTemplates = {
    // Platform-specific templates
    templates: {
        instagram: {
            post: `Create an engaging Instagram post with:
- Attention-grabbing hook (first line)
- Value-packed content (3-5 key points)
- Call to action
- 10-15 relevant hashtags
- Emoji usage for visual appeal`,
            reel: `Create a TikTok/Reels script with:
- Hook (0-3 seconds): Grab attention immediately
- Problem/Setup (3-10 seconds)
- Solution/Content (10-45 seconds)
- CTA (last 5 seconds)
- Trending audio suggestion`,
            carousel: `Create a carousel post with:
- Slide 1: Hook/Title
- Slides 2-8: Key points (one per slide)
- Last slide: CTA and summary
- Caption with hashtags`
        },
        tiktok: {
            video: `Create a TikTok video script:
- Hook (first 1-2 seconds)
- Main content (15-45 seconds)
- Trend integration
- CTA
- Caption with hashtags`
        },
        linkedin: {
            post: `Create a LinkedIn post:
- Professional hook
- Story or insight
- Key takeaways
- Engagement question
- 3-5 relevant hashtags`
        },
        twitter: {
            thread: `Create a Twitter thread:
- Tweet 1: Hook + promise
- Tweets 2-8: Key points
- Last tweet: Summary + CTA
- Each tweet under 280 characters`
        }
    },

    async generateCaption(topic, options = {}) {
        const context = DB.knowledgeBase.getContextString();
        const template = this.templates[options.platform]?.[options.type] || this.templates.instagram.post;
        
        const prompt = `${context}

Topic: ${topic}
Platform: ${options.platform || 'Instagram'}
Type: ${options.type || 'post'}
Tone: ${options.tone || 'casual'}

${template}

Write in Indonesian unless specified otherwise.`;

        return await PollinationsAI.generateText(prompt);
    },

    async generateHashtags(topic, platform = 'instagram', count = 15) {
        const prompt = `Generate ${count} relevant hashtags for ${platform} about: ${topic}
Mix of:
- Popular hashtags (high reach)
- Niche hashtags (targeted)
- Branded hashtags if applicable

Format: #hashtag1 #hashtag2 ...`;

        return await PollinationsAI.generateText(prompt);
    },

    async generateVideoScript(topic, options = {}) {
        const context = DB.knowledgeBase.getContextString();
        const duration = options.duration || 30;
        
        const prompt = `${context}

Create a ${duration}-second video script for ${options.type || 'reels'}

Topic: ${topic}

Format:
[0-3s] HOOK: (attention grabber)
[3-${Math.floor(duration * 0.3)}s] SETUP: (problem/context)
[${Math.floor(duration * 0.3)}-${Math.floor(duration * 0.8)}s] CONTENT: (main points)
[${Math.floor(duration * 0.8)}-${duration}s] CTA: (call to action)

VISUAL SUGGESTIONS:
(describe what should be shown)

AUDIO/MUSIC:
(suggest trending sounds or music style)

Write in Indonesian.`;

        return await PollinationsAI.generateText(prompt);
    }
};
