/**
 * Workflows Loader - Integrates all workflow modules into Magic Studio Ultra
 * Loads ALL workflows:
 * - Brand & Business Workflows (36-41)
 * - Industry-Specific Workflows (42-50)
 * - Text Extended Workflows (51-65)
 * - Visual & Graphics Workflows (66-80)
 */

const WorkflowsLoader = {
    
    /**
     * Load all extended workflows into MagicStudioUltra
     */
    loadAll() {
        if (typeof MagicStudioUltra === 'undefined') {
            console.error('MagicStudioUltra not found. Load magic-studio-ultra.js first.');
            return false;
        }

        // Load Brand & Business Workflows (36-41)
        if (typeof BrandBusinessWorkflows !== 'undefined') {
            Object.assign(MagicStudioUltra.workflows, BrandBusinessWorkflows);
            console.log('✅ Brand & Business Workflows (36-41) loaded');
        }

        // Load Industry-Specific Workflows (42-50)
        if (typeof IndustrySpecificWorkflows !== 'undefined') {
            Object.assign(MagicStudioUltra.workflows, IndustrySpecificWorkflows);
            console.log('✅ Industry-Specific Workflows (42-50) loaded');
        }

        // Load Text Extended Workflows (51-65)
        if (typeof TextExtendedWorkflows !== 'undefined') {
            Object.assign(MagicStudioUltra.workflows, TextExtendedWorkflows);
            console.log('✅ Text Extended Workflows (51-65) loaded');
        }

        // Load Visual & Graphics Workflows (66-80)
        if (typeof VisualGraphicsWorkflows !== 'undefined') {
            Object.assign(MagicStudioUltra.workflows, VisualGraphicsWorkflows);
            console.log('✅ Visual & Graphics Workflows (66-80) loaded');
        }

        // Update categories
        this.updateCategories();
        
        console.log(`📦 Total workflows loaded: ${Object.keys(MagicStudioUltra.workflows).length}`);
        return true;
    },

    /**
     * Update category counts after loading new workflows
     */
    updateCategories() {
        const categories = {
            text: 0,
            image: 0,
            video: 0,
            audio: 0,
            marketing: 0,
            branding: 0,
            complete: 0
        };

        Object.values(MagicStudioUltra.workflows).forEach(workflow => {
            if (categories[workflow.category] !== undefined) {
                categories[workflow.category]++;
            }
        });

        MagicStudioUltra.categoryCounts = categories;
    },

    /**
     * Get workflows by industry
     */
    getByIndustry(industry) {
        return Object.entries(MagicStudioUltra.workflows)
            .filter(([id, workflow]) => {
                if (!workflow.industries) return true;
                return workflow.industries.includes(industry) || workflow.industries.includes('All');
            })
            .reduce((obj, [id, workflow]) => {
                obj[id] = workflow;
                return obj;
            }, {});
    },

    /**
     * Get recommended workflows for specific business type
     */
    getRecommended(businessType) {
        const recommendations = {
            'kosmetik': ['skincare-cosmetic-kit', 'product-photoshoot', 'packaging-design', 'influencer-brief', 'ecommerce-content-kit'],
            'skincare': ['skincare-cosmetic-kit', 'product-photoshoot', 'packaging-design', 'testimonial-social-proof', 'influencer-brief'],
            'fashion': ['fashion-lookbook', 'product-photoshoot', 'magic-model', 'product-catalog', 'ecommerce-content-kit'],
            'f&b': ['food-beverage-kit', 'product-photoshoot', 'packaging-design', 'event-promotion-kit', 'ecommerce-content-kit'],
            'umkm': ['umkm-starter-kit', 'brand-strategy', 'business-stationery', 'social-media-kit', 'reseller-dropship-kit'],
            'kemasan': ['packaging-design', 'product-photoshoot', 'magic-mockup', 'product-catalog', 'brand-strategy']
        };

        return recommendations[businessType.toLowerCase()] || [];
    },

    /**
     * Generate master prompt from form data
     */
    generateMasterPrompt(workflowId, formData) {
        const workflow = MagicStudioUltra.workflows[workflowId];
        if (!workflow) return null;

        let prompt = `=== ${workflow.name.toUpperCase()} REQUEST ===\n\n`;

        // Add all field values
        workflow.fields.forEach(field => {
            const value = formData[field.id];
            if (value) {
                prompt += `${field.label.toUpperCase()}: ${value}\n`;
            }
        });

        // Add instructions based on workflow
        prompt += `\nINSTRUCTIONS:\n`;
        prompt += `Generate ${workflow.output} including all components.\n`;
        
        if (workflow.industries && workflow.industries.length > 0) {
            prompt += `Optimize for: ${workflow.industries.join(', ')} industry.\n`;
        }

        prompt += `\nOUTPUT: ${workflow.output}\n`;

        return prompt;
    },

    /**
     * Get asset upload requirements for a workflow
     */
    getAssetRequirements(workflowId) {
        const workflow = MagicStudioUltra.workflows[workflowId];
        if (!workflow || !workflow.assetUploads) return [];

        return workflow.assetUploads.map(asset => ({
            id: asset.id,
            label: asset.label,
            type: asset.type,
            required: asset.required,
            multiple: asset.multiple || false,
            tag: asset.label.match(/\[([A-Z]+)\]/)?.[1] || 'FILE'
        }));
    }
};

// Auto-load when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        WorkflowsLoader.loadAll();
    });
}

// Export
if (typeof window !== 'undefined') {
    window.WorkflowsLoader = WorkflowsLoader;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorkflowsLoader;
}
