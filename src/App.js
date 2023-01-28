import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3A3B3C";
      showAlert("Dark mode enabled!", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Try Textutils - Word counter, Character counter, Remove extra spaces"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
