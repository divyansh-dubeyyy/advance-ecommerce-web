# 🎮 PC Builder Store - Advanced E-Commerce Web Application

A **cutting-edge, modern e-commerce platform** for building and customizing high-performance gaming PCs. Featuring smooth animations, responsive design, and an intuitive user interface built with **HTML5, CSS3, Bootstrap 5, and vanilla JavaScript**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-blueviolet)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Key Features

### 💻 Product Catalog
- **Extensive Component Range**: CPUs, GPUs, RAM, SSDs, Power Supplies, Monitors, Peripherals
- **Detailed Product Information**: Specifications, pricing, and performance metrics
- **Real-time Search**: Instant product filtering with live search functionality
- **Organized Categories**: Easy navigation through multiple product categories

### 🛒 Shopping Experience
- **Add to Cart**: Seamless product addition with instant feedback
- **Local Storage Persistence**: Cart data survives page refreshes
- **Real-time Badge Updates**: Live cart item count in navbar
- **Cart Management**: Add, remove, and clear items with ease
- **Summary View**: Detailed order summary with totals and shipping info

### 🎨 Customization Engine
- **Component Picker**: Select from various PC parts
- **Real-time Price Calculation**: Instant total price updates
- **Build Templates**: Pre-built PC configurations
- **Performance Preview**: See your build specifications

### 🔐 User System
- **Secure Login Modal**: Integrated authentication interface
- **Session Management**: localStorage-based user session tracking
- **Protected Checkout**: Login-required checkout process

### ✨ Modern UI/UX
- **Smooth Animations**: 15+ CSS animations for fluid interactions
- **Responsive Design**: Mobile-first approach for all devices
- **Dark Theme**: Modern dark interface with glowing accents
- **Gradient Effects**: Beautiful gradient backgrounds and overlays
- **Hover Effects**: Interactive cards with scale and glow animations
- **Loading States**: Visual feedback for user actions

## 📁 Project Structure

```
advance-ecommerce-web/
├── 📄 index.html              # Homepage with product catalog
├── 📄 cart.html               # Shopping cart management
├── 📄 customize.html          # PC customization builder
├── 📄 checkout.html           # Checkout process
├── 📄 order.html              # Order confirmation
├── 📄 payment.html            # Payment gateway
├── 🎨 style.css               # Advanced CSS with animations
├── 🚀 script.js               # Core JavaScript functionality
├── 📖 README.md               # This documentation
├── 🔧 .gitignore              # Git configuration
├── 📁 static/
│   └── 📁 images/             # Static banner images
└── 📁 images/                 # Product images
```

## 🛠 Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| **HTML5** | Semantic markup | Latest |
| **CSS3** | Styling & animations | Latest |
| **JavaScript (ES6+)** | Interactivity & logic | Modern |
| **Bootstrap** | Responsive framework | 5.3.3 |
| **Bootstrap Icons** | Icon library | Latest |
| **localStorage** | Client-side data persistence | Browser API |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VSCode, Sublime, etc.) - optional
- Git (for cloning)

### Installation

#### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/divyansh-dubeyyy/advance-ecommerce-web.git
cd advance-ecommerce-web
```

#### 2️⃣ **Direct Browser Access** (Simplest)
Simply double-click `index.html` or drag it into your browser

#### 3️⃣ **Local Server** (Recommended for development)

**Using Python 3:**
```bash
python -m http.server 8000
# Navigate to http://localhost:8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Navigate to http://localhost:8000
```

**Using Node.js (with http-server):**
```bash
npx http-server
# Navigate to the provided localhost URL
```

**Using Live Server (VSCode Extension):**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 💻 Usage Guide

### 🏠 Homepage
1. Browse the product catalog across multiple categories
2. Use the search bar to find specific components
3. View product details and prices
4. Hover over products to see animations and details

### 🛍️ Adding Products
1. Click **"Add to Cart"** on any product
2. Confirmation message appears
3. Cart badge updates with item count
4. Navigate to cart to view your items

### 🛒 Cart Management
1. Click the **cart icon** in the navbar
2. View all items with prices
3. See order summary with subtotal and shipping
4. Remove individual items with trash button
5. Clear entire cart if needed
6. Proceed to checkout when ready

### 🎮 Customizing Your PC
1. Go to **Customize** section
2. Select components from dropdowns (CPU, GPU, RAM, etc.)
3. See real-time price updates
4. Add complete configuration to cart

### 🔐 Authentication
1. Click **person icon** in navbar
2. Enter demo credentials:
   - **Username:** `admin`
   - **Password:** `1234`
3. Successfully logged in users can access checkout

### 💳 Checkout Process
1. Review your cart items
2. Proceed to checkout (requires login)
3. Enter shipping information
4. Select payment method
5. Complete order

## 📄 Detailed Page Documentation

### 🏠 index.html
**The main landing page featuring:**
- Responsive navigation bar with dropdown menus
- User login modal
- Search functionality
- Hero carousel with product banners
- Three sections of product cards:
  - Popular CPUs
  - Graphics Cards (GPUs)
  - Memory (RAM)
- Enhanced footer with social links
- Smooth animations on page load

**Key Components:**
```html
- Navbar with logo and icons
- Search input with live filtering
- Carousel with fade transitions
- Product grid with Bootstrap layout
- Interactive cards with hover effects
- Footer with multiple sections
```

### 🛒 cart.html
**Shopping cart management interface:**
- Display all items added to cart
- Item prices and quantities
- Individual item removal
- Total price calculation
- Order summary sidebar
- Checkout button
- Clear cart functionality

**Features:**
- LocalStorage integration for persistence
- Responsive two-column layout
- Summary card with pricing breakdown
- Safety guards for empty cart

### 🎨 customize.html
**PC customization builder:**
- Component selection dropdowns
- Real-time price calculation
- 15+ component options
- Pre-built templates
- Live configuration preview
- Add custom build to cart

**Components Available:**
- Processor (CPU)
- Cooling System
- Graphics Card (GPU)
- Motherboard
- RAM
- NVMe SSD
- SATA SSD
- HDD
- Power Supply
- Cabinet
- Monitor
- Keyboard
- Mouse
- Mousepad
- Headset

### 🛍️ checkout.html & 💳 payment.html
**Complete purchase flow:**
- Order summary
- Shipping information form
- Payment method selection
- Order confirmation
- Invoice generation

### ✅ order.html
**Order confirmation page:**
- Order number
- Items purchased
- Total amount
- Estimated delivery
- Thank you message

## 🎨 Animation Features

### CSS Animations Included
- **fadeInDown** - Top to bottom entrance
- **fadeInUp** - Bottom to top entrance
- **scaleIn** - Zoom entrance
- **slideInLeft/Right** - Side entrance effects
- **pulse** - Pulsing opacity animation
- **glow** - Glowing box-shadow effect
- **rotate** - 360° rotation
- **shimmer** - Shimmer background effect

### Interactive Effects
- Navbar brand text-shadow glow
- Card hover scale and transform
- Product image rotation on hover
- Button glow effects
- Badge pulsing animation
- Dropdown smooth transitions
- Form input focus glow

## 🔐 Authentication System

### Demo Credentials
```
Username: admin
Password: 1234
```

### How It Works
- Login form validates credentials
- Session stored in localStorage
- Logged-in users can access checkout
- Session persists across page refreshes
- Logout clears session data

**Note:** This is a demo system. Production requires backend authentication.

## 💾 Data Persistence

### localStorage Usage
```javascript
// Cart data stored as JSON
{
  name: "Product Name",
  price: 15000
}

