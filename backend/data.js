import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        countInStock: 12,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 100,
        brand: 'Adidas',
        countInStock: 14,
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 220,
        brand: 'Lacoste',
        countInStock: 12,
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 78,
        brand: 'Nike',
        countInStock: 2,
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 65,
        brand: 'Puma',
        countInStock: 3,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 139,
        brand: 'Adidas',
        countInStock: 4,
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;