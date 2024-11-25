import express from "express";
import cors from "cors";

const app = express();
const port = 8080; // Using port 8080

const corsOptions = {
    origin: 'https://candle-shop-nuea.onrender.com', // Allow this origin
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  };
  
  // Middleware to parse JSON and handle CORS
  app.use(express.json());
  app.use(cors(corsOptions)); // Enable CORS with the specified options
  // app.use(cors());

// In-memory data storage (mocking the JSON server)
const db = {
  products: [
    { name: "Spiced Mint", imageUrl: "/image1-1.png", price: 9.99, id: "5388" },
    { name: "Ocean Breeze", imageUrl: "/image1-3.png", price: 10.99, id: "ae57" },
    { name: "Vanilla Dream", imageUrl: "/image1-4.png", price: 8.99, id: "eff6" },
    { name: "Citrus Zest", imageUrl: "/image1-5.png", price: 12.99, id: "a595" },
    { name: "Forest Pine", imageUrl: "/image1-6.png", price: 13.99, id: "55d7" },
    { name: "Amber Musk", imageUrl: "/image1-7.png", price: 14.99, id: "99b2" },
    { name: "Rose Petals", imageUrl: "/image1.png", price: 9.49, id: "3686" },
    { name: "Sunflower Radiance", imageUrl: "/image1-1.png", price: 6, id: "56ca" },
  ],
  cart: [],
};

let cartIdCounter = 1; // Initialize an ID counter for cart items

// Routes for Products
app.get("/products", (req, res) => {
  res.json(db.products);
});

app.get("/products/:id", (req, res) => {
  const product = db.products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

app.post("/products", (req, res) => {
  const product = req.body;
  const randomId = Date.now().toString();
  const existingProduct = db.products.find((p) => p.id === product.id);

  if (existingProduct) {
    return res.status(400).json({ message: "Product with the same ID already exists" });
  }

  db.products.push({ ...product, id: randomId });
  res.status(201).json({ message: "Product added successfully", product: { ...product, id: randomId } });
});

app.patch("/products/:id", (req, res) => {
  const productIndex = db.products.findIndex((p) => p.id === req.params.id);

  if (productIndex !== -1) {
    const allowedUpdates = ["name", "imageUrl", "price"];
    const updates = Object.keys(req.body);

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
      return res.status(400).json({ message: "Invalid updates" });
    }

    db.products[productIndex] = { ...db.products[productIndex], ...req.body };
    return res.status(200).json({
      message: "Product updated successfully",
      product: db.products[productIndex],
    });
  }

  res.status(404).json({ message: "Product not found" });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const productIndex = db.products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    db.products.splice(productIndex, 1);
    return res.status(200).json({ message: `Product deleted with id: ${productId}` });
  }

  res.status(404).json({ message: "Product not found" });
});

// Routes for Cart
app.get("/cart", (req, res) => {
  res.json(db.cart); // Get the current cart
});

// Add product to the cart (with quantity and totalPrice)
app.post("/cart", (req, res) => {
  const { product } = req.body;

  // Ensure required product data is provided
  if (!product || !product.id || !product.quantity || product.totalPrice === undefined) {
    return res.status(400).json({ message: "Product details, including quantity and totalPrice, are required" });
  }

  // Find the product in the product list
  const existingProduct = db.products.find((p) => p.id === product.id);
  if (!existingProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Check if the product already exists in the cart
  const cartItem = db.cart.find((item) => item.product.id === product.id);
  if (cartItem) {
    // If the product is already in the cart, update the quantity and totalPrice
    cartItem.product.quantity += product.quantity;
    cartItem.product.totalPrice = cartItem.product.quantity * existingProduct.price;
  } else {
    // Otherwise, add the new product to the cart
    const newCartItem = {
      id: String(cartIdCounter++), // Auto-incrementing ID for cart items
      product: {
        ...existingProduct,
        quantity: product.quantity,
        totalPrice: product.totalPrice,
      },
    };
    db.cart.push(newCartItem);
  }

  res.status(201).json({ message: "Product added to cart", cart: db.cart });
});

// Remove product from cart by ID
app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;

  const cartIndex = db.cart.findIndex((item) => item.id === id);
  if (cartIndex === -1) {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  db.cart.splice(cartIndex, 1);
  res.json({ message: "Item removed from cart", cart: db.cart });
});

// Clear the cart
app.delete("/cart", (req, res) => {
  db.cart = [];
  res.json({ message: "Cart cleared", cart: db.cart });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
