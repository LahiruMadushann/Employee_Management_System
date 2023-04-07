import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();
        let employee = { firstName, lastName, emailId };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res=>{
            navigate('/employees');
        })
    }


    function cancelEmployee(e) {
        e.preventDefault();
        navigate('/employees');
    }

    function changeFirstNameHandler(event) {
        setFirstName(event.target.value);
    }

    function changeLastNameHandler(event) {
        setLastName(event.target.value);
    }

    function changeEmailHandler(event) {
        setEmailId(event.target.value);
    }

    return (
        <div style={{ marginTop: '1.3vw' }}>
            <div className="container" >
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstname"
                                        className="form-control"
                                        value={firstName}
                                        onChange={changeFirstNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastname"
                                        className="form-control"
                                        value={lastName}
                                        onChange={changeLastNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input
                                        placeholder="Email Address"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={changeEmailHandler}
                                    />
                                </div>
                                <div style={{ marginTop: '1vw' }}>
                                <button className="btn btn-success" onClick={saveEmployee}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={cancelEmployee}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;