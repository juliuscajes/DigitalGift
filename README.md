# 🎄 Christmas & New Year 2025 - Family Celebration Website

A beautiful, interactive web application to celebrate Christmas and New Year with heartfelt messages and cherished family memories.

![Christmas Banner](https://img.shields.io/badge/Season-Christmas%202025-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## ✨ Features

### 🎨 Visual Design

- **Festive Theme**: Beautiful gradient background with Christmas colors (green and gold)
- **Animated Snowflakes**: Falling snowflake animation for holiday atmosphere
- **Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

### 🎁 Interactive Elements

- **Greeting Cards**: Three interactive cards for Christmas wishes, New Year greetings, and memories
- **Modal Windows**: Beautiful pop-up modals for displaying messages and galleries
- **Photo Gallery**: Showcase of 6 family photos with hover effects
- **Video Gallery**: 4 family video memories with native controls

### ⚡ Performance

- **Lazy Loading**: Images and videos load only when needed
- **Service Worker**: Offline support and caching for faster load times
- **Optimized Assets**: Efficient media handling and resource management
- **PWA Support**: Can be installed as a Progressive Web App

### ♿ Accessibility

- **ARIA Labels**: Comprehensive accessibility labels for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Semantic HTML**: Proper HTML5 semantic structure
- **Reduced Motion**: Respects user's reduced motion preferences
- **Skip Links**: Quick navigation to main content

### 🔍 SEO & Sharing

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Schema.org markup for better search visibility
- **Descriptive Alt Text**: All images have meaningful descriptions
- **Social Media Ready**: Optimized for sharing on social platforms

## 📁 Project Structure

```
Christmas&NewYear/
├── index.html           # Main HTML file with semantic structure
├── manifest.json        # PWA manifest for app installation
├── sw.js               # Service Worker for offline support
├── css/
│   └── styles.css      # Organized, modular CSS with CSS variables
├── js/
│   └── script.js       # Modular JavaScript with ES6 classes
├── images/
│   ├── maximo.jpg
│   ├── catalina.jpg
│   ├── familylove.jpg
│   ├── complete.jpg
│   ├── 4kids.jpg
│   ├── anda.jpg
│   ├── mukbang.jpg
│   └── dinner.jpg
└── videos/
    ├── travelToFalls.mp4
    ├── mukbang.mp4
    ├── cabognawCave.mp4
    └── karaoke.mp4
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for testing PWA features

### Installation

1. **Clone or Download** the project:

   ```bash
   git clone <repository-url>
   cd Christmas&NewYear
   ```

2. **Open the website**:

   - Simply open `index.html` in your web browser, or
   - Use a local server for full PWA functionality:

     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve
     ```

3. **Access the website**:
   - Direct: Open `index.html` in browser
   - Local server: Navigate to `http://localhost:8000`

### Customization

#### Update Sender Name

Edit `js/script.js` line 11:

```javascript
senderName: "Your Name Here",
```

#### Customize Messages

Edit the messages in `js/script.js` lines 12-22:

```javascript
messages: {
  christmas: {
    title: "Your Title",
    content: "Your custom message..."
  }
}
```

#### Add/Remove Photos

1. Place new images in the `images/` folder
2. Update `index.html` in the photo gallery section:

```html
<figure class="photo-frame">
  <img src="images/yourphoto.jpg" alt="Description" loading="lazy" />
  <figcaption>Photo Title</figcaption>
</figure>
```

#### Add/Remove Videos

1. Place new videos in the `videos/` folder
2. Update `index.html` in the video gallery section

## 🎯 Key Features Explanation

### CSS Architecture

- **CSS Variables**: Centralized color scheme and design tokens
- **Mobile-First**: Responsive breakpoints at 768px and 480px
- **Flexbox & Grid**: Modern layout techniques
- **Animations**: Smooth, performant CSS animations

### JavaScript Architecture

- **ES6 Classes**: Organized, maintainable code structure
- **Modular Design**: Separate classes for different functionalities
- **Event Delegation**: Efficient event handling
- **Performance Monitoring**: Built-in performance tracking

### Accessibility Features

- Keyboard navigation support (Tab, Enter, Escape)
- ARIA labels and roles
- Focus management for modals
- Screen reader friendly
- Respects user motion preferences

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Progressive Web App

This website can be installed as an app:

1. Open the website in a supported browser
2. Look for "Install" prompt or option
3. Follow browser instructions to install
4. Access the app from your home screen/desktop

## 🔧 Technical Details

### Performance Optimizations

- Lazy loading for images and videos
- Service Worker caching
- Minimal external dependencies
- Optimized animations
- Efficient DOM manipulation

### Security

- No external dependencies
- CSP-ready structure
- Secure resource loading
- No inline event handlers (mostly)

## 📝 License

This project is licensed under the MIT License - feel free to use and modify for personal projects.

## 👨‍💻 Author

**Julius C. Lagarto**

- Created with love for family celebration
- December 2025

## 🎉 Credits

- Design inspiration: Christmas and New Year themes
- Icons: Native emoji support
- Fonts: System fonts (Georgia, serif fallbacks)

## 🤝 Contributing

This is a personal family project, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Support

For questions or issues, please open an issue in the repository.

## 🎊 Version History

### v1.0.0 (December 2025)

- Initial release with all core features
- Professional code structure
- Full accessibility support
- PWA capabilities
- Comprehensive documentation

---

**Made with ❤️ for family celebrations | Merry Christmas & Happy New Year! 🎄🎆**
