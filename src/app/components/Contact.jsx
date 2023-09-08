// import { useClient } from 'react';
// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [formStatus, setFormStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace this with your form submission logic (e.g., sending to an API)
//       // For demonstration purposes, we'll simply display the form data in the console
//       console.log("Form Data:", formData);

//       // You can add your email sending logic here, like using EmailJS or an API call

//       setFormStatus("success"); // Set a success status
//     } catch (error) {
//       console.error("Error:", error);
//       setFormStatus("error"); // Set an error status
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <h1 className="text-2xl font-bold text-slate-600 mb-4">Contact Me</h1>
//       <p className="text-slate-600 mb-8">
//         If you have any questions or would like to get in touch, please fill out
//         the form below.
//       </p>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name" className="block text-slate-600 font-semibold">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-slate-500"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-slate-600 font-semibold">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-slate-500"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="subject"
//             className="block text-slate-600 font-semibold"
//           >
//             Subject:
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-slate-500"
//             required
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="message"
//             className="block text-slate-600 font-semibold"
//           >
//             Message:
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-slate-500"
//             required
//           ></textarea>
//         </div>

//         {formStatus === "success" && (
//           <p className="text-green-600">Form submitted successfully!</p>
//         )}

//         {formStatus === "error" && (
//           <p className="text-red-600">
//             An error occurred. Please try again later.
//           </p>
//         )}

//         <button
//           type="submit"
//           className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-slate-300"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
