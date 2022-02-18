import { useState } from "react";
import useShipmentListState from "./useShipmentListState";

export default function useShipmentKeyList() {
  const [shipmentList] = useShipmentListState();
  const [shipmentKeyList, setShipmentKeyList] = useState(
    Object.keys(shipmentList[0])
      .filter((shipmentKey) => shipmentKey !== "desc")
      .map((shipmentKey) => ({
        key: shipmentKey,
        isSelected: false,
      }))
  );

  const onToggleShipmentKey = (shipmentKey: string) => {
    setShipmentKeyList((prev) =>
      prev.map((shipmentKeyItem) =>
        shipmentKeyItem.key === shipmentKey
          ? { ...shipmentKeyItem, isSelected: !shipmentKeyItem.isSelected }
          : shipmentKeyItem
      )
    );
  };

  return {
    shipmentKeyList,
    onToggleShipmentKey,
  };
}
