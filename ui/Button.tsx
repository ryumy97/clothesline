import React from 'react';
import { cn } from '../lib/utils';
import { Slot } from '@radix-ui/react-slot';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  theme?: 'light' | 'dark';
  asChild?: boolean;
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
};

const Button: React.FC<Props> = props => {
  const { asChild, variant = 'primary', theme = 'dark', className, children, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...rest}
      className={cn(
        'h-9 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-default w-fit',
        theme === 'light' && {
          'px-3 bg-white text-black disabled:bg-[#3E3F3E] disabled:text-[#888987] hover:bg-white hover:text-[#888987] ':
            variant === 'primary',
          'border-b border-b-white hover:border-b-transparent disabled:border-#888987 disabled:text-[#888987':
            variant === 'secondary',

          'border-b hover:border-b-white border-b-transparent disabled:border-b-transparent disabled:text-[#888987]':
            variant === 'tertiary'
        },
        theme === 'dark' && {
          'px-3 bg-black text-white disabled:bg-[#D0D1D0] disabled:text-[#888987] hover:bg-black hover:text-[#D0D1D0] ':
            variant === 'primary',
          'border-b border-b-black hover:border-b-transparent disabled:border-[#D0D1D0] disabled:text-[#D0D1D0]':
            variant === 'secondary',

          'border-b hover:border-b-black border-b-transparent disabled:border-b-transparent disabled:text-[#888987]':
            variant === 'tertiary'
        },
        'transition-colors duration-200 ease-in-out',
        'text-[16px] leading-[1.12] tracking-[-0.03]',
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Button;
