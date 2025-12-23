import React, { useEffect, useState } from "react";
import { makeRandomUserRequest } from "../api/makeRequestRandom";
import "../styles/RandomUserStyle.css";

interface User {
  fullName: string;
  email: string;
}

const UserCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await makeRandomUserRequest("/api", "get");
      const {
        name: { title, first, last },
        email,
      } = data.results[0];
      const userData: User = {
        fullName: `${title} ${first} ${last}`,
        email,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    storedUser ? setUser(JSON.parse(storedUser)) : fetchUser();
  }, []);

  return (
    <div className="user-card">
      <h2>Random User</h2>
      {loading && (
        <div className="spinner-wrapper">
          <p className="loading"></p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {user && !loading && !error && (
        <>
          <p>
            <strong>Full Name:</strong> {user.fullName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </>
      )}
      <button onClick={fetchUser} disabled={loading}>
        Refresh User
      </button>
    </div>
  );
};

export default UserCard;
