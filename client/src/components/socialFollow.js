import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    FacebookMessengerShareButton,
    ViberShareButton,
    WhatsappShareButton
  } from "react-share";

class SocialFollow extends React.Component {

    render() {
    
        return (
            <div className="social-container">
            <h2>Follow us on Social Media</h2>
            
            <a href="https://www.lifehack.org/articles/productivity/how-organize-your-life-10-habits-really-organized-people.html" className="facebook" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />

            <a href="https://www.lifehack.org/articles/productivity/how-organize-your-life-10-habits-really-organized-people.html" className="twitter" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />

            <a href="https://www.lifehack.org/articles/productivity/how-organize-your-life-10-habits-really-organized-people.html" />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />

            <a href="https://www.lifehack.org/articles/productivity/how-organize-your-life-10-habits-really-organized-people.html" className="instagram"/>
            <FontAwesomeIcon icon={faInstagram} size="2x" />


            <FacebookMessengerShareButton />

            </div>
        );
    }
}

export default SocialFollow;