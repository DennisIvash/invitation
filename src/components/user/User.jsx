import React from "react";

const User = (props) => {
    return (
        <li>
            <div className="user">
              <img className="user-avatar" src={props.avatar} alt="" />
              <div className="user-info">
                <h2 className="user-name">{props.first_name} {props.last_name}</h2>
                <p className="user-email">{props.email}</p>
              </div>
            </div>
            <img onClick={() => props.onClickInvite(props.id)} className="user-plus" src={`https://www.svgrepo.com/show/${props.isInvited ? '532960/minus.svg' : '532994/plus.svg'}`} alt="" />
          </li>
    )
}

export default User

// "https://www.svgrepo.com/show/532994/plus.svg"
// https://www.svgrepo.com/show/532960/minus.svg