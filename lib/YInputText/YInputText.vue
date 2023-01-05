<template>
  <input
    type="text"
    v-bind="$attrs"
    v-model="inputValue"
    :class="['y-input-text', inputType, inputDisabled, inputLoading]"
    :disabled="disabled || loading"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { getInputType, getInputDisabled, getInputLoading } from "./YInputText";

const props =
  defineProps<{
    inputType?: string;
    disabled?: boolean;
    loading?: boolean;
  }>();

const inputType = computed(() => {
  return getInputType(props.inputType);
});

const inputDisabled = computed(() => {
  return getInputDisabled(props.disabled);
});

const inputLoading = computed(() => {
  return getInputLoading(props.loading);
});

const inputValue = ref("");
</script>

<style src="./YInputText.css"></style>
