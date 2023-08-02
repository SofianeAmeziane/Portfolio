import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './text-scroller.css';
const TextScroller = ({ text }: any) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: 'translate(100%,0)' },
    to: { transform: 'translate(-40%,0)' },
    config: { duration: 6000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div className="text" style={scrolling}>
        {text}
      </animated.div>
    </div>
  );
};

export default TextScroller;
