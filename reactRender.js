/**
 * React 渲染 demo
 */

/* eslint-disable react/destructuring-assignment */
import React, { Component, useEffect, useState, PureComponent } from 'react';

// class Child extends PureComponent {
//   render() {
//     console.log('child render');
//     return <div>{this.props.name}</div>;
//   }
// }

// class Parent extends Component {
//   compodi;

//   render() {
//     return (
//       <div>
//         <div>{count}</div>
//         <Child name="儿子" />
//       </div>
//     );
//   }
// }

// export default Parent;

function Child({ name }) {
  console.log('child render');
  return <div>{name}</div>;
}

function Parent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(pre => pre + 1);
    }, 2000);
  }, []);

  return (
    <>
      <div>{count}</div>
      <Child name="儿子" />
    </>
  );
}

export default Parent;
