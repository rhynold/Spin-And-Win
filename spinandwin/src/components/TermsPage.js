import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function TermsPage() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        postalCode: '',
        email: '',
        dob: '',
        consentToTerms: false,
    });

    const [formErrors, setFormErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        let newValue = type === 'checkbox' ? checked : value;

        //* regex patterns for form input
        const regexPatterns = {
            firstName: /^[A-Za-z\s]+$/,
            lastName: /^[A-Za-z\s]+$/,
            address: /^[A-Za-z0-9\s.,-]+$/,
            phoneNumber: /^\d{0,10}$/,
            postalCode: /^[a-zA-Z0-9]{0,6}$/,
            email: /.*/,
            dob: /^\d{4}-\d{2}-\d{2}$/,
        };

        //* checks to see if the form input matches the regex pattern
        if (regexPatterns.hasOwnProperty(name)) {
            if (!regexPatterns[name].test(value) && value !== '') {
                newValue = formData[name]; 
            }
        }

        const specialStringRegex = /Free Spin/;

        if (name === 'firstName' && specialStringRegex.test(value)) {
            window.location.href = '/game';
        }

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: newValue
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const dob = new Date(formData.dob);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        
        if (dob.getMonth() > today.getMonth() || (dob.getMonth() === today.getMonth() && dob.getDate() > today.getDate())) {
            age--;
        }

        const minimumAge = 16;

        if (age < minimumAge) {
            setFormErrors({ dob: `You must be at least ${minimumAge} years old to participate` });
            return;
        }

        const errors = {};

        if (!formData.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!formData.address) {
            errors.address = 'Address is required';
        }
        if (!formData.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.dob) {
            errors.dob = 'Date of Birth is required';
        }
        if (!formData.postalCode) {
            errors.postalCode = 'Postal Code is required';
        }
        if (!formData.consentToTerms) {
            errors.consentToTerms = 'Must agree to terms and conditions';
        }

        //* prevents the form to be submitted if there are any errors
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        //* gets existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('formSubmissions')) || [];

        const lastSubmission = existingData.find(submission => submission.email === formData.email);
        if (lastSubmission) {
            const lastSubmissionTime = new Date(lastSubmission.timestamp);
            const timeDifferenceInHours = (today - lastSubmissionTime) / (1000 * 60 * 60);
            if (timeDifferenceInHours < 72) {
                setFormErrors({ email: 'You can play again after 72 hours.' });
                return;
            }
        }

        //* adds a new submission to the local storage and takes a timestamp
        const newData = [
            ...existingData,
            {
                ...formData,
                timestamp: new Date().toLocaleString()
            }
        ];

        //* then updates the local storage with the new data
        localStorage.setItem('formSubmissions', JSON.stringify(newData));
        console.log('Form data saved:', formData);

        setFormData({
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
            dob: '',
            postalCode: '',
            consentToTerms: false
        });
        setFormErrors({});

        window.location.href = '/game';
    };

    return (
        <div>
            <Link to="/">
            <img src={logo} alt="Business Logo" style={{ width: '300px', height: 'auto', }} />
            </Link>
            
            <div className="term-container">
                <div id="title-box">
                    <h2 id="contest-title">Contest Registration Form</h2>
                </div>

            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="label-title">
                    First Name: {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                    </span>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='first name'
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span className="label-title">
                    Last Name: {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                    </span>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='last name'
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span className="label-title">
                    Address: {formErrors.address && <span className="error">{formErrors.address}</span>}
                    </span>
                    <input
                        type="text"
                        name="address"
                        placeholder='address'
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span className="label-title">
                    Postal Code: {formErrors.postalCode && <span className="error">{formErrors.postalCode}</span>}
                    </span>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder='postal code'
                        value={formData.postalCode}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span className="label-title">
                    Email Address: {formErrors.email && <span className="error">{formErrors.email}</span>}
                    </span>
                    <input
                        type="email"
                        name="email"
                        placeholder='email address'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span className="label-title">
                    Date of Birth: {formErrors.dob && <span className="error">{formErrors.dob}</span>}
                    </span>
                    <input
                        type="date"
                        name="dob"
                        placeholder='date of birth'
                        value={formData.dob}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span className="label-title">
                    Phone Number: {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
                    </span>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder='phone number'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="consentToTerms"
                        checked={formData.consentToTerms}
                        onChange={handleInputChange}
                    />
                    <span id="consent">
                        Consent to <a href="#" onClick={toggleModal}>Terms and Conditions</a>
                        <br></br>
                        {formErrors.consentToTerms && <span className="error">{formErrors.consentToTerms}</span>}
                    </span>
                </label>

                {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <h3>Terms and Conditions</h3>
                        <p>Welcome to the BuyMore Dollars Spin to Win Contest! Participation in this contest is subject to the following terms and conditions. By participating, you agree to these terms.  Participants must be at least 16 years of age.  No participant under the age of 16 may enter without a guardian's permission.  Employees of BuyMore Dollars Inc. and their immediate family members are not eligible to participate.  The contest will run for 3 weeks. Participants may spin the wheel once every 72 hours.  No purchase is necessary to enter or win. To enter, complete the form on our website with your first name, last name, address, phone number, email address, and date of birth. Agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and sponsors.  Prizes are awarded as described on the contest page. Winners must answer a skill-testing question to claim their prize. Prizes will be added to winners' accounts within 6 to 8 weeks.  Information collected from participants will be used in accordance with our privacy policy.  BuyMore Dollars Inc. reserves the right to cancel, suspend, or modify the contest if fraud, technical failures, or any other factor beyond BuyMore Dollars Inc.'s reasonable control impairs the integrity of the contest.  By participating, you agree to release and hold harmless BuyMore Dollars Inc. and its affiliates, and their respective officers, directors, employees, and agents from any claim arising out of participation in the contest.</p>
                    </div>
                </div>
                )}
                <button type="submit">Submit and Play</button>
            </form>
            </div>
            
            </div>
            <footer>
                <h1>Copyright 2024 © BuyMore Dollars Inc</h1>
            </footer>
        </div>
    );
}

export default TermsPage;
