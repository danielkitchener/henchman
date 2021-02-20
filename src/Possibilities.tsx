import _ from 'lodash';
import * as killerConfig from './lib/killerconfig';

interface PossibilityProps {
  possibleDigits: number[];
  requiredDigits?: number[];
  count: number;
  sumTarget: number;
}

const Possilities = (props: PossibilityProps) => {
  const possibilities = killerConfig.getKillerConfigs({
    requiredDigits: props.requiredDigits,
    availableDigits: props.possibleDigits,
    count: props.count,
    sum: props.sumTarget,
  });

  // TODO: Must include and cannot include
  return (
    <>
      <ul>
        {possibilities.map((possibility) => (
          <li>{_.join(possibility, ', ')}</li>
        ))}
      </ul>
    </>
  );
};

export default Possilities;
