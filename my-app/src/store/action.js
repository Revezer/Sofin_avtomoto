export const ActionType = {
    SLIDE_SELECTION: `main/slide`,
    CHOICE__INFORMATION: 'main/info'

  };
  
export const slideSelection = (number) => ({
    type: ActionType.SLIDE_SELECTION,
    payload: number
});

export const choiceInformation = (info) => ({
    type: ActionType.CHOICE__INFORMATION,
    payload: info
});


