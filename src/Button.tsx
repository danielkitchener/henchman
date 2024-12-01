import React, { useState } from "react";

export enum ButtonState {
  Normal = "normal",
  Required = "required",
  Exclude = "exclude",
}

const Button = (props: Record<string, any>) => {
  const [state, setState] = useState(ButtonState.Normal);
  return (
    <>
      <input
        type="button"
        onClick={() => {
          let newState;
          switch (state) {
            case ButtonState.Normal:
              newState = ButtonState.Required;
              break;
            case ButtonState.Required:
              newState = ButtonState.Exclude;
              break;
            case ButtonState.Exclude:
              newState = ButtonState.Normal;
              break;
          }
          setState(newState);
          props.handler(newState);
        }}
        className={"button_" + state.valueOf() + " inputbutton"}
        value={props.value}
      />
    </>
  );
};

export default Button;
