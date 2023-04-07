import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const { id } = useParams();
    const history = useHistory();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then(res => {
                let employeeData = res.data;
                setEmployee({
                    firstName: employeeData.firstName,
                    lastName: employeeData.lastName,
                    emailId: employeeData.emailId
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const updatedEmployee = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId
        };
        EmployeeService.updateEmployee(updatedEmployee, id)
            .then(res => {
                history.push('/employees');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleCancel = () => {
        history.push('/employees');
    };

    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee</h3>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label> First Name: </label>
                                    <input
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={employee.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Last Name: </label>
                                    <input
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={employee.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Email Id: </label>
                                    <input
                                        placeholder='Email Address'
                                        name='emailId'
                                        className='form-control'
                                        value={employee.emailId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button className='btn btn-success' type='submit'>
                                    Save
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={handleCancel}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComponent;
