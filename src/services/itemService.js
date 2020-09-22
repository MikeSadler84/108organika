var data = [
  {
    id: "5f40a6baac77a903d8f682c6",
    price: 12.32,
    stock: 13,
    title: "Cauliflower",
    image: "img-1.jpg",
    discount: 5,
    category: "Veggetable",
  },
  {
    id: "5f40a6ba41d9e5044ced586c",
    price: 22.71,
    stock: 21,
    title: "Strawberry",
    image: "product-6.jpg",
    discount: 10,
    category: "Fruit",
  },
  {
    id: "5f40a6baa9e6e22fa1d5fac4",
    price: 2.0,
    stock: 20,
    title: "Organic Eggs",
    image: "img-15.jpg",
    discount: 0,
    minimum: 6,
    category: "Dairy & Eggs",
  },
  {
    id: "5f40a6baf0f068a497921d29",
    price: 6.99,
    stock: 10,
    title: "Carrot",
    image: "img-4.jpg",
    discount: 0,
    category: "Veggetable",
  },
  {
    id: "5f40a866337a3bb00793da52",
    price: 2.5,
    stock: 34,
    title: "Banana",
    image: "img-5.jpg",
    discount: 4,
    minimum: 4,
    category: "Fruit",
  },
  {
    id: "5f40a866ea0a04e6891b7084",
    price: 14.0,
    stock: 14,
    title: "Orange",
    image: "product-10.jpg",
    discount: 0,
    category: "Fruit",
  },
  {
    id: "5f40a866ea0a04e6891212333",
    price: 1.0,
    stock: 11,
    title: "Eggs",
    image: "img-15.jpg",
    discount: 12,
    minimum: 12,
    category: "Dairy & Eggs",
  },
  {
    id: "5f40a866ea0a04e68911231328",
    price: 19.1,
    stock: 11,
    title: "Orange Juice",
    image: "product-15.jpg",
    discount: 12,
    category: "Beverages",
  },
];

class ItemService {
  getProducts() {
    //retrieve products from back end
    return data;
  }
}

export default ItemService;
