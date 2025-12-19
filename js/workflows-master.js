// ==================== WORKFLOWS MASTER - INTEGRATION ====================
// Combines all workflow batches into unified database
// Version 3.0 - December 2025

const WorkflowsMaster = {
    version: '3.0',
    lastUpdated: '2025-12-19',
    
    // Initialize and merge all batches
    init() {
        console.log('🚀 Initializing WorkflowsMaster...');
        
        // Merge all batches
        this.workflows = {};
        
        if (window.WorkflowsDetailedBatch1) {
            Object.assign(this.workflows, WorkflowsDetailedBatch1);
            console.log('✅ Batch 1 loaded:', Object.keys(WorkflowsDetailedBatch1).length, 'workflows');
        }
        
        if (window.WorkflowsDetailedBatch2) {
            Object.assign(this.workflows, WorkflowsDetailedBatch2);
            console.log('✅ Batch 2 loaded:', Object.keys(WorkflowsDetailedBatch2).length, 'workflows');
        }
        
        // Update MagicStudioUltra if exists
        if (window.MagicStudioUltra) {
            Object.assign(MagicStudioUltra.workflows, this.workflows);
            console.log('✅ MagicStudioUltra updated');
        }
        
        this.totalWorkflows = Object.keys(this.workflows).length;
        console.log('📊 Total workflows loaded:', this.totalWorkflows);
        
        // Update UI stats
        this.updateStats();
        
        return this;
    },
    
    // Update stats display
    updateStats() {
        const stats = this.getCategoryStats();
        
        // Update stat elements if they exist
        const totalEl = document.getElementById('stat-total-workflows');
        if (totalEl) totalEl.textContent = this.totalWorkflows + '+';
    },
    
    // Get category statistics
    getCategoryStats() {
        const stats = {
            total: 0,
            popular: 0,
            text: 0,
            image: 0,
            video: 0,
            audio: 0,
            marketing: 0,
            branding: 0,
            business: 0,
            ecommerce: 0,
            utility: 0,
            complete: 0
        };
        
        Object.values(this.workflows).forEach(wf => {
            stats.total++;
            if (wf.popular) stats.popular++;
            if (wf.category) stats[wf.category]++;
            if (wf.tags) {
                wf.tags.forEach(tag => {
                    if (stats[tag] !== undefined) stats[tag]++;
                });
            }
        });
        
        return stats;
    },
    
    // Get workflow by ID
    getWorkflow(workflowId) {
        return this.workflows[workflowId];
    },
    
    // Search workflows
    search(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        Object.entries(this.workflows).forEach(([key, wf]) => {
            const searchText = `${wf.name} ${wf.description} ${wf.category} ${(wf.tags || []).join(' ')}`.toLowerCase();
            if (searchText.includes(lowerQuery)) {
                results.push({ key, workflow: wf });
            }
        });
        
        return results;
    },
    
    // Get workflows by category
    getByCategory(category) {
        const results = [];
        
        Object.entries(this.workflows).forEach(([key, wf]) => {
            if (category === 'all') {
                results.push({ key, workflow: wf });
            } else if (category === 'popular' && wf.popular) {
                results.push({ key, workflow: wf });
            } else if (wf.category === category || (wf.tags && wf.tags.includes(category))) {
                results.push({ key, workflow: wf });
            }
        });
        
        return results;
    },
    
    // Generate prompt from form data
    generatePrompt(workflowId, formData) {
        const wf = this.getWorkflow(workflowId);
        if (!wf || !wf.promptTemplate) return '';
        
        let prompt = wf.promptTemplate;
        
        // Replace placeholders with form data
        Object.entries(formData).forEach(([key, value]) => {
            const regex = new RegExp(`{${key}}`, 'g');
            prompt = prompt.replace(regex, value || '');
        });
        
        return prompt;
    },
    
    // Render workflow form
    renderForm(workflowId, containerId) {
        const wf = this.getWorkflow(workflowId);
        if (!wf || !wf.fields) return;
        
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = `<div class="workflow-form" data-workflow="${workflowId}">`;
        
        wf.fields.forEach(field => {
            html += this.renderField(field);
        });
        
        html += `
            <div class="form-actions">
                <button type="button" class="btn-primary" onclick="WorkflowsMaster.handleSubmit('${workflowId}')">
                    ⚡ Generate Prompt
                </button>
            </div>
        </div>`;
        
        container.innerHTML = html;
    },
    
    // Render individual field
    renderField(field) {
        let html = `<div class="form-group">`;
        html += `<label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>`;
        
        switch (field.type) {
            case 'text':
                html += `<input type="text" id="${field.id}" name="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>`;
                break;
            case 'textarea':
                html += `<textarea id="${field.id}" name="${field.id}" rows="4" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>`;
                break;
            case 'select':
                html += `<select id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>`;
                html += `<option value="">Select...</option>`;
                field.options.forEach(opt => {
                    const value = typeof opt === 'string' ? opt.split(' - ')[0] : opt;
                    html += `<option value="${value}">${opt}</option>`;
                });
                html += `</select>`;
                break;
            case 'color':
                html += `<input type="color" id="${field.id}" name="${field.id}" value="${field.placeholder || '#6366F1'}">`;
                break;
            case 'date':
                html += `<input type="date" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>`;
                break;
            case 'file':
                html += `<input type="file" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>`;
                break;
        }
        
        if (field.helpText) {
            html += `<small class="help-text">${field.helpText}</small>`;
        }
        
        html += `</div>`;
        return html;
    },
    
    // Handle form submission
    handleSubmit(workflowId) {
        const form = document.querySelector(`.workflow-form[data-workflow="${workflowId}"]`);
        if (!form) return;
        
        const formData = {};
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            formData[input.name] = input.value;
        });
        
        const prompt = this.generatePrompt(workflowId, formData);
        
        // Show generated prompt
        this.showGeneratedPrompt(workflowId, prompt);
    },
    
    // Show generated prompt modal
    showGeneratedPrompt(workflowId, prompt) {
        const wf = this.getWorkflow(workflowId);
        
        // Create modal if not exists
        let modal = document.getElementById('prompt-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'prompt-modal';
            modal.className = 'modal';
            document.body.appendChild(modal);
        }
        
        modal.innerHTML = `
            <div class="modal-content prompt-modal-content">
                <div class="modal-header">
                    <h3>${wf.icon} ${wf.name}</h3>
                    <button class="modal-close" onclick="document.getElementById('prompt-modal').style.display='none'">×</button>
                </div>
                <div class="modal-body">
                    <div class="prompt-output">
                        <div class="prompt-header">
                            <span>📋 Generated Prompt</span>
                            <button class="btn-copy" onclick="WorkflowsMaster.copyPrompt()">📋 Copy</button>
                        </div>
                        <pre id="generated-prompt">${prompt}</pre>
                    </div>
                    <div class="prompt-actions">
                        ${wf.opalLink ? `<a href="${wf.opalLink}" target="_blank" class="btn-primary">🚀 Open in Google Opal</a>` : ''}
                        <button class="btn-secondary" onclick="document.getElementById('prompt-modal').style.display='none'">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
    },
    
    // Copy prompt to clipboard
    copyPrompt() {
        const promptEl = document.getElementById('generated-prompt');
        if (promptEl) {
            navigator.clipboard.writeText(promptEl.textContent);
            alert('Prompt copied to clipboard!');
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        WorkflowsMaster.init();
    }, 200);
});

// Export
window.WorkflowsMaster = WorkflowsMaster;
