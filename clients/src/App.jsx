import "./App.css";
import LandingPage from "./components/Landing/LandingPage.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <LandingPage />
    </>
  );
}

export default App;
