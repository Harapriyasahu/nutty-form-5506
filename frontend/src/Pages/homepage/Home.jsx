import React from 'react'
import Navvbar from '../../Components/main_navbar/Navvbar'
import {Employee} from "../../Components/employee/Employee"
import {Review} from "../../Components/review/Review"
import Price from  "../../Components/home_price/Price"
import Accordion from "../../Components/acordion/Accordion"
import Footer from '../../Components/footer/Footer'
import styles from "./home.module.css"
// import Projects from './Projects'
// import Sidenav from '../../Components/sidenavbar/Sidenav'

const Home = () => {
  return (
    <div>
        {/* <Projects/> */}
        <Navvbar/>

        <div className={styles.OuterHome} >
  
<div className={styles.cont}>
        <div className={styles.topcont}>
          <div className={styles.Left} >
            <h1>Free time tracking software</h1>
            <h2>
              Happy to see you again! <br /> Book TimeCamp set-up call
            </h2>
            <ul>
              <li>✓ Showing how TimeCamp works in 15 minutes</li>
              <li>✓ Best practices from 5000+ implementations</li>
              <li>✓ Help with dedicated setup</li>
            </ul>
            <div className={styles.Emildiv} >
              <button>Book a demo</button>
              <span>or</span>
              <button>Go to App</button>
              
            </div>
          </div>
          <div  className={styles.Right}>
            <div  className={styles.Rht}>
              <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
            </div>
            <div  className={styles.RtHead}>
              Adam Wagner, Co-owner and Chief Strategy Officer
            </div>
            <div  className={styles.RtPara}>
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a project’s efficiency and helps to avoid an
              overblown workload for our team.”
            </div>
            <div  className={styles.Logo}
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div  className={styles.GreenBox}>
      <div  className={styles.HeadDiv}>
            <h3>
              Trusted by 18,000 teams from all over the world (and still
              growing!)
            </h3>
          </div>
        <div  className={styles.Row}>
          
          <div className={styles.ImgDiv} >
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
              alt=""
            />
          </div>
          <div className={styles.ImgDiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
              alt=""
            />
          </div>
          <div className={styles.ImgDiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
              alt=""
            />
          </div>
          <div className={styles.ImgDiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
              alt=""
            />
          </div>
          <div className={styles.ImgDiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
              alt=""
            />
          </div>
          <div className={styles.ImgDiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div  className={styles.BookDemo}>
        <div>
          <p>Want to track time in your team ?</p>
          <a href="/">Book a Demo  </a>
        </div>
        <div>
          <h2>
            Try an automatic, easy-to-use time tracker for the entire
            organization!
          </h2>
        </div>
      </div>
      <Employee/>
      <Review/>
      <Price/>
      <Accordion/>
      
</div>


        <Footer/>
        {/* <Sidenav/> */}
    </div>
  )
}

export default Home