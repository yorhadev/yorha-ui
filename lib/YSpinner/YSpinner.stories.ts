import "../main.css";
import YSpinner from "./YSpinner.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "YSpinner",
  component: YSpinner,
} as Meta<typeof YSpinner>;

export const YorhaSpinner: StoryFn<typeof YSpinner> = () => ({
  components: { YSpinner },
  template: "<y-spinner />",
});
