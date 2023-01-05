export function getInputType(inputType?: string) {
  const types = ["checked", "success", "error"];
  const type = types.find((type) => type === inputType);
  return type ? `y-input-text--${type}` : null;
}

export function getInputDisabled(inputDisabled?: boolean) {
  return inputDisabled ? "y-input-text--disabled" : null;
}

export function getInputLoading(inputLoading?: boolean) {
  return inputLoading ? "y-input-text--loading" : null;
}
