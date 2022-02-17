import { Button } from "@mui/material";
import React from "react";
import { globalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div>
      {globalStyles}
      <Button variant="contained">Hello</Button>
    </div>
  );
}

export default App;
