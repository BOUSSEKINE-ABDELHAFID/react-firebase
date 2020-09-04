import React from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <div className="App">
      <h1>Image Gellery</h1>
      <UploadForm/>
      <ImageGrid />
    </div>
  );
}

export default App;
