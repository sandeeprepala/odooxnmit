import React from "react";
import api from "../../api/axios.js";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData || !userData.accessToken) {
        alert("No user logged in");
        return;
      }

      const token = userData.accessToken;

      await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear user from localStorage
      localStorage.removeItem("user");
      alert("Logged out successfully ✅");
      window.location.href = "/login"; // redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Logout</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
