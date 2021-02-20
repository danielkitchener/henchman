import _ from 'lodash';
import React, { useState } from 'react';
import Button, { ButtonState } from './Button';
import Possilities from './Possibilities';

const HenchmanForm = () => {
  const [sum, setSum] = useState(12);
  const [count, setCount] = useState(4);
  const [buttons, setButtons] = useState(
    _.map(_.range(1, 10), (value) => {
      return {
        state: ButtonState.Normal,
        value: value,
      };
    }),
  );

  return (
    <div className="mainContent">
      <div>
        <form>
          <table>
            <tr>
              <td>
                <label htmlFor="sum">Sum:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="sum"
                  id="sum"
                  value={sum}
                  onChange={(event) => setSum(parseInt(event.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="numberOfDigits"># of Digits:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="numberOfDigits"
                  id="numberOfDigits"
                  value={count}
                  onChange={(event) => setCount(parseInt(event.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {buttons.map((button) => {
                  return (
                    <Button
                      key={button.value}
                      value={button.value}
                      handler={(buttonState: ButtonState) => {
                        console.log(`Setting State ${buttonState.valueOf()}`);
                        const foo = buttons;
                        foo[button.value - 1] = {
                          value: button.value,
                          state: buttonState,
                        };
                        setButtons([...foo]);
                      }}
                    />
                  );
                })}
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="possibilityDiv">
        <Possilities
          key={_.join(
            buttons.map((button) => button.value),
            '_',
          )}
          possibleDigits={buttons
            .filter((button) => {
              console.dir(button);
              return !(button.state === ButtonState.Exclude);
            })
            .map((button) => button.value)}
          requiredDigits={buttons
            .filter((button) => button.state === ButtonState.Required)
            .map((button) => button.value)}
          count={count}
          sumTarget={sum}
        ></Possilities>
      </div>
    </div>
  );
};

export default HenchmanForm;
