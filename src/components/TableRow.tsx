import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { Data, DataDetail } from "types/data";

interface TableRowProps {
  data: Data;
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
    let temp = startInx;
    if (temp + 7 > datas.length) {
      return (
        <div>
          {Object.entries(data)
            .slice(startInx, datas.length)
            .map((e) => {
              const { id, value } = e[1];
              return (
                <div>
                  {id} {value}
                </div>
              );
            })}
        </div>
      );
    }
    // printData(startInx + 7);
    while (temp < Object.entries(data).length) {
      temp = temp + 7;
      printData(temp);
    }
    return (
      <InfoContainer>
        {datas.slice(startInx, startInx + 7).map((e) => {
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
    <Row isClicked={isClicked}>
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
          {printData(7)}
          {printData(14)}
          {printData(21)}
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
  ${({ isClicked }) => isClicked && "height: 250px"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ecefef;
  padding-left: 5px;
  text-align: center;
  word-break: break-all;
  &:nth-of-type(odd) {
    background-color: #f7f7fa;
  }
  font-size: 14px;
  & > div {
    width: 120px;
    ${({ isClicked }) => isClicked && "width: 240px"};
  }
`;

// const Status = styled.div<{ status: string }>`
//   background-color: ${(props) =>
//     props.status === "주문명매핑성공"
//       ? "#e5fcf1"
//       : props.status === "주문명세트지정"
//       ? "#f8ede1"
//       : "none"};
//   padding: 5px 8px;
//   color: ${(props) =>
//     props.status === "주문명매핑성공"
//       ? "#01b74c"
//       : props.status === "주문명세트지정"
//       ? "#fca15b"
//       : "none"};
//   border-radius: 10px;
// `;

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
    width: 46%;
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
