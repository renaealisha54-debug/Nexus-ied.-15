/**
 * editor.js — Textarea & line-number logic
 * Nexus IDE
 */

const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('line-numbers');

const EditorEngine = {
    init() {
        // Tab key inserts 4 spaces instead of changing focus
        editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end   = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 4;
            }
        });

        // Auto-save and refresh line numbers on every keystroke
        editor.addEventListener('input', () => {
            this.updateLines();
            if (window.activeProjectId !== undefined) {
                StorageController.saveProject(window.activeProjectId, editor.value);
            }
        });

        // Keep line-number gutter in sync with editor scroll
        editor.addEventListener('scroll', () => {
            lineNumbers.scrollTop = editor.scrollTop;
        });

        this.updateLines();
    },

    updateLines() {
        const lines = editor.value.split('\n').length;
        lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
    }
};

EditorEngine.init();
