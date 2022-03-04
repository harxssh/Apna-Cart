// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price: 40000,
      name: "IPhone Xs Max",
      quantity: 0,
    },
    {
      price: 90000,
      name: "Samsung Galaxy Fold Z3",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
      return 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  return (
    <>
      <Navbar title="E - Vis" />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
