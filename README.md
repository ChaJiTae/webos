# WEB OS

## Figma
- https://www.figma.com/design/IkGPQcxQ61OzxYHcH1VQfX/Mac-OS?node-id=0-1&p=f&t=ru5etxYzfHfc0Lqo-0

## 프로젝트 목표

- 프로젝트 간단 설명 : "브라우저 안에서 경험하는 데스크탑 운영체제" : 사용자가 주도적으로 창을 제어하는 데스크탑 애플리케이션 경험을 웹 환경에서 구현하는 것을 목표로 했습니다.
- 프로젝트 구현 목표 : React와 웹 표준 기술만을 사용한 macOS와 유사한 윈도우 관리 시스템
- 프로젝트 목표 주요 키워드
  - 프로세스 상태 관리
  - 윈도우 이벤트(move,resize)

## 프로젝트 주요 기능

### 1. 윈도우 관리 시스템

- move : 마우스 이벤트를 계산 후 창 이동 구현
- Resize : 현재는 우측 하단 resize div를 이용하여 창 크기 조절

### 2. 프로세스 관리

- 앱 실행 및 종료: 바탕화면 아이콘을 클릭해 앱 실행
- 최소화 및 복원 : 창을 숨기고 독을 통해 상태를 유지 및 복원
- 최대화: 전체 화면 모드 전환 및 복구

### 3. 데스크탑 환경

- Dock System: macOS 스타일의 앱 실행 및 상태 표시
- MenuBar: 실시간 시계 및 메뉴바 UI
- 랜덤 배경화면: 접속 시마다 변경되는 배경화면

## 기술 스택 (Tech Stack)

|  분류   |     기술     |               선정 이유                |
| :-----: | :----------: | :------------------------------------: |
| Library |    React     | 컴포넌트 단위 UI 설계 및 생명주기 관리 |
|  State  |   Zustand    |  프로세스 및 윈도우의 전역 상태 관리   |
|  Style  | Tailwind CSS |  동적인 스타일링 일관된 디자인 시스템  |
|  Build  |     Vite     |          빠른 개발 환경 구축           |

## 디렉토리 구조

```
📦src
 ┣ 📂assets : web에서 사용하는 이미지,폰트,아이콘 등 정리
 ┃ ┣ 📂backgroundImage
 ┃ ┣ 📂fonts
 ┃ ┣ 📂processIcon
 ┃ ┣ 📂windowIcon
 ┣ 📂components : component들 정리
 ┃ ┣ 📂Desktop
 ┃ ┣ 📂Dock
 ┃ ┣ 📂layout
 ┃ ┣ 📂Process
 ┃ ┣ 📂ProcessLauncher
 ┃ ┗ 📂window
 ┣ 📂hooks : 사용하는 커스텀 훅 정리
 ┣ 📂pages : react의 페이지 정리
 ┣ 📂store : 상태 관리
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

## 실행 방법

```
# 1. 저장소 클론
git clone https://github.com/ChaJiTae/webos

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
