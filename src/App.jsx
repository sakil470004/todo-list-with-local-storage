
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/Todo/AddTodo";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div data-theme="light" className=" h-screen">
      <Navbar />
      <AddTodo />
      {/* for toast */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
