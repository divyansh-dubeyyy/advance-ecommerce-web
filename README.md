# PC Builder Store - Advanced E-Commerce Web

A modern, responsive e-commerce web application for buying and customizing PC components. Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
- [File Descriptions](#file-descriptions)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)

## ✨ Features

- **Product Catalog**: Browse a wide range of PC components including CPUs, GPUs, RAM, SSDs, and power supplies
- **Shopping Cart**: Add/remove products with persistent storage using localStorage
- **PC Customization**: Build custom PC configurations with price calculations
- **User Authentication**: Login modal for user authentication
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **Dark Theme**: Modern dark-themed UI for comfortable viewing
- **Real-time Cart Updates**: Cart count badge updates automatically
- **Product Filtering**: Easy navigation through dropdown menus

## 📁 Project Structure

```
advance-ecommerce-web/
├── index.html          # Main homepage with product listings
├── cart.html           # Shopping cart page
├── customize.html      # PC customization builder page
├── script.js           # Core JavaScript functionality
├── style.css           # Custom styles and theme
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
├── static/             # Static assets directory
└── images/             # Product images directory
```

## 🛠 Technologies Used

- **Frontend Framework**: Bootstrap 5.3.3
- **Icons**: Bootstrap Icons
- **JavaScript**: Vanilla ES6+
- **Storage**: localStorage API
- **CSS**: Custom CSS3 with Flexbox/Grid
- **Version Control**: Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyansh-dubeyyy/advance-ecommerce-web.git
   cd advance-ecommerce-web
   ```

2. **Open in a web browser**
   - Simply open `index.html` in your preferred web browser
   - No build tools or server setup required

3. **Alternative: Using a local server** (optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
   Then navigate to `http://localhost:8000`

## 🚀 Usage

### Browsing Products
1. Navigate to the home page (`index.html`)
2. Browse products by category using the dropdown menu
3. View product details, prices, and specifications

### Adding to Cart
1. Click the **"Add to Cart"** button on any product card
2. A confirmation alert will appear
3. Cart count badge updates automatically in the navbar

### Managing Cart
1. Click the **Cart** icon in the navbar to view your cart
2. View all items with their prices
3. Remove individual items as needed
4. See the total price calculation
5. Clear entire cart if needed

### Customizing PC
1. Navigate to the **Customize** page
2. Build your custom PC by selecting components
3. See real-time price updates
4. Add complete configuration to cart

## 📄 Pages

### index.html
- Home page with product listings
- Navigation bar with category dropdown
- Login modal
- Product cards with add to cart functionality

### cart.html
- Shopping cart display
- List of all items in cart
- Individual item removal
- Total price calculation
- Clear cart option

### customize.html
- PC customization builder
- Component selection interface
- Real-time price calculation
- Pre-built configuration templates

## 📝 File Descriptions

### index.html
Main landing page featuring the product catalog with:
- Responsive navbar with brand logo
- Login modal for user authentication
- Product grid layout with Bootstrap
- Category navigation
- Shopping cart badge

### cart.html
Shopping cart management page with:
- Cart items display
- Item removal functionality
- Total price calculation
- Clear cart button
- Empty cart state handling

### customize.html
PC customization builder featuring:
- Component selection dropdowns
- Real-time price updates
- Configuration preview
- Add to cart functionality

### script.js
Core functionality including:
- Cart management (add, remove, clear)
- localStorage persistence
- Cart count updates
- Dynamic cart page rendering
- Event handlers for user interactions

### style.css
Custom styling featuring:
- Dark theme design
- Responsive layout utilities
- Custom component styles
- Color scheme and typography
- Bootstrap overrides

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Key Features Explained

### localStorage Integration
The application uses browser's localStorage to persist cart data:
```javascript
// Cart data is saved locally and survives page refreshes
localStorage.setItem("cart", JSON.stringify(cart));
```

### Dynamic Cart Updates
Cart count badge updates automatically as items are added/removed:
```javascript
function updateCartCount() {
    const cart = getCart();
    const badge = document.querySelector(".cart-badge");
    if (badge) badge.innerText = cart.length;
}
```

### Responsive Design
Bootstrap 5 grid system ensures mobile compatibility across all pages.

## 🔧 Future Enhancements

- [ ] Backend integration with database
- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Search functionality with filters
- [ ] Product recommendations
- [ ] Multiple language support

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Divyansh Dubey**
- GitHub: [@divyansh-dubeyyy](https://github.com/divyansh-dubeyyy)

## 📞 Support

For issues and suggestions, please create an issue on the GitHub repository.

---

**Last Updated**: January 2026  
**Status**: Active Development