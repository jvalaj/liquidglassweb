# 🌊 Liquid Glass UI

A beautiful, lightweight, and accessible UI component library inspired by Apple's iconic frosted glass design language. Perfect for creating modern, elegant web interfaces with that premium Apple aesthetic.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Size](https://img.shields.io/badge/Size-~15KB-green.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)

## ✨ Features

- 🍎 **Apple-Inspired Design** - Beautiful frosted glass effects and smooth animations
- ♿ **Accessible by Default** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🎨 **Fully Customizable** - Easy-to-use CSS variables for colors, spacing, and effects
- ⚡ **Lightweight** - Pure CSS and minimal JavaScript (~15KB total)
- 📱 **Responsive** - Works beautifully on all screen sizes
- 🌗 **Dark Mode Support** - Automatic dark mode based on system preferences
- 🔓 **Open Source** - MIT licensed, use it anywhere
- 0️⃣ **Zero Dependencies** - No frameworks required, works with vanilla JS

## 🚀 Quick Start

### Installation

Simply include the CSS and JS files in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your content here -->
    <script src="main.js"></script>
</body>
</html>
```

### Your First Component

```html
<!-- Button -->
<button class="lg-button lg-button-primary">Click Me</button>

<!-- Card -->
<div class="lg-card">
    <div class="lg-card-header">
        <h4 class="lg-card-title">Card Title</h4>
    </div>
    <div class="lg-card-content">
        <p>Your content here...</p>
    </div>
</div>
```

## 📚 Components

### Buttons

Liquid Glass UI provides multiple button variants with beautiful glass effects:

```html
<!-- Primary Button -->
<button class="lg-button lg-button-primary">Primary</button>

<!-- Secondary Button -->
<button class="lg-button lg-button-secondary">Secondary</button>

<!-- Ghost Button -->
<button class="lg-button lg-button-ghost">Ghost</button>

<!-- Danger Button -->
<button class="lg-button lg-button-danger">Danger</button>

<!-- Button Sizes -->
<button class="lg-button lg-button-sm lg-button-primary">Small</button>
<button class="lg-button lg-button-primary">Default</button>
<button class="lg-button lg-button-lg lg-button-primary">Large</button>
```

### Cards

Cards with beautiful frosted glass effects:

```html
<div class="lg-card">
    <div class="lg-card-header">
        <h4 class="lg-card-title">Card Title</h4>
    </div>
    <div class="lg-card-content">
        <p>Card content goes here with beautiful glass effect.</p>
    </div>
    <div class="lg-card-footer">
        <button class="lg-button lg-button-sm lg-button-primary">Action</button>
    </div>
</div>
```

### Form Elements

Accessible and beautiful form inputs:

```html
<div class="lg-form-group">
    <label for="email" class="lg-label">Email</label>
    <input type="email" id="email" class="lg-input" placeholder="you@example.com">
</div>

<div class="lg-form-group">
    <label for="message" class="lg-label">Message</label>
    <textarea id="message" class="lg-textarea" placeholder="Your message..."></textarea>
</div>
```

### Alerts

Beautiful alert notifications with different variants:

```html
<!-- Info Alert -->
<div class="lg-alert lg-alert-info">
    <svg class="lg-alert-icon"><!-- icon --></svg>
    <div class="lg-alert-content">
        <h4 class="lg-alert-title">Information</h4>
        <p class="lg-alert-description">This is an info message.</p>
    </div>
</div>

<!-- Success Alert -->
<div class="lg-alert lg-alert-success">
    <!-- ... -->
</div>

<!-- Warning Alert -->
<div class="lg-alert lg-alert-warning">
    <!-- ... -->
</div>
```

### Modal

Accessible modals with beautiful backdrop blur:

```html
<!-- Modal Trigger -->
<button onclick="LiquidGlass.modal.open('my-modal')">Open Modal</button>

<!-- Modal -->
<div id="my-modal" class="lg-modal">
    <div class="lg-modal-backdrop" onclick="LiquidGlass.modal.close('my-modal')"></div>
    <div class="lg-modal-content">
        <div class="lg-modal-header">
            <h3 class="lg-modal-title">Modal Title</h3>
            <button class="lg-modal-close" onclick="LiquidGlass.modal.close('my-modal')">
                <!-- Close icon -->
            </button>
        </div>
        <div class="lg-modal-body">
            <p>Modal content goes here.</p>
        </div>
        <div class="lg-modal-footer">
            <button class="lg-button lg-button-ghost">Cancel</button>
            <button class="lg-button lg-button-primary">Confirm</button>
        </div>
    </div>
</div>
```

### Navigation

Clean and modern navigation components:

```html
<nav class="lg-nav">
    <a href="#" class="lg-nav-item lg-nav-item-active">Home</a>
    <a href="#" class="lg-nav-item">Components</a>
    <a href="#" class="lg-nav-item">Docs</a>
    <a href="#" class="lg-nav-item">About</a>
