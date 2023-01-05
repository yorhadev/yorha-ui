import YButton from "./YButton.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "YButton",
  component: YButton,
  argTypes: {
    buttonSize: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    buttonType: {
      options: ["primary", "secondary", "disabled", "outline", "dark"],
      control: { type: "select" },
    },
    buttonBorder: {
      options: ["sharp", "rounded-sm", "rounded-md", "rounded-lg", "pill"],
      control: { type: "select" },
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    default: {
      control: "text",
    },
  },
} as Meta<typeof YButton>;

const Template: StoryFn<typeof YButton> = (args) => ({
  components: { YButton },
  setup() {
    return { args };
  },
  template: `
    <y-button
      :button-size="args.buttonSize"
      :button-type="args.buttonType"
      :button-border="args.buttonBorder"
      :disabled="args.disabled"
      :loading="args.loading"
    >
      <span>${args.default}</span>
    </y-button>`,
});

export const YorhaButton = Template.bind({});
YorhaButton.args = {
  buttonSize: "small",
  buttonType: "primary",
  buttonBorder: "sharp",
  disabled: false,
  loading: false,
  default: "Button",
};
