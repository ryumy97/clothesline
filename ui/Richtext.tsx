import React from 'react';
import { cn } from '../lib/utils';

type Props = {
  className?: string;
  text: string;
};

const Richtext: React.FC<Props> = props => {
  return (
    <div
      className={cn(props.className)}
      dangerouslySetInnerHTML={{
        __html: props.text
      }}
    ></div>
  );
};

export default Richtext;
