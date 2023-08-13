import { useState, useEffect } from "react";
import BasicAppBar from "./components/BasicAppBar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  // useState returns an array with exactly two items. They first is the property we are adding to the state.
  // The second is a setter function to manipulate that property.
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Rendered App");
  });

  return (
    <>
      <BasicAppBar />
      {/* If loggedIn property on State is true, then render a welcome message, otherwise, render the login component. */}
      {loggedIn ? <Dashboard /> : <LoginForm setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default App;
