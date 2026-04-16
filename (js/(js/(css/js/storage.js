const StorageController = {
    // Get all projects
    getAllProjects() {
        const data = localStorage.getItem('NEXUS_PROJECTS');
        return data ? JSON.parse(data) : [{ id: Date.now(), name: 'main.js', content: '' }];
    },

    // Save specific project
    saveProject(id, content) {
        let projects = this.getAllProjects();
        const index = projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projects[index].content = content;
            localStorage.setItem('NEXUS_PROJECTS', JSON.stringify(projects));
        }
    },

    // Create a new file
    createProject(name) {
        let projects = this.getAllProjects();
        projects.push({ id: Date.now(), name: name, content: '' });
        localStorage.setItem('NEXUS_PROJECTS', JSON.stringify(projects));
    }
};
