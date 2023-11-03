# Webdev Template

## How setup the project up?

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm run dev` to start the development server`
4. Open `http://localhost:5173` in your browser

## Folder Structure

In this template, the folder structure is organized as follows:

- The `src` folder houses all the source files.
- The `components` (1) folder contains components that are not exclusively tied to a single page.
- The `pages` (2) folder, on the other hand, is dedicated to page-specific files, with each page having its own dedicated subfolder. Inside each page folder, you'll find the definition of the page itself, as well as any components that are exclusively used within that page, stored in the `components` (3) subfolder.

### Visual Representation

Here's a visual representation of the folder structure:

```
├── src/
│   ├── components/ (1)
│   │   ├── [General Component].js
│   ├── pages/ (2)
│   │   ├── [Page]/
│   │   │   ├── [Page].js
│   │   │   ├── components/ (3)
│   │   │   │   ├── [Exclusive Page Component].js
```

This hierarchy keeps the project well-organized and makes it easy to locate and manage specific components and page-related resources.
