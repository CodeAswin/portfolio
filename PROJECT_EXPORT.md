# Portfolio Project Files Export

## Required Files for GitHub Upload:

### 1. package.json
```json
{
  "name": "vite-react-typescript-starter",
  "homepage": "https://CodeAswin.github.io/portfolio",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "gh-pages": "^6.3.0",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^6.3.1"
  }
}
```

### 2. vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### 3. .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Quick Upload Instructions:

1. **Create repository** on GitHub named `portfolio`
2. **Upload these files** in the correct folder structure:
   - Root: package.json, vite.config.ts, index.html, etc.
   - .github/workflows/deploy.yml
   - src/ folder with all React components
3. **Enable GitHub Pages** in repository settings → Pages → Source: GitHub Actions
4. **Push changes** - GitHub Actions will automatically deploy

## File Structure:
```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── data/
│   ├── store/
│   └── ...
├── package.json
├── vite.config.ts
├── index.html
└── ...
```

Your site will be live at: https://CodeAswin.github.io/portfolio