// __tests__/formValidation.test.js

import { isFormValid } from "../lib/utils/formValidation";

describe("Form Validation", () => {
  it("should return true if name and email are present", () => {
    const formData = { name: "Monika", email: "monika@example.com" };
    expect(isFormValid(formData)).toBe(true);
  });

  it("should return false if name is missing", () => {
    const formData = { name: "", email: "monika@example.com" };
    expect(isFormValid(formData)).toBe(false);
  });

  it("should return false if email is missing", () => {
    const formData = { name: "Monika", email: "" };
    expect(isFormValid(formData)).toBe(false);
  });
});
