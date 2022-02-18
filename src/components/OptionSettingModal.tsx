import React, { ReactElement } from "react";
import ModalTemplate from "./ModalTemplate";
import useShipmentKeyList from "hooks/useShipmentKeyList";
import styled from "@emotion/styled";

interface OptionSettingModalProps {
  isModal: boolean;
  onToggleModal: () => void;
}

function OptionSettingModal({
  isModal,
  onToggleModal,
}: OptionSettingModalProps): ReactElement {
  const { shipmentKeyList, onToggleShipmentKey } = useShipmentKeyList();

  return (
    <ModalTemplate
      width={600}
      height={400}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <SelectedKeyBox>
        {shipmentKeyList
          .filter((shipmentKey) => shipmentKey.isSelected)
          .map((shipmentKey) => (
            <div key={shipmentKey.key}>{shipmentKey.key}</div>
          ))}
      </SelectedKeyBox>
      <ShipmentKeyBox>
        {shipmentKeyList.map((shipmentKey) => (
          <ShipmentKeyItem
            key={shipmentKey.key}
            onClick={() => onToggleShipmentKey(shipmentKey.key)}
          >
            {shipmentKey.key}
          </ShipmentKeyItem>
        ))}
      </ShipmentKeyBox>
    </ModalTemplate>
  );
}

const SelectedKeyBox = styled.div``;

const ShipmentKeyBox = styled.div`
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShipmentKeyItem = styled.div`
  margin-bottom: 10px;
  width: 132px;
  cursor: pointer;
`;

export default OptionSettingModal;
