import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import coupon1 from '../images/pierogicoupon.png';
import coupon2 from '../images/gurkincoupon.png';

function LoserPage() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <div>

            <main id="lose-page">
                <h1>So Close!</h1>
                <p>Thank you for playing the BuyMore Dollars Prize Wheel! We appreciate your participation and want to offer you a little something to show our gratitude.</p>
                <h1>Special Offer Just for You!</h1>
                <p>As a token of our appreciation, enjoy an exclusive coupon for $2.00 off any purchase over $50 from Pierogi Hat Co. or a free Gurkin shake with any order of fries. It's our way of saying thank you for being part of the BuyMore Dollars family.</p>
                <div id="coupons" >
                    <img id="coupon1" src={coupon1} />
                    <h1>OR</h1>
                    <img id="coupon2" src={coupon2} />
                </div>
                <h1>Try Again Soon!</h1>
                <p>Remember, you can spin the BuyMore Dollars Prize Wheel once every 72 hours. Your next chance to win could be just around the corner. Keep an eye on the prize and who knows? Next time, you might be the one taking home those big BuyMore Dollars!</p>
                <h1>Stay Connected</h1>
                <p>Don't miss out on future contests, special offers, and exciting updates from BuyMore Dollars and our partners. Keep connected and discover all the ways you can benefit from being part of our community.</p>
                <h1>Thank you for your participation, and we look forward to seeing you back soon!</h1>
                <Link id="lose-btn" to="/">
                <button>Return Home</button>
                </Link>
            </main>

        </div>
    );
}

export default LoserPage;
