import React from "react";
import { Button, Input } from "./Components";

export default function App() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "500px",
        fontFamily: "sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh"
      }}
    >
      <h2>Real World Design System</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "24px"
        }}
      >
        <Input
          label="Email Address"
          placeholder="Enter your email"
          helperText="We'll never share your email."
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          error="Password is too short."
        />

        <Input label="Search" placeholder="Search..." leftIcon="🔍" />

        <div style={{ display: "flex", gap: "12px" }}>
          <Button variant="primary">Save Changes</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" loading>
            Processing...
          </Button>
        </div>
      </div>
    </div>
  );
}
