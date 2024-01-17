import NavBar from "./components/NavBar";
import Main from "./components/Main.jsx";
import Auth from "./pages/Auth.jsx";
import Budget from "./pages/Budget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    setUser({ email: "uri32655@gmail.com", name });
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
