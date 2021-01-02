import React from "react";
import "./Employees.css";

export const Employees = (props) => {
    return(
        <>
            <div className={props.className} data={props.data}>
                <img className="avatar" src={props.data.pic} alt="Avatar  "/>
                <div>
                <h3>{props.data.name}</h3>
                <h5>Email: {props.data.email}</h5>
                <h5>Phone: {props.data.phone}</h5>
                <h5>Skills: {props.data.skills}</h5>
                </div>
            </div>
        </>
    );
};