import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import {Table} from "@mui/material";

const ServiceRequest = () => {
    const [formState, setFormState] = useState({
        employeeName: "",
        requestPriority: "",
        location: "",
        status: "",
        medicalDevice: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement| HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
        //Handle Submission
        try {
            const response = await axios.post("/api/form", formState);
            console.log("Form data sent successfully:", response.data);
        } catch (error) {
            console.error("Error submitting form data: ", error);
        }
    };

    return isSubmitted ? (
        <>
            <div>
                Form Submitted!
                {/*    add submit another request, and return button*/}
            </div>
        </>
    ):(
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

                    {/*Medical Device Selection*/}
                    <div>
                        <legend>Choose Medical Device:</legend>

                        <div>
                            <input type="checkbox" id="hospitalBeds" name="hospitalBeds"/>
                            <label htmlFor="hospitalBeds">Hospital Bed</label>
                        </div>

                        <div>
                            <input type="checkbox" id="IVpumps" name="IVpumps"/>
                            <label htmlFor="IVpumps">IV pumps</label>
                        </div>

                        <div>
                            <input type="checkbox" id="recliners" name="recliners"/>
                            <label htmlFor="recliners">Recliners</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Ventilators" name="Ventilators"/>
                            <label htmlFor="Ventilators">Ventilators</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Anesthesia" name="Anesthesia"/>
                            <label htmlFor="Anesthesia">Anesthesia Machines</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Pacemakers" name="Pacemakers"/>
                            <label htmlFor="Pacemakers">Pacemakers</label>
                        </div>
                    </div>

                    {/*Request status*/}
                    <div>
                        <label>
                            Status:
                            <select name="status" value={formState.status} onChange={handleChange}>
                                <option value="Unassigned">Unassigned</option>
                                <option value="Assigned">Assigned</option>
                                <option value="InProgress">InProgress</option>
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
                        <th>Medical Device</th>
                        <th>Status</th>
                    </tr>

                    </thead>

                    {/*uses an arry to store the data then displays it*/}
                    {/*<tbody>*/}
                    {/*{isSubmitted.map((data, index) => (*/}
                    {/*    <tr>*/}
                    {/*        <td></td>*/}
                    {/*    </tr>*/}


                    {/*))}*/}

                </Table>
            </div>
        </>
    );
};

export default ServiceRequest;