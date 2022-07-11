import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Toaster } from "../../common/toaster";
import { setWinner } from "../../store/commonStore/actionCreator";

function NameComponet({items,selectedItem}){

    const [check,setCheck]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        setCheck(false)
        const timer = setTimeout(() => {
            setCheck(true)
            Toaster(items[selectedItem].name+"win")
            dispatch(setWinner(items[selectedItem]))
          }, 10000);
          return () => clearTimeout(timer);
    },[selectedItem])
return(
    <>
     <div style={{height:"0rem",fontSize:"2rem"}}>
          {items.map((item, index) => (
            <div >
            {(selectedItem === index)&& check ? "Win " + item.name : ""}
            </div>
          ))}
     </div>
    </>
)
}

export default NameComponet