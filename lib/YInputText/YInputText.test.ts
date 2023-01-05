import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import YInputText from "./YInputText.vue";

test("it renders a input type text", async () => {
  const YInputTextComponent = mount(YInputText);
  expect(YInputTextComponent.find("input").element).toBeTruthy();
  expect(YInputTextComponent.find("input").element.type).toBe("text");
});
