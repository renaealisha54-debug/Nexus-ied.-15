function loadFile(id) {
    const projects = StorageController.getAllProjects();
    const project = projects.find(p => p.id === id);
    
    // Set the global active ID
    window.activeProjectId = id;
    
    // Update the editor
    document.getElementById('editor').value = project.content;
    document.getElementById('file-name-display').innerText = project.name;
    
    // Hide modal
    document.getElementById('project-modal').style.display = 'none';
    EditorEngine.updateLines();
}
