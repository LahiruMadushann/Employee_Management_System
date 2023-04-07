import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent() {
    const { id } = useParams();
    const [employees, setEmployees] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployees(res.data);
        });
    }, []);

    return(
        <div style={{marginTop:"3vw"}}>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <table>
                        <tr>
                            <td>Employee First Name </td>
                            <td>: {employees.firstName}</td>
                        </tr>
                        <tr>
                            <td>Employee Last Name </td>
                            <td>: {employees.lastName}</td>
                        </tr>
                        <tr>
                            <td>Employee Email ID </td>
                            <td>: {employees.emailId}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ViewEmployeeComponent;