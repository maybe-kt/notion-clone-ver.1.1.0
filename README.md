## Notion Clone
This project is a simplified clone of Notion, built while following a code-along tutorial by @CodeWithAntonio. The aim of this project was to understand how to create a flexible, minimal note-taking app with features similar to Notion, using modern web technologies.

## Features
- Rich Text Editing: The clone allows users to create, edit, and style notes.
- Page Navigation: Users can add and navigate between different pages, replicating the Notion experience.
- Persistence: Data is stored locally, so you can continue where you left off.

## Technologies Used
- Frontend: React.js (with hooks)
- State Management: Context API
- Styling: CSS
– Persistence: LocalStorage
- Setup Instructions

To run the project locally, follow these steps:

# 1. Clone the repository:

```bash
git clone https://github.com/your-username/notion-clone.git
cd notion-clone
```

# 2. Install dependencies:

```bash
npm install
```
# 3. Run the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

Project Structure
The project directory structure is organized as follows:

```bash
notion-clone/
│
├── public/                  # Public assets
├── src/                     # Source code
│   ├── components/          # Reusable components
│   ├── context/             # Context for state management
│   ├── styles/              # CSS files
│   └── App.js               # Main application file
│
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```
## Credits
This project was inspired by the YouTube tutorial created by [Code With Antonio](https://www.youtube.com/@codewithantonio). It was an excellent learning experience, showcasing how to build a modern web application with React.

## License
This project is open source and available under the MIT License. Feel free to contribute or use it for your own learning purposes.
