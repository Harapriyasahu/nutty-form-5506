import React from "react";
import styles from "../styles/review.module.css";


export const Review = () => {
  return (
    <div>
      <div className={styles.Head}>
        <p>REVIEWS</p>
        <h2>
          Time tracking software for businesses across all industries and sizes
        </h2>
      </div>
      <div className={styles.Heading}>
        <div className={styles.P}>Marketing agencies</div>
        <p>IT & Software houses</p>
        <p>Designers</p>
        <p>Accounting</p>
      </div>

      <div className={styles.Reviews}>
        <div>
          <p>
            We've tried a lot of tools and the integration, flexibility and fast
            array of features that come with TimeCamp have really made this tool
            stand out and pay for itself. It connects to a number of tools we
            use like our in house project management tools, our client's project
            management tools and our accounting software.
          </p>
          <br />
          <p>
            <b>Jakes</b>
          </p>
        </div>
        <div>
          <p>
            The primary reason I chose TimeCamp was the direct
            timekeeping-to-invoicing function, which has been a tremendous
            timesaver. I love the way it shows me what I'm spending my time on
            even when I'm not logging billable hours.
          </p>
          <br />
          <p>
            <b>Kathryn</b>
          </p>
        </div>
        <div className={styles.Spl}>
          <p>
            Great asset to managing our marketing agency. We love the ease it
            takes to input times. We never have to worry about time record
            keeping because TimeCamp does it so accurately. It makes creating
            our invoices at the end of each month so much easier.
          </p>
          <br />
          <p>
            Review from <b>GetApp.com</b>
          </p>
        </div>
        <div>
          <p>
            Our business problem was simple at any given time we have 20 or so
            contractors working on a handful of different projects and we needed
            to be scientific about knowing how many of whose hours were being
            spent on which project. TimeCamp solved this problem well and
            simply.
          </p>
          <br />
          <p>
            <b>Noah</b>
          </p>
        </div>
      </div>

      <div className={styles.IMG}>
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png" alt="" />
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png" alt="" />
      </div>
    </div>
  );
};