import React from "react";

function Button({name}) {
    function handleClick() {
        alert("Clicked");
    }

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}

export default Button;