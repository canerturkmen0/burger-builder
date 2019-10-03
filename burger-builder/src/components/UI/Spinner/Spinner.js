import React from "react";

import classes from "./Spinner.css";

const spinner = () => <div className={classes.Loader}>Loading...</div>; // Loading is like a fallback in case the css isn't displayed.

export default spinner;
