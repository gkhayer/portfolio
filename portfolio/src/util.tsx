const radius = [2, 4, 6, 8];

const area = function (radius: number) {
  return Math.PI * radius * radius;
};

const circum = function (radius: number) {
  return 2 * Math.PI * radius;
};

// generic function
const calculate = function (radius: number[], logic: (arg0: number) => any) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};
