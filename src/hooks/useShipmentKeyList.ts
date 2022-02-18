import useShipmentListState from "./useShipmentListState";

export default function useShipmentKeyList() {
  const [shipmentList] = useShipmentListState();

  return Object.keys(shipmentList[0]).filter(
    (shipmentKey) => shipmentKey !== "desc"
  );
}
