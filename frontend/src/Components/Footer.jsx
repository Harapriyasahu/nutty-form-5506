import React from 'react'
import styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.outerFooter}>
                <div className={styles.suport}>
                    <div>
                    <h1>Product</h1>
                        <p>Features</p>
                        <p>Integrations</p>
                        <p>Applications</p>
                        <p>Product updates</p>
                        <p>Customer Stories</p>
                        <p>Self-hosting</p>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <p>Support</p>
                        <p>Knowledge base</p>
                        <p>Developers API</p>
                        <p>Server Status</p>
                    </div>
                    <div>
                        <h1>Integrations</h1>
                        <p>Trello</p>
                        <p>Monday.com</p>
                        <p>Google Calendar</p>
                        <p>Asana</p>
                        <p>Jira</p>
                        <p>All integrations</p>
                    </div>
                    <div>
                        <h1>Resources</h1>
                        <p>Contact</p>
                        <p>HeySpace</p>
                        <p>About us</p>
                        <p>Press</p>
                        <p>Become a Partner</p>
                    </div>
                    <div>
                        <h1>Calculators</h1>
                        <p>Profit Margin Calculator</p>
                        <p>Online Timer</p>
                        <p>Overtime Calculator</p>
                        <p>ROI Calculator</p>
                        <p>Time Card Calculator</p>
                    </div>
                    <div>
                        <h1>Legal</h1>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Security</p>
                    </div>

                </div >

                <div className={styles.copyright}>

                </div>
            </div>
        </>
    )
}

export default Footer;