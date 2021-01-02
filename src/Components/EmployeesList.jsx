import React, { useState } from "react";
import { Employees } from "./Employees";
import { Button } from "./Button";
import logo from "../im/t9HFQvX.png";
import Pict from "../im/ebHfuth.png"
import avatar from "../im/Q9qFt3m.png";
import avat from "../im/TUhCrsY.png";
import "./EmployeesList.css"


export const EmployeesList = () => {
    const Employess = [{
        name: "Alexander Granlund",
        email: "Alexander@gmail.com",
        phone: "070 - 12 34 567",
        skills: "dude",
        pic: logo
    },
    {
        name: "Rut Olsson",
        email: "rut@gmail.com",
        phone: "070 - 66 66 666",
        skills: "dude",
        pic: Pict
    },
    {
        name: "Åsa Lilja",
        email: "åsa@gmail.com",
        phone: "070 - 99 99 999",
        skills: "dude",
        pic: avat
    }
    ];

    const [data, setData] = useState(Employess);

    const extraEmployee = {
        name: "Gregor Davids",
        email: "Gregor@gmail.com",
        phone: "070 - 44 44 444",
        skills: "dude",
        pic: avatar
    }

    const newEmployee = () => setData(function(prevState) {
        return [...prevState, extraEmployee];
    });

    return(
        <>
            <h2>Employee List</h2>
            <Button onClick={newEmployee}>Add new employee</Button>
                <ul >
                    {
                        data.map((data) =>
                            <Employees className="EmployeeDiv" key={data.name} data={data}></Employees>
                        )
                    }    
                </ul>
        </>
    );
};