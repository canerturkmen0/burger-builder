import React, { Component } from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  /*
  OLD CODE
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show; // we only update the component if the show state changed
    // however, the children of the component simply change to props children changed
    // we're passing a new child, we're passing the spinner instead of the order summary
  }
  */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children // (does update if it gets new children)
    );
  }

  componentDidUpdate() {
    console.log("[Modal] will update");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

/*
Modal
  OrderSummary

In the burger-builder.js,
If the props of the OrderSummary changes,
OrderSummary will be re-rendered.
However if the Modal is not visible, we don't need to do that.
--
We're not checking modalClosed prop.
(If we click on cancel, it will update)
We only return true if show changed.
It's ok because we actually never reassign click listener.
*/
