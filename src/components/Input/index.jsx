import { forwardRef } from "react";
import styles from "./input.module.scss";
import Icon from "components/Icon";

const Input = forwardRef((props, ref) => {
  const style = {
    ...props.style,
    paddingLeft: props.prependIcon ? "50px" : "0.9rem",
  };
  return (
    <div className={styles.input}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={styles.inputWrapper}>
        {props.prependIcon && (
          <div className={styles.prependIcon}>{props.prependIcon}</div>
        )}
        <input
          {...props}
          style={
            props.error
              ? {
                  ...style,
                  border: "1px solid #ff5b5b",
                  boxShadow: "none",
                  background: "#F7F9FC",
                }
              : {
                  ...style,
                }
          }
          ref={ref}
          className={
            props.variant === "blue" ? styles.inputBlue : styles.inputDef
          }
        />
        {props.icon && (
          <div className={styles.appendIcon} data-testid="icon">
            {props.icon}
          </div>
        )}
      </div>
      {props.error && (
        <p className={styles.inputError} data-testid="input-error">
          <Icon id="ErrorIcon" />
          {props.error}
        </p>
      )}
    </div>
  );
});

export default Input;
