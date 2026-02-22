export function isFormValid(data) {
  return data.name.trim() !== "" && data.email.trim() !== "";
}
