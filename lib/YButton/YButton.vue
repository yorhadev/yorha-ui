<template>
  <button
    v-bind="$attrs"
    :class="['y-button', btnSize, btnType, btnBorder]"
    :disabled="disabled"
  >
    <span v-if="loading">
      <y-spinner />
    </span>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getButtonSize, getButtonType, getButtonBorder } from "./YButton";
import YSpinner from "../YSpinner/YSpinner.vue";

const props =
  defineProps<{
    buttonSize?: string;
    buttonType?: string;
    buttonBorder?: string;
    disabled?: boolean;
    loading?: boolean;
  }>();

const btnSize = computed(() => {
  return getButtonSize(props.buttonSize);
});

const btnType = computed(() => {
  if (props.disabled) return "y-button--disabled";
  return getButtonType(props.buttonType);
});

const btnBorder = computed(() => {
  return getButtonBorder(props.buttonBorder);
});
</script>

<style src="./YButton.css"></style>
