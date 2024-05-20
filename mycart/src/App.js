import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import ErrMsg from "./component/ErrMsg";
import Footer from "./component/Footer";
import AddItem from "./component/AddItem";
import React, { useState } from "react";
import Ptitle from "./component/PTitle";


function App() {
  const productListData = [
    {
      price: 90000,
      name: "Iphone Xr",
      quantity: 0,
    },
    {
      price: 15000,
      name: "Redmi Note 5 Pro",
      quantity: 0,
    },
    {
      price: 40000,
      name: "Pixel",
      quantity: 0,
    },
  ];

  let [productList, setProductListData] = useState(productListData);
  let [totalAmount, setTotalAmount] = useState(0);
  // let [resetData, setResetData] = useState();

  let [isNegative, setIsNegative] = useState(false);
  const incrementQuantity = (index) => {
    let newproductListData = [...productList];
    let newTotalAmount = totalAmount;

    newproductListData[index].quantity++;
    newTotalAmount += newproductListData[index].price;

    setTotalAmount(newTotalAmount);
    setProductListData(newproductListData);
    setIsNegative(false);
  };

  const decrementQuantity = (index) => {
    setIsNegative(false);
    let newproductListData = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductListData[index].quantity > 0) {
      newproductListData[index].quantity--;
      newTotalAmount -= newproductListData[index].price;

      setTotalAmount(newTotalAmount);
      setProductListData(newproductListData);

      setIsNegative(false);
    } else {
      setIsNegative(true);
    }
  };

  const resetData = () => {
    let newproductListData = [...productList];
    newproductListData.map((products) => {
      products.quantity = 0;
    });
    setProductListData(newproductListData);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newproductListData = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newproductListData[index].quantity * newproductListData[index].price;
    newproductListData.splice(index, 1);
    setProductListData(newproductListData);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newproductListData = [...productList];
    newproductListData.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductListData(newproductListData);

  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        {/* <Ptitle/> */}
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetData={resetData} />
      {isNegative ? <ErrMsg /> : null}
    </>
  );
}

export default App;
