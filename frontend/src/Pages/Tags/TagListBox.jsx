import React from "react";

const TagShowBox = ({ newTag }) => {
  console.log("newTag", newTag);

  return (
  
      <div
        style={{
          height: "60px",
          minWidth: "300px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "10px",
          marginRight: "100px",
          marginTop: "8px",
        
        }}
      >
          <td>   <p
          style={{
            padding: "8px 14px 8px 14px",
          }}
        >
          {newTag.name}
        </p> </td>
        <td>   <p
          style={{
            padding: "8px 14px 8px 14px",
          }}
        >
          {newTag.name}
        </p> </td>
        <td>   <p
          style={{
            padding: "8px 14px 8px 14px",
          }}
        >
          {newTag.name}
        </p> </td>
        <td>   <p
          style={{
            padding: "8px 14px 8px 14px",
          }}
        >
          {newTag.name}
        </p> </td>
      
      </div>
   
  );
};

export default TagShowBox;
