import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "./ModalContext";
import type { Handler } from "./types";

const arePropsEqual = (first: object, second: object) => {
  const firstProps = first as Record<string, unknown>;
  const secondProps = second as Record<string, unknown>;
  const firstKeys = Object.keys(firstProps);
  const secondKeys = Object.keys(secondProps);

  return (
    firstKeys.length === secondKeys.length && firstKeys.every((key) => Object.is(firstProps[key], secondProps[key]))
  );
};

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true,
  updateOnPropsChange = false,
  modalId = "defaultNodeId",
): [Handler, Handler] => {
  const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss, setCloseOnOverlayClick } = useContext(Context);
  const onPresentCallback = useCallback(() => {
    onPresent(modal, modalId);
  }, [modal, modalId, onPresent]);

  // Updates the "modal" component if props are changed
  // Use carefully since it might result in unnecessary rerenders
  // Typically if modal is staic there is no need for updates, use when you expect props to change
  useEffect(() => {
    // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
    if (updateOnPropsChange && isOpen && nodeId === modalId) {
      const modalProps = React.isValidElement(modal) ? modal.props : undefined;
      const oldModalProps = React.isValidElement(modalNode) ? modalNode.props : undefined;
      // Props are compared shallowly so stable values update the modal without serializing React elements.
      // Callers passing new object or array props should memoize them when using updateOnPropsChange.
      if (modalProps && oldModalProps && !arePropsEqual(modalProps, oldModalProps)) {
        setModalNode(modal);
      }
    }
  }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
