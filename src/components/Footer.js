import React from "react";

const Footer = () =>{
    return(
        <footer class="footer p-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-3">
                        <h2>Momentum Solutions</h2>
                        <p className="ch">&copy; 09-01-2024 Ecommerce.</p>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-3">
                        <div className="contact-us">
                            <input type="email" placeholder="Enter Email"/>
                            <input type="number" placeholder="Enter Phone"/>
                        </div>
                        <button>Subscrib</button>
                        <p>
                        By providing your phone number and/or email and clicking “SUBSCRIBE” above, you agree to receive recurring automated promotional messages from Burrow at the phone number and/or email used when signing up. Consent is not a condition of purchase. Msg frequency may vary. Text Msg & data rates may apply. Reply HELP for help and STOP to unsubscribe from texts.
                        See <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;