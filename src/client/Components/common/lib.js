/**
 * @return {string}
 */
export function IDgen() {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

export const COLOR = {

};

export function calcMod(val, by) {
  return (val - (val % by)) / by;
}
