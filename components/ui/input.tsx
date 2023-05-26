import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from '~/styles/ui/input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

type RefType = HTMLInputElement;

const Input = forwardRef<RefType, Props>(
  ({ label, name, errorText, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} autoComplete={"off"} {...rest} ref={ref} />
        {errorText?.length ? (
          <span className="text-rose-400 text-sm">{errorText}</span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "text field";

export default Input;
