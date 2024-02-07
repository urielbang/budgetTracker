import NavBar from "./components/NavBar";
import HomePage from "./components/Main.jsx";
import Auth from "./pages/Auth.jsx";
import Budget from "./pages/Budget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser({ email: user.email, id: user.uid });

        const uid = user.uid;
        // ...
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/budget" element={<Budget user={user} />} />
        <Route path="/login" element={<Auth setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
