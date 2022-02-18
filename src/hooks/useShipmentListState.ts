import { useState } from "react";
import shipmentListMockData from "utils/data.json";

export default function useShipmentListState(): [
  any[], // @TODO: change to shipment list type
  typeof setShipmentList
] {
  const [shipmentList, setShipmentList] = useState(shipmentListMockData);
  return [shipmentList, setShipmentList];
}
