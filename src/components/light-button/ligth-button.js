import React from "react";
import './ligth-button.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function LigthButton({children, isActive=false, route='', options={}, click=()=>{}, argument}) {
    const navigate = useNavigate()
    const executeClick = () => {
        click(argument)
        navigate(route, {state:{...options}})
    }
    return (
        <>
        { isActive ?
            <Button class="ligthing-button" onClick={() => {executeClick()}} style={{backgroundColor: "#ff0000"}} variant={'contained'}>{children}</Button>
            :
            <Button class="ligthing-button" onClick={() => {executeClick()}} style={{backgroundColor: "#FF00AC"}} variant={'contained'}>{children}</Button>
        }
        </>
    )
}

export default LigthButton