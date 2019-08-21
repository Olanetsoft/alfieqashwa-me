import React from 'react';
import celloworld from './celloworld.png';

export default function Logo() {
  return (
    <>
      <img
        width="50"
        height="50"
        fill={'primary'}
        src={celloworld}
        alt="celloworld"
      />
      <div>CELLOWORLD</div>
    </>
  );
}
