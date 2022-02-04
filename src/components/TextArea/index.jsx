import React, { useState, useEffect } from "react";
import styles from "./textarea.module.scss";
import Icon from "components/Icon";

const TextArea = (props) => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setCount(props.value.length);
  //   }, [props.value.length]);

  const onChange = (e) => {
    if (e.target.value.length > 280) {
      return;
    }
    setCount(e.target.value.length);
    props.onChange(e.target.value);
  };

  return (
    <div className={styles.textArea}>
      <label>{props.label}</label>
      <div className={styles.textAreaInput}>
        <textarea
          {...props}
          style={
            props.error
              ? {
                  ...props.style,
                  border: "1px solid #ff5b5b",
                  boxShadow: "none",
                  background: "#F7F9FC",
                }
              : { ...props.style }
          }
          onChange={onChange}
        />
        <p className={styles.textAreaInputCount}>
          {count}/{props.maxLength}
        </p>
      </div>

      {props.error && (
        <p className={styles.textAreaError} data-testid="error">
          <Icon iid="ErrorIcon" />
          {props.error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
