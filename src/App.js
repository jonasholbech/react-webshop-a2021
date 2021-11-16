import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1163,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2011,
      usagetype: "Sports",
      productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
      price: 895,
      discount: null,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1164,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Winter",
      productionyear: 2015,
      usagetype: "Sports",
      productdisplayname: "Blue T20 Indian Cricket Jersey",
      price: 1595,
      discount: 28,
      brandname: "Nike",
      soldout: 1,
    },
    {
      id: 1165,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2013,
      usagetype: "Sports",
      productdisplayname: "Mean Team India Cricket Jersey",
      price: 2495,
      discount: 45,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1525,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Deck Navy Blue Backpack",
      price: 1299,
      discount: 55,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1526,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Big Cat Backpack Black",
      price: 1299,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1528,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Black Fleece Jacket",
      price: 3999,
      discount: 49,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1529,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Tee",
      price: 1899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1530,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Track Jacket",
      price: 4299,
      discount: 57,
      brandname: "Puma",
      soldout: 1,
    },
    {
      id: 1531,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Solid Round Neck T-Shirt",
      price: 799,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1532,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Leaping Cat T-shirt",
      price: 899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
  ]);
  function addProduct() {
    setProducts((oldProducts) =>
      oldProducts.concat({ productdisplayname: "Hi", price: 12 })
    );
  }
  const productCopy = [...products];
  productCopy.sort((a, b) => {
    if (a.productdisplayname > b.productdisplayname) {
      return 1;
    } else {
      return -1;
    }
  });
  const basket = [1, 2, 3];
  return (
    <div className="App">
      <Nav />
      <button className="full-bleed" onClick={addProduct}>
        Add Product
      </button>
      <ProductList products={productCopy} break="hell yeah" />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
