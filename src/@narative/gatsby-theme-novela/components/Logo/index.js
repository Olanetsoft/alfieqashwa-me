import React from 'react';
import celloworld from './celloworld.png';

export default function Logo(props) {
  return (
    <img
      width="60"
      height="60"
      fill={'primary'}
      src={celloworld}
      alt="celloworld"
    />
  );
}
