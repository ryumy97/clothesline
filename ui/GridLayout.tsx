import React from 'react';
import { cn } from '../lib/utils';

type Props = {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
};

const GridLayout: React.FC<Props> = props => {
  return (
    <div
      className={cn(
        'relative grid md:grid-cols-12 grid-cols-4 gap-x-6 gap-y-12 py-12 px-6 md:px-12 mx-auto max-w-[1800px]',
        props.className
      )}
      ref={props.ref}
    >
      {props.children}
    </div>
  );
};

export default GridLayout;
