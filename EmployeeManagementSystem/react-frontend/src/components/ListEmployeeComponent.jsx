import React, { useEffect, useState} from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const addEmployee = () => {
        navigate('/add-employee');
    };

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    return (
        <div>
            <h2 className="text-center">Employee List</h2>
            <div  className="row">
                <button style={{ width: '10vw',margin:'1vw' }} className="btn btn-primary" onClick={addEmployee}>
                    <span style={{fontSize:'1.2vw'}}>Add Employee</span>
                </button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
