import { Table } from "components/Table";
import React from "react";
import TempPage from "./pages/TempPage";
import { globalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div>
      {globalStyles}
      <TempPage /> {/* @Note 모달 테스트용 임시 컴포넌트*/}
      <Table />
    </div>
  );
}

export default App;
