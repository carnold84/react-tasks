import { Wrapper } from './SaveState.styles';
import { CloudCheck, Progress, Typography } from 'react-library';

type Props = {
  isSaving: boolean;
  [x: string]: any;
};

const SaveState = ({ isSaving, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      {isSaving && (
        <>
          <Progress size={'small'} />
          <Typography mb={0} ml={2} style={{ color: 'inherit' }}>
            Saving
          </Typography>
        </>
      )}
      {!isSaving && (
        <>
          <CloudCheck height={20} width={20} />
          <Typography mb={0} ml={2} style={{ color: 'inherit' }}>
            Saved
          </Typography>
        </>
      )}
    </Wrapper>
  );
};

export default SaveState;
