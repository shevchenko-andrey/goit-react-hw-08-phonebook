import { Spinner } from 'react-bootstrap';
import { SpinnerWrapper } from './CenteredSpinnerWrapper.styled';
function CenteredSpinner() {
  return (
    <SpinnerWrapper>
      <Spinner animation="border" />
    </SpinnerWrapper>
  );
}
export default CenteredSpinner;
//
