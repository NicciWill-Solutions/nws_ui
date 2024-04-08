/// <reference types="react" />
import { ButtonProps as FlowButtonProps } from "flowbite-react";
interface ButtonProps extends FlowButtonProps {
    children?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'error' | 'outline' | 'warning' | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
}
declare const INFButton: ({ children, color, size, ...otherProps }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default INFButton;
