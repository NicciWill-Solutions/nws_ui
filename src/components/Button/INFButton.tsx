import {
  ButtonProps as FlowButtonProps,
  Button as FlowButton,
} from "flowbite-react";

interface ButtonProps extends FlowButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'error' | 'outline' | 'warning' | undefined;
  color?: 'primary' | 'secondary' | 'error' | 'outline' | 'warning' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined; // Optional size prop, with specific allowed values
}

// Button component with TypeScript
const INFButton = ({children, variant = 'primary', size = 'md', ...rest}: ButtonProps) => {
  return (
    <FlowButton color={variant} {...rest} >
      {children}
    </FlowButton>
  );
};

export default INFButton;
