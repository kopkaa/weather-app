<template>
  <div>
     <SearchBar></SearchBar>
     <div class="cards">
       <h1 class="ml-5 mb-5">{{ $store.state.weather.name }}</h1>
       <b-row class="pr-5 pl-5">
         <b-col md="4">
            <WeatherCard title="Tempeature" titleIcon="thermometer">
              <template v-slot:content>
              <b-card-text class="mb-0"> <span class="temp"> {{ temp ? temp : '' }} &#8451;</span>
              </b-card-text>
              <b-card-text class="font-s">
                <span class="grey">Min: {{ tempMin ? tempMin : '' }}  &#8451; </span>
                <span class="grey ml-3">Max: {{ tempMax ? tempMax : '' }}  &#8451;</span>
              </b-card-text>
              <b-card-text>
                <span class="grey">Temp feel: {{ tempFeel ? tempFeel : '' }}  &#8451; </span>
              </b-card-text>
              </template>
            </WeatherCard>
          </b-col>
          <b-col md="4">
            <WeatherCard title="Clouds" titleIcon="cloud">
              <template v-slot:content>
                <b-card-text>
                  <span class="grey">{{ cloudsDesc }}  </span>
                </b-card-text>
                <b-card-text>
                  <span class="grey">Wind speed: <b>{{ windSpeed }} m/s</b> </span>
                </b-card-text>
              </template>
            </WeatherCard>
          </b-col>
          <b-col md="4">
            <WeatherCard>
              <template v-slot:content>
                <b-card-text class="humidity">
                  <h4>Humidity</h4>
                  <vc-donut :size="100"
                  :thickness="20"
                  :sections="[ { value: humidity, color: '#0097e6' }]">
                   <span style="font-size: 1rem;"> {{ humidity }}%</span>
                  </vc-donut>
                </b-card-text>
              </template>
            </WeatherCard>
          </b-col>
       </b-row>
     </div>
   </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {
  defineComponent, ref, reactive, computed,
} from '@vue/composition-api';

import SearchBar from '@/components/SearchBar.vue';
import WeatherCard from '@/components/WeatherCard.vue';
import { convert } from '../hooks/convert';

export default defineComponent({
  components: { SearchBar, WeatherCard },
  setup() {
    const temp = computed(() => convert(Vue.$store.state.weather.main.temp));

    const tempMin = computed(() => convert(Vue.$store.state.weather.main.temp_min));

    const tempMax = computed(() => convert(Vue.$store.state.weather.main.temp_max));

    const tempFeel = computed(() => convert(Vue.$store.state.weather.main.feels_like));

    const cloudsDesc = computed(() => {
      if (Vue.$store.state.weather.weather) {
        return Vue.$store.state.weather.weather[0].description;
      }
      return '';
    });

    const windSpeed = computed(() => {
      if (Vue.$store.state.weather.weather) {
        return Vue.$store.state.weather.wind.speed;
      }
      return '';
    });
    const humidity = computed(() => {
      if (Vue.$store.state.weather.main.humidity) {
        return Vue.$store.state.weather.main.humidity;
      }
      return 0;
    });

    return {
      temp, tempMin, tempMax, tempFeel, cloudsDesc, windSpeed, humidity,
    };
  },
});
</script>
