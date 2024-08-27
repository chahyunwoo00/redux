import React, { useState } from 'react';

// 하위 컴포넌트 정의
function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <p>하위 컴포넌트에서 본 카운트 값: {count}</p>
      <button onClick={incrementCount}>카운트 증가</button>
    </div>
  );
}

// 상위 컴포넌트 정의
function ParentComponent() {
  const [count, setCount] = useState(0);

  // count 증가 함수
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>상위 컴포넌트</h1>
      <p>카운트: {count}</p>
      {/* 하위 컴포넌트에 상태와 함수 전달 */}
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
}

export default ParentComponent;
