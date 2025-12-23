import React from "react";
import UserCard from "./components/UserCards";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <header className="nav-header">
        <h1>RandomUser</h1>
      </header>

      <main>
        <UserCard />
      </main>
    </>
  );
};

export default App;
