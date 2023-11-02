# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Folderstructure

In this template, the folderstructure is as follows:

The `src` folder contains all the code. The `components`(1) folder contains all the components that are used in multiple pages. The `pages` (2) folder contains all the pages. Each page has its own folder. In this folder, the page itself is defined and all the components that are only used in this page are defined in the `components` (3) folder in the page folder.

├── src/
│ ├── components/ (1)
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── ...general components
│ ├── pages/ (2)
│ │ ├── Home/
│ │ │ ├── Home.js
| | | ├── components/ (3)
│ │ │ │ ├── HomeHeader.js
│ │ │ │ ├── ... components for the "Home"-Page
