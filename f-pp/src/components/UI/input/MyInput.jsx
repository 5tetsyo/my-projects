import React from "react";
import classes from './MyInput.module.css'

//forwardRef для UseRef()
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className= {classes.myInp} {...props}></input>
    )
})

export default MyInput
