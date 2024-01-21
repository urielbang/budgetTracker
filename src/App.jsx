import NavBar from "./components/NavBar";
import Main from "./components/Main.jsx";
import Auth from "./pages/Auth.jsx";
import Budget from "./pages/Budget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { db } from "./config/fireBaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  console.log(db);
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    //! get data
    onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return doc.data();
      });

      setUser(users);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/budget" element={<Budget user={user} />} />
        <Route path="/login" element={<Auth setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
