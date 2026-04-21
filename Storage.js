/**
 * storage.js — LocalStorage / Persistence logic
 * Nexus IDE
 */

const StorageController = {
    STORAGE_KEY: 'NEXUS_IDE_PROJECTS',

    // Get all projects; seed a default if empty
    getAllProjects() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [{ id: Date.now(), name: 'main.js', content: '' }];
        } catch (error) {
            console.error('Failed to load projects:', error);
            return [{ id: Date.now(), name: 'main.js', content: '' }];
        }
    },

    // Save a specific project by id
    saveProject(id, content) {
        try {
            let projects = this.getAllProjects();
            const index = projects.findIndex(p => p.id === id);
            if (index !== -1) {
                projects[index].content = content;
                projects[index].lastModified = new Date().toISOString();
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
            }
        } catch (error) {
            console.error('Failed to save project:', error);
        }
    },

    // Create a new file entry
    createProject(name) {
        try {
            let projects = this.getAllProjects();
            projects.push({ id: Date.now(), name, content: '', lastModified: new Date().toISOString() });
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
        } catch (error) {
            console.error('Failed to create project:', error);
        }
    },

    // Load the last active single project (legacy compat)
    loadProject() {
        try {
            const projects = this.getAllProjects();
            return projects.length ? { code: projects[0].content } : null;
        } catch (error) {
            console.error('Failed to load project:', error);
            return null;
        }
    },

    // Clear all storage
    clearStorage() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

window.StorageController = StorageController;
