/**
 * Opens a popup centered on the parent page and returns a reference to the window.
 * The caller can close the popup with `popupWindow.close()`.
 * @returns The Window that was popped up
 */
export declare function openCenteredPopup({ url, windowName, win, w, h, }: {
    url: string;
    windowName: string;
    win: Window & typeof globalThis;
    w: number;
    h: number;
}): Window | null;
