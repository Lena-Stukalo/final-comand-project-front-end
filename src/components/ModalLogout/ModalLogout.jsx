import { createPortal } from 'react-dom';
import operations from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BtnNo,
  BtnYes,
  ExitModal,
  ExitModalContent,
  ExitTitle,
} from './ModalLogout.styled';

const modalRoot = document.querySelector('#modal-logout-root');

export const ModalLogout = ({ closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  // закрытие модалки по бекдропу
  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <ExitModal onClick={handleBackdropClose}>
      <ExitModalContent>
        <ExitTitle>
          Unsaved data will be lost. Do you really want out?
        </ExitTitle>
        <BtnYes
          type="button"
          onClick={() => {
            dispatch(operations.logout());
            closeModal();
          }}
        >
          Yes
        </BtnYes>
        <BtnNo type="button" onClick={closeModal}>
          {' '}
          No
        </BtnNo>
      </ExitModalContent>
    </ExitModal>,
    modalRoot
  );
};
