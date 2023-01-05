import YLabel from "./YLabel.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "YLabel",
  component: YLabel,
  argTypes: {
    for: {
      control: "text",
    },
    default: {
      control: "text",
    },
  },
} as Meta<typeof YLabel>;

const Template: StoryFn<typeof YLabel> = (args) => ({
  components: { YLabel },
  setup() {
    return { args };
  },
  template: `<y-label :for="args.for">${args.default}</y-label>`,
});

export const YorhaLabel = Template.bind({});
YorhaLabel.args = {
  for: "input-id",
  default: "Label",
};
