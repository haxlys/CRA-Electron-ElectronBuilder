## CRA & electron & electron-builder

[csepulv](https://github.com/csepulv/electron-with-create-react-app) 개발자가 공유한 내용을 기반으로 페키지 빌드 툴인 electron-builder v.20 추가해서 스타터 틀을 만들었다.

### 개발

$ npm run dev

### 페키징

$ npm run build
$ npm run pack

## 차후 예정

react-router react-redux 통합  
builder 옵션 추가

## 라이브러리 설명

#### react-router-redux

뒤로가기 버튼을 눌렀을 경우 이전 상태와 동일한 UI 를 보여주기 위해서는 redux 상태도 이전과 동일해야 한다. 이러한 작업을 제공해주는 라이브러리.  
ConnectedRouter 사용시 자식 컴포넌트가 렌더에러나는 현상 때문에 5.0.0-alpha.9 버전을 사용함.

#### redux-devtools-extension & electron-devtools-installer

일렉트론용 데브툴을 사용할 수 있다.

#### redux-logger

리덕스 미들웨어로 store 변경시 console 에 로깅을 볼 수 있다.

#### redux-promise-middleware

리덕스 promise 를 사용하기 편하게 해주는 미들웨어

## [folder structure](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)는 router 계층을 기반으로 한 폴더 구조

## thanks to [csepulv](https://github.com/csepulv/electron-with-create-react-app)
