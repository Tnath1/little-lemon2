import React from "react";
import "./styles.css";

function Button() {
  return <button className="btn">Reserve a Table</button>;
}

function Home() {
  return (
    <>
      <header className="header">
        <div className="headDiv">
          <h1 className="Heading">Little Lemon </h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo
          </p>
          <Button />
        </div>
        <div className="headDivs">
          <img
            src="./images/restauranfood.jpg"
            className="imgHeader"
            alt="burger"
          />
        </div>
      </header>
      <main className="main">
        <div className="mainDiv">
          <div className="thisWeek">
            <h6>This Weeks Specials!</h6>
          </div>
          <button className="btntwo">Online Menu</button>
        </div>
      </main>
    </>
  );
}

export { Button };

export default Home;
