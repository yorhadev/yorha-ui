export function getBtnType(btnType: string) {
  const btnTypes = new Map([
    ["filled", "y-button--filled"],
    ["tonal", "y-button--tonal"],
    ["outlined", "y-button--outlined"],
    ["elevated", "y-button--elevated"],
    ["text", "y-button--text"],
  ]);

  const currentBtnType = btnTypes.get(btnType);

  return currentBtnType ?? btnTypes.get("filled");
}

export function getBtnIcon(btnIcon?: string) {
  return !!btnIcon ? "y-button--has-icon" : null;
}
