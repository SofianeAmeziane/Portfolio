import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';

const TypeWriterH1 = styled('h1')(() => ({
  fontSize: '15px',
  color: `#343a40`,
  animation: '1s cubic-bezier(0.215, 0.61, 0.355, 1) both',
}));

interface ITextScroller {
  texts: string[];
}

const TextScroller: FC<ITextScroller> = ({ texts }) => {
  return (
    <TypeWriterH1>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
        }}
      />
    </TypeWriterH1>
  );
};

export default TextScroller;
