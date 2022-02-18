import styled from "@emotion/styled";
import useTableOptionSetting from "hooks/useTableOptionSetting";
import useToggle from "hooks/useToggle";
import datas from "utils/data.json";
import OptionSettingModal from "./OptionSettingModal";
import { TableRow } from "./TableRow";

export const Table = () => {
  const [isModal, onToggleModal] = useToggle();
  const {
    onDeleteShipmentKey,
    onDragEnd,
    onToggleShipmentKeyList,
    selectedKeyList,
    shipmentKeyList,
  } = useTableOptionSetting();

  return (
    <div>
      <TableHeader>
        {selectedKeyList.map((tableHeader) => (
          <div>{tableHeader}</div>
        ))}
        <FilterButton onClick={onToggleModal}>d</FilterButton>
      </TableHeader>
      {datas.map((data) => (
        <TableRow data={data} checkedData={selectedKeyList}></TableRow>
      ))}

      {isModal && (
        <OptionSettingModal
          isModal={isModal}
          onToggleModal={onToggleModal}
          onDeleteShipmentKey={onDeleteShipmentKey}
          onDragEnd={onDragEnd}
          onToggleShipmentKeyList={onToggleShipmentKeyList}
          selectedKeyList={selectedKeyList}
          shipmentKeyList={shipmentKeyList}
        />
      )}
    </div>
  );
};

const TableHeader = styled.div`
  position: sticky;
  background-color: #fff;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ecefef;
  padding: 10px 0 10px 5px;
  text-align: center;
  & > div {
    width: 110px;
  }
`;

const FilterButton = styled.span`
  width: 24px;
  background-color: blue;
  cursor: pointer;
`;
