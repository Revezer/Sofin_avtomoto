export const ActionType = {
    SLIDE_SELECTION: `main`,

  };
  
export const slideSelection = (number) => ({
    type: ActionType.SLIDE_SELECTION,
    payload: number
});
