const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.static('public'));
  app.use(express.json());

  // Sample products API
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 1499, category: 'Electronics' },
    { id: 2, name: 'Running Shoes', price: 2999, category: 'Footwear' },
    { id: 3, name: 'Coffee Mug',    price: 349,  category: 'Kitchen' },
  ];

  app.get('/api/products', (req, res) => res.json(products));
  app.get('/health', (req, res) => res.json({ status: 'OK', shop: 'Live' }));

  app.listen(PORT, () => console.log(`Shop running on port ${PORT}`));
