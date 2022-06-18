import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Components/Login";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import DataStored from "./Components/DataStored";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/optionchain" element={<DataStored />} />
        <Route
          path="/login"
          element={<h1>hello you logined successfully</h1>}
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
