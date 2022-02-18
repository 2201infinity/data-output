import { Button } from "@mui/material";
import OptionSettingModal from "components/OptionSettingModal";
import useToggle from "hooks/useToggle";
import React, { ReactElement } from "react";

// @Note 임시 컴포넌트
function TempPage(): ReactElement {
  const [isModal, onToggleModal] = useToggle();

  return (
    <div>
      <Button variant="contained" onClick={onToggleModal}>
        Hello
      </Button>
      {isModal && (
        <OptionSettingModal isModal={isModal} onToggleModal={onToggleModal} />
      )}
    </div>
  );
}

export default TempPage;
