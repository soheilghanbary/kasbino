import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "~/styles/ui/textarea.module.css";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

type RefType = HTMLTextAreaElement;

const Textarea = forwardRef<RefType, Props>(
  ({ label, name, ...rest }, ref) => {
    return (
      <div className={styles.textarea}>
        <label htmlFor={name}>{label}</label>
        <textarea
          rows={6}
          id={name}
          name={name}
          autoComplete={"off"}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

Textarea.displayName = "textarea";

export default Textarea;
