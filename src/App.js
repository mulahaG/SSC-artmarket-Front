import React from "react";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/common/HeaderComponent';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* 고정 컴포넌트 */}
      <HeaderComponent/>
      {/* 갈아끼워지는 컴포넌트들 */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </>
=======
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 50px 0px;
`;

const Box = styled.div`
  width: 1000px;
  height: 350px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;

  background-color: aqua;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <form>
          <input type="search" className="App-Search" />

          <button className="search_button">
            <img src="search.png" className="Search-logo" alt="Search" />
            <span className="search_Text">검색</span>
          </button>

          <button className="like_button">
            <img src="like.png" className="like-logo" alt="like" />
            <span className="like_Text">관심등록</span>
          </button>

          <button className="login_button">
            <img src="login.png" className="login-logo" alt="login" />
            <span className="login_Text">로그인</span>
          </button>

          <button className="cart_button">
            <img src="cart.png" className="cart-logo" alt="cart" />
            <span className="cart_Text">장바구니</span>
          </button>

          <button className="customer_button">
            <img src="customer.png" className="customer-logo" alt="customer" />
            <span className="customer_Text">고객센터</span>
          </button>
        </form>
      </header>

      <div className="main">
        <Wrapper>
          <Box />
        </Wrapper>
      </div>
    </div>
>>>>>>> 1b0128790b9848b1ea2ffd4bbe588195216d4658
  );
}

export default App;
