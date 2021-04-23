<template>
    <b-card>
      <b-card-title v-if="title">
        {{ title }} <b-icon :icon="titleIcon" font-scale="1" variant="dark"></b-icon>
      </b-card-title>
      <slot name="content"></slot>
  </b-card>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, computed,
} from '@vue/composition-api';

export default defineComponent({
  props: {
    title: String,
    titleIcon: String,
  },
  setup(props) {
    return {

    };
  },
});
</script>
