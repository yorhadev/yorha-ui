import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import YSpinner from "./YSpinner.vue";

test("it renders a svg", async () => {
  const YSpinnerComponent = mount(YSpinner);
  expect(YSpinnerComponent.find("svg").element).toBeTruthy();
});
