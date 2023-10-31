import React from "react";
import './image.css'

function CustomImage({src}) {
    return (
        <>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <img className="profile-image" src={src}></img>
            </div>
        </>
    )
}

export default CustomImage