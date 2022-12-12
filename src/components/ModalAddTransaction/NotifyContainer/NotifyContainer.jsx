import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export default function NotifyContainer({ ...props }) {
  return <StyledNotify autoClose={3000} />;
}

NotifyContainer.propTypes = {
  props: PropTypes.any,
};

const StyledNotify = styled(ToastContainer)`
  .Toastify__toast {
    max-width: 280px;
    height: 50px;
    font-family: 'Circe, Manrope, sans-serif';
    color: #000000;
    background-color: rgba(87, 243, 209, 0.9);
    backdrop-filter: blur(5px);
    border-radius: 20px;
  }
  .Toastify__progress-bar {
    background-color: #6e78e8;
  }
  .Toastify__error {
    background-color: #ffcb3a;
    color: #000000;
  }
  .Toastify__toast-icon svg {
    fill: #6e78e8;
  }
`;
