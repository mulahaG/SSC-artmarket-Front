
import React from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <form>
          <input type="search" className="App-Search"/>
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
      <bady className="App-bady">
        
        <div class="art_box2">
         <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
         <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
         <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
        </div>
        
        <div class="art_box2">
          <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
          <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
          <div class="art_box"><img class="heart_box" src="https://img.icons8.com/material-outlined/48/fa314a/like--v1.png"/> <img class="book_box" src="https://img.icons8.com/material-outlined/48/000000/shopping-basket-2.png"/></div>
        </div>

        
    </bady>
    </div>
  );
}

export default App;

