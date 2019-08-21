import React from 'react';
import celloworld from './celloworld.png';

export default function Logo(props) {
  return (
    <img
      width="50"
      height="50"
      fill={'primary'}
      src={celloworld}
      alt="celloworld"
    />
  );
}
