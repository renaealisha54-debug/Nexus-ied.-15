# Nexus IDE

Nexus IDE is a lightweight, mobile-first code editor designed for on-the-go development. It bridges the gap between simple text editing and full-scale cloud-based software engineering.

## 🚀 Key Features
- **Mobile-Optimized:** Designed for touch and small screens with a high-performance dark theme.
- **AI-Assisted:** Integrated AI for real-time debugging, refactoring, and code suggestions.
- **Persistent Storage:** Never lose your work; projects are saved locally automatically.
- **Cloud Execution:** Support for remote execution and build processes.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript
- **Styling:** CSS Variables for consistent theme management
- **Storage:** Browser `localStorage` API

## 📦 Getting Started
1. Clone the repository: `git clone [your-repo-link]`
2. Open `index.html` in any modern web browser.
3. No installation required.

## 📁 Project Structure
```
nexus-ide/
├── index.html                        # Entry point
├── css/
│   ├── main.css                      # Global styles & layout
│   └── editor.css                    # Editor-specific styles
├── js/
│   ├── editor.js                     # Textarea & line-number logic
│   ├── ai.js                         # AI panel & prompt processing
│   ├── terminal.js                   # Simulated terminal output
│   ├── storage.js                    # LocalStorage/Persistence logic
│   └── ui.js                         # Project modal & file management
├── src/components/atoms/Button/      # Reusable Button component
├── assets/                           # Icons, fonts, branding
├── docs/                             # Detailed documentation
├── .gitignore
└── README.md
```

## 📈 Roadmap
- [ ] Prism.js real-time syntax highlighting
- [ ] Cloud build support (Python, Java, Kotlin)
- [ ] Git integration for remote repository syncing
