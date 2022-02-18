import MainPage from "pages/MainPage";
import React from "react";
import { globalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div>
      {globalStyles}
      <MainPage />
    </div>
  );
}

export default App;
