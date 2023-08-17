import React from "react";

const Button = ({value, sendInviteClickButton}) => {
    return (
        <button onClick={sendInviteClickButton} className="button-invite">{value}</button>
    )
}
export default Button