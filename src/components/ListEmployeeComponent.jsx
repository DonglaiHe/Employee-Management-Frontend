import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
            console.log(res.data)
        })
    }

    addEmployee() {
        this.props.history.push('createEmployees')
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee </button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th scope="col">Employee First Name</th>
                                <th scope="col">Employee Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr>
                                        <td> { employee.firstName } </td>
                                        <td> { employee.lastName } </td>
                                        <td> { employee.email } </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;