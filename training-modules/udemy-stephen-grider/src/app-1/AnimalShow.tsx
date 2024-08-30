import './AnimalShow.css';
import { useState } from 'react';

import bird from '../assets/bird.svg';
import cat from '../assets/cat.svg';
import cow from '../assets/cow.svg';
import dog from '../assets/dog.svg';
import gator from '../assets/gator.svg';
import heart from '../assets/heart.svg';
import horse from '../assets/horse.svg';

type SvgMap = {
  [key: string]: string;  // Each key is a string, and each value is a string (the SVG path).
};

const svgMap: SvgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

type Props = {
  type: keyof SvgMap
}

function AnimalShow({ type }: Props) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
