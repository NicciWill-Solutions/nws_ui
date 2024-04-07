import {
  ButtonProps as FlowButtonProps,
  Button as FlowButton,
} from "flowbite-react";

// Define an interface for the button's props
interface ButtonProps extends FlowButtonProps {
  children?: React.ReactNode; // Specifies that children can be any valid React node
  color?: 'primary' | 'secondary' | 'error' | 'outline' | 'warning' | undefined; // Optional variant prop, with specific allowed values
  size?: 'sm' | 'md' | 'lg' | undefined; // Optional size prop, with specific allowed values
}

// Button component with TypeScript
const INFButton = ({children, color, size = 'md', ...otherProps}: ButtonProps) => {
  return (
    <FlowButton color={color} {...otherProps} >
      {children}
    </FlowButton>
  );
};

export default INFButton;
