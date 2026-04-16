/**
 * Editor Engine
 * Handles text manipulation and UI synchronization
 */

const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('line-numbers'); // Ensure this exists in your HTML

const EditorEngine = {
    init() {
        // Handle Tab key
        editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 4;
            }
        });

        // Sync scrolling and line numbers
        editor.addEventListener('input', () => this.updateLines());
        editor.addEventListener('scroll', () => {
            lineNumbers.scrollTop = editor.scrollTop;
        });
    },

    updateLines() {
        const lines = editor.value.split('\n').length;
        lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
    }
};

EditorEngine.init();

