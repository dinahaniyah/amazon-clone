import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          alt=""
        />
        <div className="home__row">
          <Product
            title="lala"
            price={20}
            rating={3}
            image="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
          />
          <Product
            title="lala"
            price={20}
            rating={3}
            image="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
          />
          {/* Product */}
        </div>
        <div className="home__row">
          <Product
            title="lala"
            price={20}
            rating={3}
            image="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
          />
          <Product
            title="lala"
            price={20}
            rating={3}
            image="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
          />
          <Product
            title="lala"
            price={20}
            rating={3}
            image="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
