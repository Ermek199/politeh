export const OPEN_BOTTOM_PANEL = 'OPEN_BOTTOM_PANEL';
export const CLOSE_BOTTOM_PANEL = 'CLOSE_BOTTOM_PANEL';

export const openBottomPanel = (title, contentKey) => ({
  type: OPEN_BOTTOM_PANEL,
  payload: { title, contentKey },
});

export const closeBottomPanel = () => ({
  type: CLOSE_BOTTOM_PANEL,
});

