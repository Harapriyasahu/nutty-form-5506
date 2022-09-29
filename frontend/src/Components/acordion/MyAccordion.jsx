import React, { useState }from 'react'
import styled from "styled-components"


const MyHead= styled.div`
display:flex;
height:80px;
font-size:20px;
font-weight:600;
border-top:1px solid grey;
padding-top: 15px;
cursor:pointer;

& h3{
  margin-left:15px;
}

& h3:hover{
  text-decoration: underline;
}
`

const MyAccordion = ({ques,ans}) => {
    const [show, setShow]= useState(false)
  return (
    <>
    <MyHead>
        <p onClick={() =>setShow(!show)}>{show? "➖" :"➕"}</p>
        <h3 onClick={() =>setShow(!show)}>{ques}</h3>
    </MyHead>
    {show && <p>{ans}</p>}
    </>
  )
}

export default MyAccordion;