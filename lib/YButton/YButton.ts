export function getButtonSize(buttonSize?: string) {
  const sizes = ["small", "medium", "large"];
  const size = sizes.find((size) => size === buttonSize);
  return size ? `y-button--${size}` : "y-button--small";
}

export function getButtonType(buttonType?: string) {
  const types = ["primary", "secondary", "disabled", "outline", "dark"];
  const type = types.find((type) => type === buttonType);
  return type ? `y-button--${type}` : "y-button--primary";
}

export function getButtonBorder(buttonBorder?: string) {
  const borders = ["sharp", "rounded-sm", "rounded-md", "rounded-lg", "pill"];
  const border = borders.find((border) => border === buttonBorder);
  return border ? `y-button--${border}` : "y-button--sharp";
}
