import React from "react";
import "./App.css";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 50px 0px;
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
        <Wrapper></Wrapper>
      </div>
    </div>
  );
}

export default App;
