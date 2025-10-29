#!/bin/bash
# setup.sh — script automatique pour créer ton projet React Assistant Numérique

# 1. Créer le projet Vite avec React
npm create vite@latest assistant-numerique -- --template react
cd assistant-numerique

# 2. Installer TailwindCSS et ses dépendances
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Remplacer le contenu des fichiers
rm -rf src/*
mkdir -p src

# index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Assistant Numérique</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# vite.config.js
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
EOF

# tailwind.config.js
cat > tailwind.config.js << 'EOF'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# src/index.css
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# src/App.jsx
cat > src/App.jsx << 'EOF'
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-amber-800">Assistant Numérique</h1>
      <p className="text-lg text-amber-700 max-w-2xl">
        Accompagnement personnalisé pour toutes vos démarches administratives, en visio ou en présentiel.
      </p>
    </div>
  );
}

export default App;
EOF

# src/main.jsx
cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOF

# 4. Installer les dépendances
npm install

echo "✅ Projet Assistant Numérique prêt ! Lance-le avec : npm run dev"
