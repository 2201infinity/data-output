import styled from "@emotion/styled";
import useTableOptionSetting from "hooks/useTableOptionSetting";
import MenuIcon from "@mui/icons-material/Menu";
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
          <RowTitle>{tableHeader}</RowTitle>
        ))}
        <FilterButton onClick={onToggleModal}>
          <MenuIcon />
        </FilterButton>
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
  display: inline-flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ecefef;
  padding: 10px 0 10px 5px;
  text-align: center;
  & > div {
    width: 110px;
  }
`;

const RowTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const FilterButton = styled.span`
  width: 24px;
  cursor: pointer;
`;
