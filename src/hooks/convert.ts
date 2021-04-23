/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */

export const convert = (temp : number) => {
  const result = temp - 273;
  if (temp) {
    return result.toFixed(2);
  }
  return '';
};
