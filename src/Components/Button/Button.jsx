import React, { forwardRef } from "react";
import "./Button.css";

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    className = "",
    ...rest
  },
  ref
) {
  const baseClass = "ds-button";
  const variantClass = `ds-button--${variant}`;
  const sizeClass = `ds-button--${size}`;
  const widthClass = fullWidth ? "ds-button--full-width" : "";

  const classes = [baseClass, variantClass, sizeClass, widthClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="ds-button__spinner" aria-hidden="true" />}
      {children}
    </button>
  );
});
