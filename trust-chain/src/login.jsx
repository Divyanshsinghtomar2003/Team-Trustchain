import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // same style use kar lo, ya Login.css bna sakti ho

export default function Login() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Mock login validation (temporary)
    if (role === "Customer" && password === "cust123") {
      navigate("/customer-dashboard");
    } else if (role === "Bank" && password === "bank123") {
      navigate("/bank-dashboard");
    } else if (role === "RBI" && password === "rbi123") {
      navigate("/rbi-dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>

      <label>Select Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">--Select Role--</option>
        <option value="Customer">Customer</option>
        <option value="Bank">Bank</option>
        <option value="RBI">RBI</option>
      </select>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
