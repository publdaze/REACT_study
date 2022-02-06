# 2 Introducing JSX

## JSX?

\- JavaScript를 확장한 문법  
\- React “엘리먼트(element)” 를 생성  
\- UI 관련 작업을 할 때 시각적으로 도움 줌  
\- 에러 및 경고 메시지를 표시

\* React에서는 본질적으로 렌더링 로직이 UI 로직과 연결  
\* React에서는 `컴포넌트`라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리

<br />

## JSX 표현식 포함하기

유효한 모든 JavaScript 표현식을 중괄호로 감싸서 사용할 수 있음

ex) `{변수}`, `{2 + 2}`, `{user.firstName}`, `{formatName(user)}`

\- JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식함

\- JSX를 `if` 구문 및 `for` loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있음

<br />

## JSX 속성 정의

어트리뷰트에 JavaScript 표현식 삽입

\- 따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용

\* `camelCase` 프로퍼티 명명 규칙을 사용 (`class` → `className`, `tabindex` → `tabIndex`)

<br />

## JSX로 자식 정의

\- 태그가 비어있다면 `/>` 를 이용해 바로 닫아주기  
\- JSX 태그는 자식 포함 가능

<br />

## 인젝션 공격 방지

React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 함

→ 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않음
(모든 항목은 렌더링 되기 전에 문자열로 변환)

<br />

### JSX는 객체를 표현한다

Babel은 JSX를 `React.createElement()` 호출로 컴파일 함

`React.createElement()`

- 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행
- 기본적으로 다음과 같은 객체(React 엘리먼트) 생성
  ```jsx
  // 주의: 다음 구조는 단순화되었습니다
  const element = {
    type: "h1",
    props: {
      className: "greeting",
      children: "Hello, world!",
    },
  };
  ```
  ⇒ React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용

<br />

# > QnA

## 이 희한한 문법은 어디서 오는 것인가

```jsx
const element = <h1>Hello, world!</h1>;
```

- Javascript에는 위와 같은 문법이 없다. 리액트만의 문법이라고 하는데, vscode에서 `.jsx`파일이 아닌 `.js`파일에 위와 같은 문법을 사용해도 아무런 문제가 없다. 왜 이럴까
  ![image](https://user-images.githubusercontent.com/78250089/152673000-160fe1a4-ba0d-4b5b-ab5b-2365be4168b2.png)
  ![image](https://user-images.githubusercontent.com/78250089/152673009-7e7860ff-2ea0-438d-9d8e-07465e73ecf3.png)

<br />

## `camelCase`란?

- 각 단어의 첫문자를 대문자로 표기하고 붙여쓰되, 맨처음 문자는 소문자로 표기함
- 띄어쓰기 대신 대문자로 단어를 구분하는 표기 방식
