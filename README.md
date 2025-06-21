A basic e-commerce frontend built with Next.js. This project demonstrates dynamic page generation and data fetching from a custom API, with a modern, responsive UI using Tailwind CSS.

✨ Features

📱 Responsive Design – Mobile-first layout using Tailwind CSS.
🔁 Dynamic Routing – Product pages are generated dynamically based on route parameters.
🔌 Custom API Integration – Fetches product data from a locally defined custom API.
🧩 Reusable UI Components – Built with modular and maintainable structure.

🧱 Project Structure

├── public/                   # Static assets and product images
├── src/
│   ├── app/                  # Next.js app directory (App Router)
│   │   ├── _components/      # Shared layout components (Header, Footer)
│   │   ├── globals.css       # Global styles using Tailwind
│   │   └── layout.js         # Root layout for the app
│   ├── components/           # Feature-level components
│   │   └── ui/               # Reusable UI elements (e.g., cards, buttons)
│   ├── lib/                  # Utility functions
│   └── Api.js                # Custom API handlers for product data

🚀 Getting Started

# Clone the repo
git clone https://github.com/yourusername/nextjs-simple-ecommerce.git

# Navigate to the project
cd nextjs-simple-ecommerce

# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
http://localhost:3000
