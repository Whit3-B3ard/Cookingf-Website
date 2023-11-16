import { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    issue: "",
    email: "",
    contactNo: "",
    query: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  const handleSubmit = (e) => {
    localStorage.setItem("feedback", JSON.stringify(feedback));

    setSubmissionMessage("Feedback submitted successfully! Redirecting to home page");

    // Optional: Redirect to the home page after a successful submission
    // You can use the react-router-dom library for navigation or any other method
    // Example using window.location.href:
    setTimeout(() => {
      window.location.href = "/"; // Change the path accordingly
    }, 2000); // Redirect after 2 seconds

    setFeedback({
      issue: "",
      email: "",
      contactNo: "",
      query: "",
    });
  };


  return (
    <div className="absolute mt-52 ml-48 w-80 float-left border-2 p-2 rounded-xl shadow-xl text-xl bg-gradient-to-r from-cyan-800 to-indigo-600">
      <form>
        <p className="text-2xl text-white">Feedback & Queries</p>
        <div>
          <label className="text-sm text-white">Select Issue*</label>
          <br></br>
          <select
            className="bg-gray-50 border border-gray-300 
                                        text-gray-600 text-sm rounded-lg 
                                        focus:border-blue-500 w-full p-2.5"
            name="issue"
            onChange={handleInputChange}
            value={feedback.issue}
          >
            <option value="Feedback">-- Select Your Query --</option>
            <option value="Feedback">Feedback</option>
            <option value="Feedback">Course Related Queries</option>
            <option value="Feedback">Payment Related Issue</option>
            <option value="Feedback">Hiring Related Queries</option>
            <option value="Feedback">Advertise With Us</option>
          </select>
          <br></br>
          <label className="text-sm text-white">Email Address*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
            type="email"
            name="email" // Add name attribute
            placeholder="Your email please"
            required
            onChange={handleInputChange}
            value={feedback.email}
          />
          <br></br>
          <label className="text-sm  text-white">Contact No.</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
            type="text"
            name="contactNo" // Add name attribute
            placeholder="Contact number"
            onChange={handleInputChange}
            value={feedback.contactNo}
          />
          <br></br>
          <label className="text-sm  text-white">Drop Your Query</label>
          <br></br>
          <textarea
            className="bg-gray-50 border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-blue-500 
                                            w-full p-2.5"
            rows="4"
            cols="25"
            maxLength="300"
            name="query" // Add name attribute
            placeholder="Max Allowed Characters: 300"
            onChange={handleInputChange}
            value={feedback.query}
          ></textarea>
          <br></br>
          <button
            className="bg-blue-500 hover:bg-blue-700 
                                        text-white font-bold 
                                        py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {submissionMessage && (
        <div className="mt-2 text-green-500">{submissionMessage}</div>
      )}
    </div>
  );
}
