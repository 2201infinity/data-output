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

  console.log(shipmentKeyList);

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
            <ShipmentKeyItem key={shipmentKey.key}>
              {shipmentKey.key}
            </ShipmentKeyItem>
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

const SelectedKeyBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ShipmentKeyBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShipmentKeyItem = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  width: 132px;
  cursor: pointer;
`;

export default OptionSettingModal;
