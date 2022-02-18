import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { initialOptionKeyList } from "utils/constants";
import useShipmentKeyList from "./useShipmentKeyList";

export default function useTableOptionSetting() {
  const shipmentKeyList = useShipmentKeyList();
  const [selectedKeyList, setSelectedKeyList] =
    useState<string[]>(initialOptionKeyList);

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

  return {
    selectedKeyList,
    shipmentKeyList,
    onToggleShipmentKeyList,
    onDragEnd,
    onDeleteShipmentKey,
  };
}
