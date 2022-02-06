# 4 Components and Props

## 컴포넌트란?

- UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 개별적으로 살펴볼 수 있음
- “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 **React 엘리먼트를 반환**

<br />

## 함수 컴포넌트와 클래스 컴포넌트

컴포넌트를 정의하는 방법 (React의 관점에서 아래 두 유형 동일)

- JavaScript 함수를 작성
  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
- (ES6)class 사용하여 정의
  ```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```

<br />

## 컴포넌트 렌더링

React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있음

React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달, 이 객체를 “props”라고 함

> ❓여기서 자식 뭐 어떤 거?  
> -> `<Component />` 이렇게 단일 태그로 끝나는 게 아닌 `<Component>something</Component>` 사이에 포함된 요소가 있을 때 그 요소(여기선 something)을 자식으로 전달해주는 것 같음

> ❓컴포넌트가 엘리먼트로 사용될 수 있는 거 맞는지?  
> -> maybe ㅇ

💡 **컴포넌트의 이름은 항상 대문자**

- React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리

<br />

## 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있음  
(모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

일반적으로 새 React 앱은 최상위에 단일 `App`컴포넌트를 가지고 있다

<br />

## 컴포넌트 추출

큰 앱에서 작업할 때 재사용 가능한 컴포넌트를 만들어 놓는 것이 좋음

UI 일부가 여러 번 사용되거나, UI 일부가 자체적으로 복잡한 경우 → 별도의 컴포넌트로 만들자!

<br />

## props는 읽기 전용

컴포넌트의 자체 props를 수정해서는 안 됨
