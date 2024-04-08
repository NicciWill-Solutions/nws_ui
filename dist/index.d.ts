/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1 } from 'flowbite-react';

interface ButtonProps extends ButtonProps$1 {
    children?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'error' | 'outline' | 'warning' | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
}
declare const INFButton: ({ children, color, size, ...otherProps }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { INFButton };
