import React from 'react';

// Define an interface for the button's props
interface ButtonProps {
  children: React.ReactNode; // Specifies that children can be any valid React node
  variant?: 'primary' | 'secondary'; // Optional variant prop, with specific allowed values
  size?: 'sm' | 'md' | 'lg'; // Optional size prop, with specific allowed values
  onClick?: () => void; // Optional onClick event handler
}

// Button component with TypeScript
const INFButton: React.FC<ButtonProps> = ({
  children='Hello, World! I\'m a button!',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  // Define base classes for the button
  const baseClasses = 'focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center';

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
  };

  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-lg px-7 py-3',
  };

  // Combine classes based on props
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default INFButton;
