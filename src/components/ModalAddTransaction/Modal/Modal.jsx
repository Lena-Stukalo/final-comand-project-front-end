import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';
import styled from 'styled-components';

import { closeModalWindow } from 'transactionsRedux/transactionsGlobalSlice';
import { toggleAddModal } from 'redux/transactions/transactionSlice';
import Icon from '../Icon/Icon';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({
  children,
  height,
  heightContent,
  width,
  padding,
  paddingTab,
  color,
}) {
  const dispatch = useDispatch();

  const onModalClose = e => {
    dispatch(toggleAddModal());
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onModalClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick} height={height} color={color}>
      <Content
        heightContent={heightContent}
        width={width}
        padding={padding}
        paddingTab={paddingTab}
      >
        <Media
          query="(min-width: 768px)"
          render={() => (
            <Button
              type="button"
              onClick={onModalClose}
              aria-label="close Modal Window"
            >
              <Icon
                width="16px"
                height="16px"
                stroke="currentColor"
                iconName="icon-close"
              />
            </Button>
          )}
        />
        {children}
      </Content>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  height: PropTypes.string,
  heightContent: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  paddingTab: PropTypes.string,
  color: PropTypes.string,
};

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${p => p.color || '#ffffff'};
  height: ${p => p.height || 'calc(100vh - 60px)'};
  @media screen and (min-width: 768px) {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${p => p.width || '100%'};
  height: ${p => p.heightContent || 'calc(100vh - 60px)'};
  transform: translate(-50%, -50%);
  padding: ${p => p.padding || '20px 10px 40px'};
  background-color: #ffffff;
  border-radius: 20px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    height: auto;
    width: 540px;
    overflow-y: unset;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
