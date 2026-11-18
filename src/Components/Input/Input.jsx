import React, { forwardRef } from "react";
import "./Input.css";

export const Input = forwardRef(function Input(
  {
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    disabled = false,
    className = "",
    ...rest
  },
  ref
) {
  const containerClasses = [
    "ds-input-container",
    error ? "ds-input-container--error" : "",
    disabled ? "ds-input-container--disabled" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`ds-input-wrapper ${className}`}>
      {label && <label className="ds-input-label">{label}</label>}

      <div className={containerClasses}>
        {leftIcon && (
          <span className="ds-input-icon" style={{ marginRight: "8px" }}>
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          className="ds-input-field"
          disabled={disabled}
          {...rest}
        />

        {rightIcon && (
          <span className="ds-input-icon" style={{ marginLeft: "8px" }}>
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span className="ds-input-message ds-input-message--error">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span className="ds-input-message">{helperText}</span>
      )}
    </div>
  );
});
