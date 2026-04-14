/**
 * Storage Controller
 * Handles all interactions with the browser's persistent storage.
 */

const StorageController = {
    STORAGE_KEY: 'NEXUS_IDE_PROJECTS',

    // Saves the current editor state
    saveProject(data) {
        try {
            const projectData = {
                ...data,
                lastModified: new Date().toISOString()
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projectData));
            console.log("Project saved successfully.");
        } catch (error) {
            console.error("Failed to save project:", error);
        }
    },

    // Retrieves the saved project
    loadProject() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Failed to load project:", error);
            return null;
        }
    },

    // Clears all storage (useful for a 'Reset' feature)
    clearStorage() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// Export to window so other modules can use it
window.StorageController = StorageController;
