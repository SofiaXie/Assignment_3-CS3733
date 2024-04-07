import React, { useState } from 'react';
import './App.css';
// import axios from "axios";
import {Table} from "@mui/material";
import "./ServiceRequest.css";

interface ServiceRequest {
    employeeName: string,
    requestPriority: string,
    location: string,
    urgency: boolean,
    medicalDevice: string,
    status: string,
}

const App: React.FC = () => {
    const [serviceRequests, setServiceRequests]
        = useState<ServiceRequest[]>([]);
    const [formState, setFormState]
        = useState<ServiceRequest>({
        employeeName: '',
        requestPriority: '',
        location: '',
        urgency: false,
        medicalDevice: '',
        status: 'Unassigned',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setServiceRequests([...serviceRequests, formState]);
        setFormState({
            employeeName: '',
            requestPriority: '',
            location: '',
            urgency: false,
            medicalDevice: '',
            status: 'Unassigned',
        });
    };

    return (
        <>
            <div>
                <h1> Enter Your Service Request </h1>
                <form onSubmit={handleSubmit}>

                    {/*Ask for Name of Employee*/}
                    <div>
                        <label>Name of the employee</label>
                        <input type="text"
                               name="employeeName"
                               placeholder={"Name"}
                               value={formState.employeeName}
                               onChange={handleChange}
                               className={"form-control"}
                               required/>
                    </div>

                    {/* Request Priority*/}
                    <div>
                        <label>
                            Priority:
                            <select name="requestPriority" value={formState.requestPriority} onChange={handleChange}
                                    className={"form-control"} required>
                                <option value="">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Emergency">Emergency</option>
                            </select>
                        </label>
                    </div>

                    {/*Location in Building*/}
                    <div>
                        <label>
                            Location:
                            <input type="text" name="location" value={formState.location} onChange={handleChange}/>
                        </label>
                    </div>

                    {/*Urgency*/}
                    <div>
                        <legend>Is this request urgent?</legend>
                        <label>
                            <input type="checkbox" name="urgency" onChange={handleChange}/>
                            EXTREMELY
                        </label>
                    </div>

                    {/*Medical Device Selection*/}
                    <div>
                        <legend>Choose Medical Device:</legend>

                        <div>
                            <input type="radio" id="hospitalBeds" name="medicalDevice" value="Hospital Beds"
                                    onChange={handleChange}/>
                            <label htmlFor="hospitalBeds">Hospital Bed</label>
                        </div>

                        <div>
                            <input type="radio" id="IVpumps" name="medicalDevice" value="IV Pumps"
                                   onChange={handleChange}/>
                            <label htmlFor="IVpumps">IV pumps</label>
                        </div>

                        <div>
                            <input type="radio" id="recliners" name="medicalDevice" value="Recliners"
                                   onChange={handleChange}/>
                            <label htmlFor="recliners">Recliners</label>
                        </div>

                        <div>
                            <input type="radio" id="Ventilators" name="medicalDevice" value="Ventilators"
                                   onChange={handleChange}/>
                            <label htmlFor="Ventilators">Ventilators</label>
                        </div>

                        <div>
                            <input type="radio" id="Anesthesia" name="medicalDevice" value="Anesthesia"
                                  onChange={handleChange}/>
                            <label htmlFor="Anesthesia">Anesthesia Machines</label>
                        </div>

                        <div>
                            <input type="radio" id="pacemakers" name="medicalDevice" value="Pacemakers"
                                   onChange={handleChange}/>
                            <label htmlFor="pacemakers">Pacemakers</label>
                        </div>
                    </div>


                    {/*Request status*/}
                    <div>
                        <label>
                            Status:
                            <select name="status" value={formState.status} onChange={handleChange}>
                                <option value="Unassigned">Unassigned</option>
                                <option value="Assigned">Assigned</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </label>
                    </div>

                    {/*Submit Button*/}
                    <div>
                        <button className={"actionButton"} type="submit">
                            Send Request
                        </button>
                    </div>

                </form>
            </div>

            {/* Display Table*/}
            <div>
                <Table stickyHeader aria-label="sticky table" className={"contentTable"}>
                    <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Request Priority</th>
                        <th>Location</th>
                        <th>Urgency</th>
                        <th>Medical Device</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {serviceRequests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.employeeName}</td>
                            <td>{request.requestPriority}</td>
                            <td>{request.location}</td>
                            <td>{request.urgency ? 'Yes' : 'No'}</td>
                            <td>{request.medicalDevice}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

// export default ServiceRequest;
export default App;