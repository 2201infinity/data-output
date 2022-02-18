import { Button } from "@mui/material";
import React from "react";
import TempPage from "./pages/TempPage";
import { globalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div>
      {globalStyles}
      <TempPage /> {/* @Note 모달 테스트용 임시 컴포넌트*/}
    </div>
  );
}

export default App;
