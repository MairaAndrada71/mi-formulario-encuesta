import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    role: "",
    recommendation: "1",
    feature: "",
    improvements: [],
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        improvements: checked
          ? [...prev.improvements, value]
          : prev.improvements.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Gracias ${formData.name}, tu encuesta fue enviada con éxito.`);
    console.log("Datos enviados:", formData);
    setFormData({
      name: "",
      email: "",
      age: "",
      role: "",
      recommendation: "1",
      feature: "",
      improvements: [],
      comments: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="survey-form">
        <h1 id="title">Survey Form</h1>
        <p id="description">
          Please complete this form to help us improve our services. Your
          responses will be used for statistical purposes only.
        </p>

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        {/* Age */}
        <label>
          Age <small>(optional)</small>
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="10"
          max="99"
          placeholder="Age"
        />

        {/* Role */}
        <label>Which option best describes your current role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select current role</option>
          <option value="student">Student</option>
          <option value="full-time-job">Full Time Job</option>
          <option value="learner">Full Time Learner</option>
          <option value="no-answer">Prefer not to say</option>
          <option value="other">Other</option>
        </select>

        {/* Recommendation */}
        <label>Would you recommend freeCodeCamp to a friend?</label>
        <label>
          <input
            type="radio"
            name="recommendation"
            value="1"
            checked={formData.recommendation === "1"}
            onChange={handleChange}
          />{" "}
          Definitely
        </label>
        <label>
          <input
            type="radio"
            name="recommendation"
            value="2"
            checked={formData.recommendation === "2"}
            onChange={handleChange}
          />{" "}
          Maybe
        </label>
        <label>
          <input
            type="radio"
            name="recommendation"
            value="3"
            checked={formData.recommendation === "3"}
            onChange={handleChange}
          />{" "}
          Not sure
        </label>

        {/* Feature */}
        <label>What is your favorite feature of freeCodeCamp?</label>
        <select name="feature" value={formData.feature} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="challenges">Challenges</option>
          <option value="projects">Projects</option>
          <option value="community">Community</option>
          <option value="open-source">Open Source</option>
        </select>

        {/* Improvements */}
        <label>
          What would you like to see improved?{" "}
          <small>(Check all that apply)</small>
        </label>
        <div className="checkbox-group">
          {[
            "front-end-projects",
            "back-end-projects",
            "data-visualization",
            "challenges",
            "open-source-community",
            "gitter-help-rooms",
            "videos",
            "city-meetups",
            "wiki",
            "forum",
            "additional-courses",
          ].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name="improvements"
                value={item}
                checked={formData.improvements.includes(item)}
                onChange={handleChange}
              />{" "}
              {item.replace(/-/g, " ")}
            </label>
          ))}
        </div>

        {/* Comments */}
        <label>Any comments or suggestions?</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          placeholder="Enter your comment here..."
        ></textarea>

        {/* Submit */}
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}


