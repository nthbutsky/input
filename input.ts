import {
  ref,
} from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useInput = (emits: any, props: any, attrs: any) => {
  const focused = ref(false);

  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emits('update:modelValue', target.value);
  };

  const onFocus = (event: Event) => {
    focused.value = true;
    emits('focus', event);
  };

  const onBlur = (event: Event) => {
    focused.value = false;
    emits('blur', event);
  };

  return {
    focused,
    onInput,
    onBlur,
    onFocus,
  };
};
