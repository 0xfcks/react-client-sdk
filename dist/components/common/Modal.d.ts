import React from 'react';
export declare const Modal: ({ isOpen, onClose, escapeToClose, clickOutsideModalToClose, bgColor, children, }: {
    isOpen: boolean;
    onClose: () => void;
    escapeToClose?: boolean | undefined;
    clickOutsideModalToClose?: boolean | undefined;
    bgColor?: string | undefined;
    children: React.ReactNode;
}) => JSX.Element;
