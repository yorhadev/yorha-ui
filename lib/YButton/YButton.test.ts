import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import YButton from "./YButton.vue";

test("it renders a button", async () => {
  const YButtonComponent = mount(YButton);
  expect(YButtonComponent.find("button").element).toBeTruthy();
});
