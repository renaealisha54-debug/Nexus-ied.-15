/**
 * ai.js — AI panel & prompt processing
 * Nexus IDE
 */

const AIController = {
    panel: document.getElementById('ai-panel'),
    input: document.getElementById('ai-input'),

    toggle() {
        const isVisible = this.panel.style.display === 'block';
        this.panel.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) this.input.focus();
    },

    async process() {
        const query = this.input.value.trim();
        if (!query) return;

        Terminal.log(`AI: Processing "${query}"...`, 'system');
        this.input.value = '';

        // Placeholder — swap setTimeout body for a real API call (e.g. Gemini / Claude)
        setTimeout(() => {
            const currentCode = document.getElementById('editor').value;
            const result = `// AI suggestion for: "${query}"\n` + currentCode;
            document.getElementById('editor').value = result;
            EditorEngine.updateLines();
            Terminal.log('AI: Code updated successfully.', 'success');
            this.toggle();
        }, 1000);
    }
};

window.AIController = AIController;
