import React, { ReactElement } from "react";
import ModalTemplate from "./ModalTemplate";
import useShipmentKeyList from "hooks/useShipmentKeyList";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface OptionSettingModalProps {
  isModal: boolean;
  onToggleModal: () => void;
}

function OptionSettingModal({
  isModal,
  onToggleModal,
}: OptionSettingModalProps): ReactElement {
  const { shipmentKeyList, onToggleShipmentKey, setShipmentKeyList } =
    useShipmentKeyList();

  console.log(shipmentKeyList);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    console.log("d");
    if (!result.destination) {
      return;
    }

    const items = reorder(
      shipmentKeyList,
      result.source.index,
      result.destination.index
    );

    setShipmentKeyList(items as any);
  };

  return (
    <ModalTemplate
      width={600}
      height={400}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <SelectedKeyBox
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {shipmentKeyList.map((item, index) => (
                <Draggable key={item.key} draggableId={item.key} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.key}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </SelectedKeyBox>
          )}
        </Droppable>
      </DragDropContext>

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
