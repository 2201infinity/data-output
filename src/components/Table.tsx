import styled from "@emotion/styled";
import datas from "utils/data.json";
import { TableRow } from "./TableRow";

const checkedData = [
  "순번",
  "출고서파일명",
  "매핑상태",
  "주문명",
  "수취인주소1",
  "주문수량",
  "주문번호",
];
export const Table = () => {
  return (
    <div>
      <TableHeader>
        {checkedData.map((tableHeader) => (
          <div>{tableHeader}</div>
        ))}
        {/* 여기 span 지우고 필터 버튼 넣으면 될것 같습니다. */}
        <span></span>
      </TableHeader>
      {datas.map((data) => (
        <TableRow data={data} checkedData={checkedData}></TableRow>
      ))}
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
    min-width: 120px;
  }
  & > span {
    width: 24px;
  }
`;