</nav>
```

### Badges

Small labels for tags, status indicators, etc:

```html
<span class="lg-badge lg-badge-primary">New</span>
<span class="lg-badge lg-badge-success">Active</span>
<span class="lg-badge lg-badge-warning">Beta</span>
<span class="lg-badge lg-badge-danger">Deprecated</span>
```

## 🎨 Customization

Liquid Glass UI uses CSS variables for easy customization. Override these in your own stylesheet:

```css
:root {
  /* Colors */
  --lg-primary: rgba(0, 122, 255, 1);
  --lg-secondary: rgba(88, 86, 214, 1);
  --lg-success: rgba(52, 199, 89, 1);
  --lg-warning: rgba(255, 149, 0, 1);
  --lg-danger: rgba(255, 59, 48, 1);
  
  /* Glass Effect */
  --lg-glass-bg: rgba(255, 255, 255, 0.7);
  --lg-glass-border: rgba(255, 255, 255, 0.18);
  --lg-blur: 20px;
  
  /* Spacing */
  --lg-space-sm: 0.5rem;
  --lg-space-md: 1rem;
  --lg-space-lg: 1.5rem;
  --lg-space-xl: 2rem;
  
  /* Border Radius */
  --lg-radius-sm: 0.375rem;
  --lg-radius-md: 0.75rem;
  --lg-radius-lg: 1rem;
  --lg-radius-xl: 1.5rem;
  
  /* Typography */
  --lg-font-size-sm: 0.875rem;
  --lg-font-size-md: 1rem;
  --lg-font-size-lg: 1.125rem;
  --lg-font-size-xl: 1.25rem;
}
```

### Example: Custom Brand Colors

```css
:root {
  --lg-primary: rgba(147, 51, 234, 1); /* Purple */
  --lg-secondary: rgba(236, 72, 153, 1); /* Pink */
  --lg-blur: 30px; /* More blur */
}
```

## 🔧 JavaScript API

### Modal

```javascript
// Open modal
LiquidGlass.modal.open('modal-id');

// Close modal
LiquidGlass.modal.close('modal-id');
```

### Toast Notifications

```javascript
// Show toast
LiquidGlass.toast.show({
  message: 'Operation successful!',
  type: 'success', // info, success, warning, danger
  duration: 3000 // milliseconds (0 = no auto-close)
});
```

### Dropdown

```javascript
// Toggle dropdown
LiquidGlass.dropdown.toggle('dropdown-id');
```

### Tabs

```javascript
// Switch tab
LiquidGlass.tabs.switch('tab-panel-id', 'tab-group-id');
```

### Utilities

```javascript
// Debounce function
const debouncedFn = LiquidGlass.utils.debounce(() => {
  console.log('Called after delay');
}, 300);

// Throttle function
const throttledFn = LiquidGlass.utils.throttle(() => {
  console.log('Called at most once per interval');
}, 1000);
```

## ♿ Accessibility

Liquid Glass UI is built with accessibility in mind:

- ✅ WCAG 2.1 AA compliant color contrasts
- ✅ Proper ARIA labels and roles
- ✅ Full keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus indicators for all interactive elements
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML structure

## 📱 Responsive Design

All components are fully responsive and work seamlessly across:

- 📱 Mobile devices (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌗 Dark Mode

Dark mode is automatically applied based on system preferences. You can also force it:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles automatically apply */
}
```

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported - requires `backdrop-filter`)

## 📦 What's Included

```
liquidglassweb/
├── index.html          # Demo page with all components
├── style.css          # Complete stylesheet (~12KB)
├── main.js            # JavaScript utilities (~3KB)
└── README.md          # This file
```

## 🤝 Contributing

Contributions are welcome! This is a simple library, so feel free to:

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this in any project, commercial or personal.

## 🙏 Acknowledgments

- Inspired by Apple's design language and iOS/macOS interfaces
- Following principles from shadcn/ui for simplicity and accessibility
- Built with modern CSS and vanilla JavaScript

## 💡 Philosophy

Liquid Glass UI follows these principles:

1. **Simplicity First** - No complex build tools or dependencies
2. **Copy & Customize** - Take what you need, modify what you want
3. **Accessibility Matters** - Everyone should be able to use beautiful interfaces
4. **Performance** - Lightweight and fast by default
5. **Developer Experience** - Clear, readable code with good documentation

## 🚀 What's Next?

Planned improvements:

- [ ] Additional components (tooltip, popover, accordion)
- [ ] Animation variants
- [ ] More theme presets
- [ ] React/Vue component wrappers (optional)
- [ ] CDN hosting

## 📞 Support

Found a bug or have a feature request? Open an issue on GitHub!

---

Made with ❤️ for the web. Inspired by Apple's beautiful design language.
