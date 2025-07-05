# AI Camp - Event Landing Page

A modern, responsive landing page for an AI programming camp designed for kids ages 10-15. The page features a two-column desktop layout, progressive form functionality, and a vibrant pixel art aesthetic.

![AI Camp Hero](ai-camp-hero.png)

## 🎯 Overview

AI Camp is an educational event where kids learn to build games and websites using AI tools. This landing page provides event information, registration functionality, and mentor details in an engaging, user-friendly design.

## ✨ Features

### 🎨 Design & Layout
- **Two-column desktop layout** with sticky hero section
- **Full viewport mobile hero** for maximum impact
- **Pixel art aesthetic** with yellow/orange gradient theme
- **Responsive design** optimized for all device sizes
- **Smooth animations** and hover effects

### 📋 Registration System
- **Progressive form disclosure** - shows fields as needed
- **Real-time validation** with custom error messaging
- **Device access survey** for planning purposes
- **Session time selection** with visual buttons
- **Smooth scroll-to-signup** functionality

### 🎮 Interactive Elements
- **Tabbed content section** for Game vs Website projects
- **Connected toggle switches** with familiar UI patterns
- **Large, prominent icons** for visual impact
- **Floating animation** for hero character

### 📱 Mobile Optimization
- **Full-screen hero section** on mobile devices
- **Optimized image sizing** for different breakpoints
- **Touch-friendly buttons** and form elements
- **Proper spacing** and typography scaling

## 🛠 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - Form validation and interactivity
- **Google Fonts** - Press Start 2P (pixel font) + Space Grotesk
- **Responsive Images** - Pixel art assets with crisp rendering

## 📁 File Structure

```
aicamp/
├── index.html              # Main landing page
├── styles.css              # Complete styling and responsive design
├── script.js               # Form validation and interactive features
├── ai-camp-hero.png        # Main hero character image
├── calendar.png            # Event date icon
├── house.png               # Location icon
├── terrence-2.png          # Mentor profile photo
├── terrence.png            # Alternative mentor photo
└── README.md               # This file
```

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/breschio/aicamp.git
   cd aicamp
   ```

2. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000` to view the page

### Deployment
This is a static site that can be deployed to:
- **GitHub Pages** - Enable in repository settings
- **Netlify** - Drag and drop the folder
- **Vercel** - Connect the GitHub repository
- **Any static hosting service**

## 🎨 Design System

### Color Palette
- **Primary**: `#ffd700` (Gold)
- **Secondary**: `#ff6b35` (Orange)
- **Background**: `#2d3748` (Dark Blue-Gray)
- **Accent**: `#1a202c` (Darker Blue-Gray)
- **Text**: `#ffffff` (White)
- **Subtle**: `#a0aec0` (Light Gray)

### Typography
- **Headlines**: Press Start 2P (pixel font)
- **Body Text**: Space Grotesk (modern sans-serif)
- **Responsive sizing** across all breakpoints

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: 479px and below

## 📋 Form Features

### Progressive Disclosure
1. **Initial fields**: Kid's name, age, time selection
2. **Auto-reveals**: Parent/guardian info after initial completion
3. **Validation**: Real-time feedback with custom styling
4. **Device survey**: Radio buttons for planning purposes

### Validation Rules
- **Required fields**: All contact and kid information
- **Age range**: 8-16 years (adjustable)
- **Email format**: Standard email validation
- **Phone format**: Flexible phone number input
- **Time selection**: Must choose morning or afternoon session

## 🎯 Event Details

- **Target Age**: 10-15 years old
- **Sessions**: Morning (9-11 AM) or Afternoon (1-3 PM)
- **Date**: Saturday, July 12th
- **Location**: Plover Hill Studios
- **Focus**: Building games and websites with AI tools

## 👨‍💻 Mentor Information

**Terrence Breschi** - Camp Leader
- Product Designer and AI enthusiast
- 20+ years of design and coding experience
- Worked at Meta, GoFundMe, and Yahoo!
- Passionate about teaching kids programming as a "superpower"

## 🔧 Customization

### Updating Event Details
- Edit dates/times in `index.html` (lines 57-67)
- Update location in Details section
- Modify age ranges in form validation (`script.js`)

### Styling Changes
- Color scheme in CSS custom properties
- Typography adjustments in font imports
- Layout modifications in media queries

### Adding Features
- Additional form fields in the progressive disclosure
- New tab content in "What we'll build" section
- Enhanced animations and interactions

## 📱 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Responsive design**: Works on all screen sizes
- **Graceful degradation**: Core functionality works without JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about the AI Camp event or this landing page:

- **GitHub**: [@breschio](https://github.com/breschio)
- **Repository**: [github.com/breschio/aicamp](https://github.com/breschio/aicamp)

---

Built with ❤️ for kids who want to learn the superpowers of AI and programming!
