import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Employee = () => {

    const params = useParams();

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetchEmployee();
    }, [params && params.name]);

    const fetchEmployee = async () => {
        const res = await axios.get(`${process.env.REACT_APP_PUBLIC_API}/${params.name}`);
        setEmployee(res.data[0]);
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className='title'>{employee.first_name + " " + employee.last_name} </h1>
                <div className="field">
                    First Name: <span className="info">{employee.first_name}</span>
                </div>
                <div className="field">
                    Last Name: <span className="info">{employee.last_name}</span>
                </div>
                <div className="field">
                    Date of Birth: <span className="info">{employee.date_of_birth}</span>
                </div>
                <div className="field">
                    Address: <span className="info">{employee.address}</span>
                </div>
                <div className="field">
                    Date of Joining: <span className="info">{employee.date_of_joining}</span>
                </div>
                <div className="field">
                    Salary: <span className="info">{employee.salary}</span>
                </div>
                <div className="field">
                    Designation: <span className="info">{employee.designation}</span>
                </div>
            </div>
        </div>
    )
}

export default Employee;
