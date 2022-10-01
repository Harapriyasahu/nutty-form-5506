import React,{ useState } from "react";
import styles from "./taglist.module.css";
import TagShowBox from "./TagListBox";


export const Taglist = () => {
    const [tag, setTag] = useState("");
    const [data, setData] = useState([]);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = tag;
        setData([...data, newData]);
        setTag("");
    };

    const handleChange = (e) => {
        setTag(e.target.value);
    };

    return (
        <div>
         
            <div className="tag">
                <form  style={{ display: "flex"}} onSubmit={handleSubmit} >
                    <input
                        className={styles.intput_div}
                        placeholder="New list name"
                        type="text"
                        name=""
                        id=""
                        value={tag}
                        onChange={handleChange}
                    />
                    <div>
                        <button  type="submit" className={styles.addlistbtn}>
                            Add
                        </button>
                    </div>
                    <div>
                        <button className={styles.cancelbtn}>Cancel</button>
                    </div>
                </form>



                {data.map((item, index) => {
                    return (<>
                        <div>
                            <TagShowBox key={index} id={index} newTag={item} />
                        </div>

                    </>
                    );
                })}
            </div>

        </div>
    );
}