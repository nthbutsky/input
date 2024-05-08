<template>
  <span class="font-3 text-color-1"> INPUT </span>
  <div class="flex flex-col gap-4">
    <input
      v-model="inputValue"
      :input-attrs="{
        type: 'search',
      }"
      placeholder="You placeholder here"
      :icon="SearchIcon"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />

    <input
      :input-attrs="{
        disabled: true,
      }"
      placeholder="Disabled"
      :icon="SearchIcon"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
} from 'vue';

import Input from '@/components/input/input.vue';

import SearchIcon from '@/assets/icons/search.svg?component';

const inputValue = ref('');

const onFocus = () => {
  // eslint-disable-next-line no-console
  console.log('focused');
};

const onBlur = () => {
  // eslint-disable-next-line no-console
  console.log('blur');
};

const onInput = () => {
  // eslint-disable-next-line no-console
  console.log('input');
};
</script>
