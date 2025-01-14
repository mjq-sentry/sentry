import styled from '@emotion/styled';

import DateTime from 'sentry/components/dateTime';
import {showPlayerTime} from 'sentry/components/replays/utils';
import Tooltip from 'sentry/components/tooltip';

type Props = {
  relativeTime: number | undefined;
  timestamp: string | undefined;
};

const PlayerRelativeTime = ({relativeTime, timestamp}: Props) => {
  if (!timestamp || !relativeTime) {
    return <div />;
  }

  return (
    <Tooltip
      title={<DateTime date={timestamp} seconds />}
      disabled={!timestamp}
      skipWrapper
      disableForVisualTest
      underlineColor="gray300"
      showUnderline
    >
      <Value>{showPlayerTime(timestamp, relativeTime)}</Value>
    </Tooltip>
  );
};

const Value = styled('p')`
  color: ${p => p.theme.subText};
  font-size: ${p => p.theme.fontSizeSmall};
  font-variant-numeric: tabular-nums;
  margin-bottom: 0;
`;

export default PlayerRelativeTime;
