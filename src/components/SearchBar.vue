<template>
  <div class="search__wrapper">
    <b-form-input v-model="city" size="sm" class="search-bar" placeholder="Enter city name...">
    </b-form-input>
    <button class="search-button" @click.prevent="searchByName(city)">Search</button>
    <button class="search-button" @click.prevent="searchByLocation()">
      <b-icon icon="map" class="mr-2" font-scale="0.75" variant="light"></b-icon>Place
      </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed,
} from '@vue/composition-api';
import { searchByName, searchByLocation } from '../hooks/search';

export default defineComponent({
  setup() {
    const city = ref('');

    return {
      searchByName,
      searchByLocation,
      city,
    };
  },
});
</script>
