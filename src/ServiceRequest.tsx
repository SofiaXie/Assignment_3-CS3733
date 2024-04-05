import React, { useState } from 'react';
import './App.css';
import axios from "axios";

const ServiceRequest = () => {
    const [formState, setFormState] = useState({
        employeeName: "",
        requestPriority: "",
        location: "",
        status: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                        <label> Request Priority </label>
                        <input
                            type="text"
                            name={"requestPriority"}
                            placeholder={"Priority"}
                            value={formState.requestPriority}
                            onChange={handleChange}
                            className={"form-control"}
                            required/>
                    </div>
                    <div>
                        <button type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>

        {/* Display Table*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Request Priority</th>
                            <th>Location</th>
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

                </table>
            </div>
        </>
    );
};

export default ServiceRequest;