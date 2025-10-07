import { useState } from "react";
import "./signup.css"; // styling ke liye

export default function Signup() {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idProof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${role}!`);
    console.log(formData);
    // Yaha blockchain ya API call daal sakte ho
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <label>Select Role:</label>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">--Select--</option>
        <option value="Customer">Customer</option>
        <option value="Bank">Bank</option>
      </select>

      <form onSubmit={handleSubmit}>
        {role === "Customer" && (
          <>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <label for="idproof">Aadhar Proof</label>
            <input type="file" name="idProof" onChange={handleFileChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          </>
        )}

        {role === "Bank" && (
          <>
            <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} required />
            <input type="text" name="ifsc" placeholder="IFSC Code" onChange={handleChange} required />
            <input type="text" name="branchCode" placeholder="Branch Code" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Contact Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
