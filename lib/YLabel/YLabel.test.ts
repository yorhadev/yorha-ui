import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import YLabel from "./YLabel.vue";

test("it renders a label", async () => {
  const YLabelComponent = mount(YLabel);
  expect(YLabelComponent.find("label").element).toBeTruthy();
});
