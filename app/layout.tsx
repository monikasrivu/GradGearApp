import React from "react";
import '../styles/globals.css'; // only if you have global styles

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
