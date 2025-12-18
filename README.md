# LearnHub - Simple eLearning Website

A beginner-friendly React-based eLearning platform designed for junior developers to learn and practice web development concepts.

## Project Overview

This is a simple, clean eLearning website built with React that includes:
- Course browsing and viewing
- Interactive lesson navigation
- Resource downloads
- Contact forms
- Responsive design

## Features

### 🏠 Homepage
- Hero section with site introduction
- Featured courses carousel
- Quick navigation to main sections
- Clean, modern design

### 📚 Course/Module Pages
- Course title and description
- Interactive lesson navigation
- Progress tracking bar
- Next/Previous lesson buttons
- Lesson content display area

### 📁 Resources Section
- Downloadable PDFs and materials
- Code files and examples
- Reference links
- Organized by course categories

### 🧭 Navigation Menu
- Responsive navigation bar
- Logo and home link
- Courses dropdown menu
- Resources, About, and Contact links

### 📞 Contact/About Pages
- About the instructor/platform
- Contact form with validation
- Social media links
- FAQ section

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Pure CSS with modern design
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd simple-elearning
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open browser**
Navigate to `http://localhost:3000`

## Project Structure

```
simple-elearning/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Homepage.js
│   │   ├── CoursePage.js
│   │   ├── Resources.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Learning Objectives

This project helps junior developers learn:
- React component structure
- React Router for navigation
- CSS Grid and Flexbox layouts
- State management with useState
- Form handling
- Responsive design principles
- Modern JavaScript (ES6+)

## Customization

### Adding New Courses
1. Edit the courses data in `Homepage.js`
2. Add course content in `CoursePage.js`
3. Update navigation links as needed

### Styling Changes
- Modify `App.css` for global styles
- Update color scheme in CSS variables
- Adjust responsive breakpoints

### Adding Features
- User authentication
- Progress persistence
- Video integration
- Quiz functionality
- Search capabilities

## Useful Resources & Links

### Learning Resources
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Community Support
- [Stack Overflow - React](https://stackoverflow.com/questions/tagged/reactjs)
- [Reddit - r/reactjs](https://www.reddit.com/r/reactjs/)
- [Dev.to React Community](https://dev.to/t/react)
- [React Discord Community](https://discord.gg/react)

### Development Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [VS Code Extensions for React](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## Contributing

This is a learning project! Feel free to:
- Add new features
- Improve the design
- Fix bugs
- Add more courses
- Enhance accessibility

## License

This project is open source and available under the MIT License.

## Support

For questions or help:
- Check the documentation links above
- Search Stack Overflow for React-specific issues
- Join React community forums
- Create issues in the project repository

---

**Happy Learning! 🚀**

*Built with ❤️ for junior developers learning React*
