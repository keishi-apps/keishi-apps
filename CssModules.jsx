// 適用させるのはindex.jsxに貼り付けること

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import root from "./CssModules.module.scss";

const rootElement = document.getElementById("root");
const classes = createRoot(rootElement);

classes.render(
  <StrictMode>
    <div className={root.container}>
      <p className={root.title}>CSS Modulesです</p>
      <button className={root.button}>ボタン</button>
    </div>
  </StrictMode>
);
