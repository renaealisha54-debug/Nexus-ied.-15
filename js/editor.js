// In editor.js
const codeEditor = document.getElementById('editor');

// Automatically save on every keystroke
codeEditor.addEventListener('input', () => {
    StorageController.saveProject({
        code: codeEditor.value,
        filename: 'main.js'
    });
});

// Load on startup
window.addEventListener('load', () => {
    const savedData = StorageController.loadProject();
    if (savedData) {
        codeEditor.value = savedData.code;
    }
});
