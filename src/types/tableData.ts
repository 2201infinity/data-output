export interface TableData {
  출고서파일명: DataDetail;
  순번: DataDetail;
  매핑상태: DataDetail;
  주문서양식: DataDetail;
  주문번호: DataDetail;
  연동상품ID: DataDetail;
  주문명: DataDetail;
  콜로상품명: DataDetail;
  콜로상품코드: DataDetail;
  콜로상품ID: DataDetail;
  주문수량: DataDetail;
  주문단위: DataDetail;
  출고수량: DataDetail;
  출고창고명: DataDetail;
  재고부족여부: DataDetail;
  수량변경: DataDetail;
  출고취소상품: DataDetail;
  주문정보ID: DataDetail;
  출고취소주문: DataDetail;
  주문자: DataDetail;
  주문자전화번호: DataDetail;
  수취인: DataDetail;
  수취인전화번호1: DataDetail;
  수취인전화번호2: DataDetail;
  수취인우편번호: DataDetail;
  수취인주소1: DataDetail;
  수취인주소2: DataDetail;
  메모: DataDetail;
  desc: Desc;
}

export interface DataDetail {
  id: string;
  value: string | number;
}
export interface Desc {
  출고전표번호: string;
  출고요청일자: string;
  출고요청업체: string;
  출고요청자: string;
  출고방식: string;
  출고상태: string;
  출고유형: string;
  파일명: string;
}
