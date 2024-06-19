import React from "react";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  customStyles?: string;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const { label, onClick, customStyles, disabled } = props;

  return (
    <button
      onClick={onClick}
      className={`${customStyles} || " ${disabled ? "" : ""} `}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
