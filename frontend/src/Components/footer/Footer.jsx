import React from 'react'
import styles from "./footer.module.css";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className={styles.outerFooter}>
                <div className={styles.suport}>
                    <ul>
                        <h3>Product</h3>
                        <p>Features</p>
                        <p>Integrations</p>
                        <p>Applications</p>
                        <p>Product updates</p>
                        <p>Customer Stories</p>
                        <p>Self-hosting</p>
                    </ul>
                    <ul>
                        <h3>Support</h3>
                        <p>Support</p>
                        <p>Knowledge base</p>
                        <p>Developers API</p>
                        <p>Server Status</p>
                    </ul>
                    <ul>
                        <h3>Integrations</h3>
                        <p>Trello</p>
                        <p>Monday.com</p>
                        <p>Google Calendar</p>
                        <p>Asana</p>
                        <p>Jira</p>
                        <p>All integrations</p>
                    </ul>
                    <ul>
                        <h3>Resources</h3>
                        <p>Contact</p>
                        <p>HeySpace</p>
                        <p>About us</p>
                        <p>Press</p>
                        <p>Become a Partner</p>
                    </ul>
                    <ul>
                        <h3>Calculators</h3>
                        <p>Profit Margin Calculator</p>
                        <p>Online Timer</p>
                        <p>Overtime Calculator</p>
                        <p>ROI Calculator</p>
                        <p>Time Card Calculator</p>
                    </ul>
                    <ul>
                        <h3>Legal</h3>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Security</p>
                    </ul>

                </div >

                <div className={styles.copyright}>
                    <div className={styles.copyicon}>
                    <FaFacebookF/>
                    <FaLinkedinIn/>
                    <BsTwitter/>
                    </div>
                    
                    <p>Copyright © 2022 TimeCamp. Inc.</p>
                    <p>We use cookies. Click here to learn more</p>
                </div>
            </div>
        </>
    )
}

export default Footer;