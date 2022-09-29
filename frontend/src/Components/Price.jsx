import React from "react";
import styles from "../styles/price.module.css";



const Pricing = () => {
  return (
    <div>
      <div className={styles.Topp}>
        <h3>PRICING</h3>
        <h1>Your time cost more</h1>
        <p>
          Use free forever plan or subscribe to a paid plan to get more
          features!
        </p>
      </div>

      <div className={styles.Outa}>
        <div className={styles.Inna} >
          <div className={styles.Free}>
            <div className={styles.Firstt}>
              <div>
                <h1
                  style={{
                    color: "#25cf60",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Free
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  Free forever plan
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
                Measure on which activities you spend time while working
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",                               
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                  // margin:"15px 0 15px -25px"
                  margin:"auto",
                  marginTop:"15px",
                  marginBottom:"15px"
                }}
              >
                Join for free
              </button>
              <ul style={{fontSize:"15px",textAlign:"left",marginLeft:"20px",fontWeight:"400"}}>
                <li>Unlimited Users</li>
                <li style={{fontWeight: "bold"}}>Unlimited Projects & tasks</li>
                <li>Desktop & Mobile app</li>
              </ul>
            </div>
          </div>

          <div className={styles.Free}>
            <div className={styles.Firstt}>
              <div>
                
                <h1
                  style={{
                    color: "#25cf60",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  BASIC
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  $ 6.3
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  user/mo
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Be more transparent and gain customers' trust
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",
                  // margin:"15px 0 15px -25px",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                  margin:"auto",
                  marginTop:"15px",
                  marginBottom:"15px"
                }}
              >
                Start your free trial
              </button>
              <ul style={{fontSize:"15px",textAlign:"left",marginLeft:"20px",fontWeight:"400"}}>
                <li>Time rounding</li>
                <li>Custom report</li>
                <li>Hide time from users</li>
                <li>Management roles</li>
                <li>Team productivity tracking</li>
                <li>XLS reports export</li>
                <li>Unlimited integrations</li>
                <li>Billable time & budgeting</li>
              </ul>
            </div>
          </div >

          <div className={styles.Free} style={{backgroundColor:"#25cf60"}}>
            <div className={styles.Firstt}>
            
              <div>
                
                <h1
                  style={{
                    color: "white",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  PRO
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  $ 9
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid white",
                  }}
                >
                  user/mo
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Get full control over your business
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "white",
                  // margin:"15px 0 15px -25px",
                  borderRadius: "50px",
                  color: "#25cf60",
                  fontWeight: "bold",
                  margin:"auto",
                  marginTop:"15px",
                  marginBottom:"15px"
                }}
              >
                Start your free trial
              </button>
              <p style={{color: "white", 
              fontSize: "17px",fontWeight:"bold"}}>Everything in Basic plus</p>
              <ul style={{color: "white",fontSize:"15px",textAlign:"left",marginLeft:"20px",fontWeight:"400"}}>
                <li>Custom user roles</li>
                <li>Billing rates</li>
                <li>Invoicing</li>
                <li>Timesheet approvals</li>
                <li>Screenshots</li>
                <li>SSO login</li>
                <li>2-factor authentication</li>
              </ul>
            
            </div>
          </div>

          <div className={styles.Free}>
            <div className={styles.Firstt}>
            <div>
                
                <h1
                  style={{
                    color: "#25cf60",                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                 ENTERPRISE
                </h1>
                <h1
                  style={{   
                    fontSize:"30px" ,                                
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Let's discuss
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    borderBottom: "1px solid #25cf60",
                  }}
                >
                  
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
              Customize TimeCamp to your custom needs
              </p>
              <button
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#25cf60",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "bold",
                  margin:"auto",
                  marginTop:"15px",
                  marginBottom:"15px"
                }}
              >
                Contact us
              </button>
              <p style={{
              fontSize: "17px",fontWeight:"bold"}}>Everything in Pro plus</p>
              <ul style={{fontSize:"15px",textAlign:"left",marginLeft:"20px",fontWeight:"400"}}>
                <li>Personalized training</li>
                <li>Private cloud implimentation</li>
                <li>Self hosted server</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
