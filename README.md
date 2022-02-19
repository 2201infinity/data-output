# 📝 원티드 프리 온보딩 3주차 과제 - 많은 데이터 출력 페이지

## 📌배포 링크

- [배포링크](https://practical-williams-d64f1e.netlify.app/)

<br />

## 📌프로젝트 소개

많은 데이터(정보)를 한눈에 보고 손쉽게 처리하기 위한 방식으로 제작된 프로젝트입니다.

<br />

## 📌기술 스택

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white)

<br />

## 📌팀원 소개

<table align="center">
<tr >
<td align="center"><a href="https://github.com/kykim00"><img src="https://avatars.githubusercontent.com/kykim00" width="100%" object-fit="cover"/></a></td>
<td align="center"><a href="https://github.com/ksmfou98"><img src="https://avatars.githubusercontent.com/ksmfou98" width="100%" object-fit="cover" /></a></td>
</tr>
<tr>
<td align="center"><b>김기영</b></td>
<td align="center"><b>이도현</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br />

## 📌프로젝트 참고 사항

- <b>각 테이블 column의 우선순위를 설정</b>해서 중요한 정보를 먼저 화면에 보일 수 있도록 했습니다.
- 뒤쪽에 존재하는 정보들도 어디서든 한번에 확인할 수 있게, <b>각 테이블의 row를 클릭하면 모든 정보를 보여주도록</b> 구현했습니다.
- 다양한 모니터 크기 ~ 태블릿 pc 화면을 고려해서 UI를 설계했습니다.
- 화면의 50%를 차지했던 `출고 신청 정보` 메뉴를 각 테이블 메뉴에 넣어 공간활용을 했습니다.

  <br />

## 📌구현 기능 목록

### ✔ 담당자 : 김기영

- 과제에 주어진 사진과 최대한 비슷하게 동작하기 위한 Mock Data 생성, 타입 선언
- 테이블 구현

### ✔ 담당자 : 이도현

- 테이블 컬럼 순서를 변경할 수 있는 모달 구현
- 드래그앤 드롭으로 테이블의 컬럼을 순서대로 변경할 수 있도록 구현

<br />

## 📌프로젝트 시연 영상

- 테이블 행 클릭 시 더 많은 정보 노출
  ![moreInfo](https://user-images.githubusercontent.com/93499158/154789733-549df97c-2b62-4b64-b3db-6293a4317262.gif)

- 상단 테이블 헤더 최우측 햄버거 버튼 클릭 시 필터 노출. 원하는 메뉴 선택, 삭제 가능. 선택된 메뉴 드래그 & 드롭으로 순서 조정 가능.
  ![filter](https://user-images.githubusercontent.com/93499158/154789765-7ab2ad77-f163-4d38-8434-a0f563eacc20.gif)
  <br />

## 📌프로젝트 설치 및 시작

<br />

### 프로젝트 클론

```
$ git clone https://github.com/2201infinity/data-output.git
```

### 패키지 설치

```
$ yarn
```

### 서버 실행

```
$ yarn start
```
