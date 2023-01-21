<template>
  <button :class="['y-button', buttonType, buttonIcon]">
    <span v-if="btnIcon" class="material-symbols-outlined">{{ btnIcon }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getBtnType, getBtnIcon } from "./YButton";

export interface Props {
  btnType?: string;
  btnIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  btnType: "filled",
});

const buttonType = computed(() => getBtnType(props.btnType));

const buttonIcon = computed(() => getBtnIcon(props.btnIcon));
</script>

<style src="./YButton.css"></style>