// User session
loggedIn: "true"
```

All data persists until manually cleared or localStorage is wiped.

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 992px

All pages are fully responsive and mobile-optimized.

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | 14+ |
| Edge | ✅ Full | Latest |
| Mobile Chrome | ✅ Full | Latest |
| Mobile Safari | ✅ Full | 12+ |

## 🔄 API & Integration Ready

The application is structured to easily integrate with:
- **Backend APIs** for product data
- **Payment Gateways** (Stripe, Razorpay, PayPal)
- **Email Services** for confirmations
- **Database Systems** for orders
- **Analytics Platforms** for tracking

## 🚀 Future Enhancements

- [ ] **Backend Integration** - Node.js/Express server
- [ ] **Database** - MongoDB/PostgreSQL
- [ ] **Real Authentication** - JWT tokens
- [ ] **Payment Gateway** - Stripe/Razorpay integration
- [ ] **Email Service** - Nodemailer for confirmations
- [ ] **User Accounts** - Profile management
- [ ] **Order Tracking** - Real-time status updates
- [ ] **Product Reviews** - User ratings and comments
- [ ] **Wishlist** - Save favorite items
- [ ] **Advanced Search** - Filters and sorting
- [ ] **Comparison Tool** - Compare components
- [ ] **Stock Management** - Real inventory
- [ ] **Admin Dashboard** - Product management
- [ ] **Multi-language** - i18n support
- [ ] **Dark/Light Mode Toggle** - Theme switcher
- [ ] **PWA** - Progressive Web App features

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork the repository**
   ```bash
   git fork https://github.com/divyansh-dubeyyy/advance-ecommerce-web.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes**
   - Write clean, maintainable code
   - Comment complex logic
   - Follow existing code style

4. **Commit your changes**
   ```bash
   git commit -m "Add: Description of your feature"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference related issues
   - Wait for review

### Contribution Guidelines
- Follow existing code style
- Add comments for complex code
- Test thoroughly before submitting
- Update README if needed
- Be respectful to other contributors

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

### MIT License Summary
✅ **Free to use** - Personal and commercial use  
✅ **Modify** - Change and adapt the code  
✅ **Distribute** - Share and redistribute  
✅ **Private use** - Use privately without disclosure  
⚠️ **Attribution** - Include license and notice  

## 👨‍💻 Author

**Divyansh Dubey**
- 🐙 GitHub: [@divyansh-dubeyyy](https://github.com/divyansh-dubeyyy)
- 📧 Email: [your-email@example.com]
- 🔗 Portfolio: [your-portfolio.com]

## 🤝 Connect & Support

- ⭐ **Star this repo** if you find it helpful
- 🐛 **Report bugs** via GitHub Issues
- 💡 **Suggest features** via Discussions
- 🔄 **Fork & contribute** improvements

## 📞 Support & Contact

### Getting Help
1. Check existing GitHub Issues
2. Read documentation carefully
3. Search Stack Overflow
4. Create a new GitHub Issue with details

### Report Issues
Include:
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## 🎓 Learning Resources

### Related Tutorials
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Recommended Tools
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [Figma](https://www.figma.com/) - Design mockups
- [GitHub Desktop](https://desktop.github.com/) - Git GUI

## 📊 Project Statistics

- **Lines of Code**: 1000+
- **CSS Animations**: 15+
- **JavaScript Functions**: 20+
- **Pages**: 6
- **Components**: 40+
- **Responsive Breakpoints**: 4

## 🎯 Project Goals

✅ Create a modern e-commerce template  
✅ Showcase web development best practices  
✅ Provide smooth user experience  
✅ Implement local state management  
✅ Demonstrate responsive design  
✅ Use CSS animations effectively  

## 📝 Changelog

### Version 2.0 (Current)
- ✨ Added 15+ CSS animations
- 🎨 Enhanced UI with gradients and glows
- 📱 Improved responsive design
- 🎮 Added GPU and RAM categories
- 💎 Enhanced footer with social links
- 📦 Improved cart summary display
- 🔄 Better cart management

### Version 1.0
- Initial release
- Basic functionality
- Cart system
- Customization tool

## 🙏 Acknowledgments

- Bootstrap team for the framework
- Font Awesome for icons
- Community for feedback
- Contributors for improvements

---

<div align="center">

**Made with ❤️ for PC Enthusiasts**

**© 2026 PC Builder Store | All Rights Reserved**

[⬆ Back to Top](#-pc-builder-store---advanced-e-commerce-web-application)

</div>