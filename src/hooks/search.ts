/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import Vue from 'vue';

export const search = async (cityName : string) => {
  if (cityName) {
    try {
      await Vue.$store.dispatch('loadWeather', cityName);
    } catch (error) {
      Vue.toasted.global.input_error({
        message: `ERROR_STATUS_CODE: ${error.response.status}`,
      });
    }
  } else {
    Vue.toasted.global.input_error({
      message: 'Enter the name of the city!',
    });
  }
};
