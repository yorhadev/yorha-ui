import YButton from "./YButton.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "YButton",
  component: YButton,
  argTypes: {
    btnType: {
      options: ["filled", "tonal", "outlined", "elevated", "text"],
      control: { type: "radio" },
    },
    btnIcon: {
      control: "text",
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
      :btnType="args.btnType"
      :btnIcon="args.btnIcon"
    >
      <span>${args.default}</span>
    </y-button>`,
});

// const Template: StoryFn<typeof YButton> = (args) => ({
//   components: { YButton },
//   setup() {
//     return { args };
//   },
//   template: `
//     <y-button>
//       <span class="material-symbols-outlined">
//         search
//       </span>
//       <span>${args.default}</span>
//     </y-button>`,
// });

export const YorhaButton = Template.bind({});
YorhaButton.args = {
  btnType: "filled",
  btnIcon: "",
  default: "Button",
};
