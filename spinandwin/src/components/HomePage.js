import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import headerImage from '../images/spinandwin-logo.png';
import winImage from '../images/win-image.png';
import spinImage from '../images/spin-wheel.png';
import sponsorOne from '../images/logo-1.png';
import sponsorTwo from '../images/logo-2.png';
import sponsorThree from '../images/logo-3.png';
import sponsorFour from '../images/logo-4.png';

function HomePage() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);
    
    return (
        <div>
            <header>
            <Link to="/">
                <img className="main-logo" alt="main logo" src={logo} />
            </Link>
                <img className="header-image" alt="header" src={headerImage} />
            </header>

            <main className="home-main">
                <div className="main-content">
                    <div>
                        <img className="win-image" alt="win" src={winImage} />
                        <img className="spin-image" alt="spin" src={spinImage} />
                    </div>
                    <div className="weekly-prizes">
                        <h1>Weekly Prizes</h1>
                        <h2>1 Prize of 10,000 BuyMore Dollars</h2>
                        <h2>5 Prizes of 750 BuyMore Dollars</h2>
                        <h2>10 Prizes of 100 BuyMore Dollars</h2>
                        <h2>100 Prizes of 20 BuyMore Dollars</h2>
                    </div>
                </div>
            </main>

            <div className="play-content">
                <h2>
                    Get ready to spin your way to incredible rewards with the BuyMore Dollars Spin to Win Contest!
                    Don't miss this limited time opportunity to spin the wheel and win one of our many prizes. 
                    Hurry, contest will be closing in just three weeks!
                </h2>
                <Link to="/terms">
                <button className="play-button">Play Now</button>
                </Link>
            </div>

            <div className="sponsor-container">
                <div>
                    <h1>Our Sponsors</h1>
                </div>
                <div className="mySponsors">
                    <img src={sponsorOne} alt="first sponsor"/>
                    <img src={sponsorTwo} alt="second sponsor"/>
                    <img src={sponsorThree} alt="third sponsor"/>
                    <img src={sponsorFour} alt="forth sponsor"/>
                </div>
            </div>

            <footer>
                <h1>Copyright 2024© BuyMore Dollars. All rights reserved.</h1>
            </footer>

        </div>
    );
}

export default HomePage;
