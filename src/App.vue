<template>
  <Home/>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Home from './views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>
