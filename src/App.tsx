import ServiceRequest from "./ServiceRequest.tsx";

function App(){
    return(
        <div>
        <ServiceRequest/>
        </div>
    )

}

export default App;


// import React, { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import axios from "axios";
//
// // Medical device delivery service
// // Name of Employee making request
// // Priority of request (low, med, high, emergency)
// // Loaction of request in building (string value)
// // two input for request: dropdown, and checkbox
// // Status of request (unassigned, assigned, inprogress, closed)
// // submit button
// // list of submitted service requests
//
//
//   //   function App() {
//   // const [count, setCount] = useState(0)
//
// const servicereq: React.FC = () => {
//     const [formState, setFormState] = useState({
//         employeeName: "",
//         requestPriority: "",
//         location: "",
//         status: "",
//     });
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
//         setFormState({
//             ...formState,
//             [event.target.name]: event.target.value,
//         });
//     };
//
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setIsSubmitted(true);
//         //Handle Submission
//         try {
//             const response = await axios.post("/api/form", formState);
//             console.log("Form data sent successfully:", response.data);
//         } catch (error) {
//             console.error("Error submitting form data: ", error);
//         }
//     };
// };
//
//   return isSubmitted ? (
//       <div>
//           Form Submitted!
//       {/*    add submit another request, and return button*/}
//       </div>
//       ):(
//     <>
//         <div>
//             <h1> Enter Your Service Request </h1>
//             <form>
//                 {/*Ask for Name of Employee*/}
//                 <div>
//                     <label>Name of the employee</label>
//                     <input type={"text"}
//                            name={"Employee Name"}
//                            placeholder={"Name"}
//                            value={formState.employeeName}
//                            onChange={handleChange}
//                            className={"form-control"}
//                            required/>
//                 </div>
//             {/* Request Priority*/}
//                 <div>
//                     <label> Request Priority </label>
//                     <input
//                     type = "text"
//                     name={"requestPriority"}
//                     placeholder={"Priority"}
//                     value={formState.requestPriority}
//                     onChange={handleChange}
//                     className={"form-control"}
//                     required/>
//                 </div>
//             </form>
//         </div>
//         {/*<div>*/}
//         {/*  <a href="https://vitejs.dev" target="_blank">*/}
//         {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
//       {/*  </a>*/}
//       {/*  <a href="https://react.dev" target="_blank">*/}
//       {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
//       {/*  </a>*/}
//       {/*</div>*/}
//       {/*<h1>Vite + React</h1>*/}
//       {/*<div className="card">*/}
//       {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
//       {/*    count is {count}*/}
//       {/*  </button>*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
//       {/*  </p>*/}
//       {/*</div>*/}
//       {/*<p className="read-the-docs">*/}
//       {/*  Click on the Vite and React logos to learn more*/}
//       {/*</p>*/}
//     </>
//   );
// };
//
// export default servicereq;
