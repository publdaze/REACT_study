# 1 Hello World

## React?

사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
<br /><br />

## 선행 지식

JavaScript 언어에 대한 기본적인 이해
<br /><br />

## 간단 코드 예시

```jsx
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
```

<br />

## 안내서 읽는 법

React 앱 구성 블록 (엘리먼트, 컴포넌트) 살펴보기
<br /><br />

# > QnA

## ReactDOM이 무엇인가

**[ DOM은 무엇인가 (tree 예시) ]**  
DOM(Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스

- 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공
- 웹 페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미

  ![Untitled](https://youthful-paddleboat-c6e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb0680976-1b99-4572-abbc-44235c7667ca%2FUntitled.png?table=block&id=fdbff877-d389-420b-bf7b-4a2b4ef99a3c&spaceId=a05cff0e-0e17-4277-a8e6-4c60cc392f04&width=1560&userId=&cache=v2)

**[ DOM의 객체로 만든다고? 누가 쓰려고? (Javascript) ]**

```jsx
document.getElementsByTagName("html");
document.getElementsByTagName("body");
// > 결과: javascript 객체
```

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1901f83-640a-4483-bc76-b11bafa27656%2FUntitled.png?table=block&spaceId=43245a8c-9cd2-4c2e-99fc-e8ff4195e8c7&id=f9ff4576-33c4-4afe-ace2-58d20b9d645b&width=2000&userId=c46aaedf-5cff-43e4-9371-7aeb1dac7d8c&cache=v2)

**[ 그냥 DOM이 아닌 ReactDOM만의 차이 ]**

DOM을 반복적으로 직접 조작하면 그 만큼 브라우저가 렌더링을 자주하게 되고, 그 만큼 PC 자원을 많이 소모하게되는 문제가 있다 이를 해결하기 위한 기술이 Virtual DOM!

React에서는 `ReactDOM.render()` 함수를 호출하면 Virtual DOM을 만들 수 있음

참고 [https://jeong-pro.tistory.com/210](https://jeong-pro.tistory.com/210)
<br /><br />

## CRA에서 default로 생성되는 React.StrictMode

`StrictMode`는 애플리케이션 내의 **잠재적인 문제를 알아내기 위한 도구입니다.** `Fragment`와 같이 UI를 렌더링하지 않으며, **해당 컴포넌트의 자손들까지** 부가 적인 검사와 경고를 활성화합니다.

> 즉, 예상되는 문제에 대한 경로를 출력해줌! 자세한 내용은 현재 다루기 어려우므로 PASS

애플리케이션 내 어디든지 아래와 같이 strict 모드를 활성화할 수 있습니다.

```jsx
import React from "react";

function ExampleApplication() {
  return (
    <div>
      <Header />
      **<React.StrictMode>
        **
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
        **
      </React.StrictMode>**
      <Footer />
    </div>
  );
}
```

<br /><br />

## CRA에서 default로 생성되는 reportWebVitals()

앱의 퍼포먼스 시간을 분석하여 object 형태로 보여줍니다.

### Sending results to analytics

사이트 성능 측정 엔드포인트 분석 결과를 실제 사용하는 사이트에 보낼 수 있습니다.

```jsx
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = "https://example.com/analytics";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);
```

> 만약 연동된 google Analytics 가 있다면 id값을 만들어 더욱 쉽게 설정 할 수 있습니다.

```jsx
function sendToAnalytics({ id, name, value }) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
```

출처  
[https://velog.io/@sunhwa508/reportWebVitals을-사용해보신분](https://velog.io/@sunhwa508/reportWebVitals%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%8B%A0%EB%B6%84)
[https://create-react-app.dev/docs/measuring-performance/](https://create-react-app.dev/docs/measuring-performance/)
[https://github.com/GoogleChrome/web-vitals/#types](https://github.com/GoogleChrome/web-vitals/#types)
