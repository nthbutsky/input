<template>
  <div class="relative rounded bg-neutral-2">
    <component
      :is="icon"
      v-if="icon"
      class="absolute left-4 top-[10px] text-neutral-1-48"
      :class="{
        'text-color-2': focused,
        'text-neutral-3': !inputAttrs.disabled,
      }"
    />
    <input
      class="font-4 inline-block h-[44px] w-full rounded border-[1px] border-neutral-1-12 px-4 py-2 text-color-1 caret-color-1 placeholder:font-4 placeholder:text-neutral-3 placeholder:transition placeholder:ease-in-out"
      :class="{
        'input-outline outline-none transition ease-in-out focus:border-transparent focus:placeholder-transparent':
          focused,
        'bg-neutral-2 transition ease-in-out hover:border-color-1-50': !inputAttrs.disabled,
        'cursor-not-allowed bg-color-2-05 placeholder:text-neutral-1-48': inputAttrs.disabled,
        'pl-12': props.icon,
      }"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="inputAttrs"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    >
    <button
      v-if="focused"
      type="button"
      class="absolute right-[10px] top-3 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1px] border-neutral-1-12 bg-color-2-05"
      @mousedown="onClear"
    >
      <close-icon class="text-color-1" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import {
  ref, useAttrs, FunctionalComponent, SVGAttributes,
} from 'vue';

import CloseIcon from '@/assets/icons/close.svg?component';

import {
  useInput,
} from './input';

import colorDesignTokens from '@/design-tokens/color.json';

interface IProps {
  placeholder?: string;
  modelValue?: string;
  inputAttrs?: Record<string, any>;
  icon?: FunctionalComponent<SVGAttributes>;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
  modelValue: '',
  inputAttrs: () => ({}),
  icon: undefined,
});

// eslint-disable-next-line func-call-spacing, no-spaced-func
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', value: string): void;
  (e: 'blur', value: string): void;
  (e: 'clear'): void;
}>();

const inputElementRef = ref<null | HTMLElement>(null);

const attrs = useAttrs();

const {
  onInput, onFocus, onBlur, focused,
} = useInput(emits, props, attrs);

const outlineColor = colorDesignTokens['color-2'];

const onClear = () => {
  emits('update:modelValue', '');
  emits('clear');
};

defineExpose({
  inputElementRef,
});
</script>

<style lang="css" scoped>
.input-outline {
  box-shadow: 0 0 0 2px v-bind(outlineColor);
}

input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
</style>
