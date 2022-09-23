import TextEditor from "./TextEditor";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidv4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
