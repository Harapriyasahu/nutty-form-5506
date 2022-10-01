import React,{ useState } from "react";
import {Taglist} from "./Taglist";
import style from "./tags.module.css";


const Tags = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(true);

  return (
    <>
    
    <div className={style.outer_container_div}>
      <div className={style.conttainner}>
        <div className={style.tags}>
        <h1>Tags</h1>
          <button className={style.addlistbtn} onClick={() => setClick(!click)} >+Add tag list</button>
          <p className={style.addpara_div}>
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          </p>

          <button className={style.add_hidden_btn}>
            {show ? "Show archived tags" : "Hide archived tags"}
          </button>
          {
            click ? 
            <div><Taglist /></div> : null
          }
          <div className="bottombtn">
            <button className={style.savebtn}>Save Setting</button>
            <button className={style.backbtn}>Back Addons list</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Tags;