/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import Vue from 'vue';

const success = async (position : any) => {
  try {
    await Vue.$store.dispatch('loadByLocation', position);
  } catch (error) {
    Vue.toasted.global.input_error({
      message: `ERROR_STATUS_CODE: ${error.response.status}`,
    });
  }
};

const err = () => {
  Vue.toasted.global.input_error({
    message: 'Geolocation is not supported in your browser',
  });
};

export const searchByName = async (cityName : string) => {
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

export const searchByLocation = async () => {
  if (!navigator.geolocation) {
    console.log('NOT SUPPORTED');
  } else {
    navigator.geolocation.getCurrentPosition(success, err);
  }
};
