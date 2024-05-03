import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/assets/Logo.png";
import RestCardImg from "/assets/rest-card-img.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} className="logo" alt="Brand Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResturantCard = () => {
    return (
        <div className="res-card">
            <img src={RestCardImg} alt="Rest Image" />
            <h3>Gummadi Grand</h3>
            <div className="res-card-body">
                <h4>Biriyani, North Indian, Asian</h4>
                <h4>4.4 Stars</h4>
                <h4>12 Minutes</h4>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
