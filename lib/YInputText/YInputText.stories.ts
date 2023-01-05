import YInputText from "./YInputText.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "YInputText",
  component: YInputText,
  argTypes: {
    inputType: {
      options: ["default", "checked", "success", "error"],
      control: { type: "select" },
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
} as Meta<typeof YInputText>;

const Template: StoryFn<typeof YInputText> = (args) => ({
  components: { YInputText },
  setup() {
    return { args };
  },
  template: `
    <y-input-text
      placeholder="Type something here..."
      :input-type="args.inputType"
      :disabled="args.disabled"
      :loading="args.loading"
    />`,
});

export const YorhaInputText = Template.bind({});
YorhaInputText.args = {
  inputType: "default",
  disabled: false,
  loading: false,
};
