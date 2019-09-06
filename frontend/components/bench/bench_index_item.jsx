import React from 'react';

const BenchIndexItem = ({bench}) => {
  console.log(bench);
  return (
    <li>
      <p>{bench.description}</p>
      <p>{bench.lat}</p>
      <p>{bench.lng}</p>
    </li>
  );
}

export default BenchIndexItem