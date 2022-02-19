import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { TableData, DataDetail } from "types/tableData";

interface TableRowProps {
  data: TableData;
  checkedData: string[];
}

export const TableRow = ({ data, checkedData }: TableRowProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickButton = () => {
    setIsClicked(!isClicked);
  };

  function compare(a: string, b: string) {
    const indexA = checkedData.indexOf(a);
    const indexB = checkedData.indexOf(b);
    return indexA - indexB;
  }

  const values: DataDetail[] = Object.values(data);
  const datas = Object.entries(data);
  const selectedData = values
    .filter((e) => checkedData.includes(e.id))
    .sort((a, b) => compare(a.id, b.id));

  const printData = (startInx: number) => {
    return (
      <InfoContainer>
        {datas.slice(startInx, startInx + 9).map((e) => {
          const { id, value } = e[1];
          return (
            <Info>
              <span>{id}</span>
              <strong>{value}</strong>
            </Info>
          );
        })}
      </InfoContainer>
    );
  };

  return (
    <Row isClicked={isClicked} onClick={onClickButton}>
      {!isClicked ? (
        <>
          {selectedData.map((data) => {
            const { id, value } = data;
            return (
              <div key={`${id}_${value}`}>
                <div>{value}</div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {printData(0)}
          {printData(10)}
          {printData(20)}
          <InfoContainer>
            <StrongText>출고 신청 정보</StrongText>
            <Line />
            {Object.entries(data.desc).map((e) => {
              return (
                <Info>
                  <span>{e[0]}</span>
                  <strong>{e[1]}</strong>
                </Info>
              );
            })}
          </InfoContainer>
        </>
      )}
      <Button onClick={onClickButton} clicked={isClicked}>
        {isClicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
    </Row>
  );
};

const Row = styled.div<{ isClicked: boolean }>`
  height: 60px;
  ${({ isClicked }) => isClicked && "height: 280px"};
  position: relative;
  display: inline-flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ecefef;
  text-align: center;
  word-break: break-all;
  &:nth-of-type(odd) {
    background-color: #f7f7fa;
  }
  font-size: 14px;
  & > div {
    width: 110px;
    ${({ isClicked }) => isClicked && "width: calc((100% - 24px) / 4)"};
  }
`;

const Button = styled.button<{ clicked: boolean }>`
  height: 100%;
  padding: 10px 0;
  background-color: ${(props) =>
    props.clicked === true ? "#a5b5cb" : "#d7e0ec"};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    margin-left: 25px;
    color: #797979;
  }
  & > strong {
    width: 54%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding-left: -5px;
  & ~ & {
    border-left: 1px solid #ecefef;
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: #ecefef;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;
