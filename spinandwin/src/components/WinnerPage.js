import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function WinnerPage() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    const location = useLocation();
    const prizeValue = location.state.prizeValue;
    

    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = 10;
        const userEnteredAnswer = parseInt(userAnswer);

        if (userEnteredAnswer === correctAnswer) {
        setIsCorrect(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
        } else {
        setIsCorrect(false);
        }
    };

    return (
        <div id="win-page">
            <div id="win-content">
                <h1>Congratulations! You're A Winner!</h1>
                <h2>You've just won <span className="text-blue">{prizeValue}</span> <span className="text-blue">BuyMore Dollars</span></h2>
                <h1>Here's what happens next:</h1>
                <h3><span className="text-red">Skills Testing Question:</span> To claim your prize, answer the question below.</h3>
                <br></br>
                <h3><span className="text-red">Prize Claim:</span> Upon correct answer submission, your prize of {prizeValue} BuyMore Dollars will be securely processed.</h3>
                <br></br>
                <h3><span className="text-red">Prize Deposit:</span> Your winnings will be added to your account associated with the details you’ve provided. Please allow 6 to 8 weeks for processing and deposit of your BuyMore Dollars.</h3>
            </div>
            <div id="math-question">
                <form id="math-form" onSubmit={handleSubmit}>
                    <div id="question">
                        <h4>What is 5 + 5?</h4>
                        <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        />
                    </div>
                    <div>
                        <button id="form-btn" type="submit">Submit</button>
                    </div>
                </form>
                {isCorrect !== null && (
                    <p>{isCorrect ? 'Congratulations! You will now be redirected.' : 'Sorry, your answer is incorrect. Please try again.'}</p>
                )}

                <h1>Thank You for Playing!</h1>
                <p>We are  thrilled to add you to our list of winners . Remember to enjoy BuyMore Dollers and make the most of your winnings, the possibilities are endless!</p>
            </div>
        </div>
    );
}

export default WinnerPage;
