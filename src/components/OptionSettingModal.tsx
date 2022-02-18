import React, { ReactElement, useState } from "react";
import ModalTemplate from "./ModalTemplate";
import useShipmentKeyList from "hooks/useShipmentKeyList";
import styled from "@emotion/styled";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { scrollbar } from "styles/utilStyles";
import CloseIcon from "@mui/icons-material/Close";
import { css } from "@emotion/react";

interface OptionSettingModalProps {
  isModal: boolean;
  onToggleModal: () => void;
}

function OptionSettingModal({
  isModal,
  onToggleModal,
}: OptionSettingModalProps): ReactElement {
  const shipmentKeyList = useShipmentKeyList();
  const [selectedKeyList, setSelectedKeyList] = useState<string[]>([]);

  const onToggleShipmentKeyList = (key: string) => {
    const index = selectedKeyList.indexOf(key);
    if (index === -1) {
      setSelectedKeyList([...selectedKeyList, key]);
    } else {
      setSelectedKeyList(
        selectedKeyList.filter((selectedKey) => selectedKey !== key)
      );
    }
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    const items = reorder(selectedKeyList, source.index, destination.index);
    setSelectedKeyList(items as any);
  };

  const onDeleteShipmentKey = (key: string) => {
    setSelectedKeyList(
      selectedKeyList.filter((selectedKey) => selectedKey !== key)
    );
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
              {selectedKeyList.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <SelectedKeyItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{item}</span>
                      <CloseIcon onClick={() => onDeleteShipmentKey(item)} />
                    </SelectedKeyItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </SelectedKeyBox>
          )}
        </Droppable>
      </DragDropContext>

      <NoticeText>화면에 노출될 속성을 드래그로 설정해주세요!</NoticeText>

      <ShipmentKeyBox>
        {shipmentKeyList.map((shipmentKey) => (
          <ShipmentKeyItem
            key={shipmentKey.key}
            isSelected={selectedKeyList.indexOf(shipmentKey.key) !== -1}
          >
            <span onClick={() => onToggleShipmentKeyList(shipmentKey.key)}>
              {shipmentKey.key}
            </span>
          </ShipmentKeyItem>
        ))}
      </ShipmentKeyBox>
    </ModalTemplate>
  );
}

const SelectedKeyBox = styled.div`
  display: flex;
  height: 68px;
  width: 100%;
  overflow: auto;
  align-items: center;
  border: 1px solid #e6e6e6;
  padding: 10px;
  margin-bottom: 20px;
  ${scrollbar}
`;

const SelectedKeyItem = styled.div`
  font-size: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  cursor: pointer;
  span {
    margin-right: 4px;
  }
  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const NoticeText = styled.div`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-bottom: 20px;
`;

const ShipmentKeyBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShipmentKeyItem = styled.div<{ isSelected: boolean }>`
  font-size: 14px;
  margin-bottom: 10px;
  width: 132px;
  padding: 5px;
  span {
    cursor: pointer;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: blue;
    `}
`;

export default OptionSettingModal;
