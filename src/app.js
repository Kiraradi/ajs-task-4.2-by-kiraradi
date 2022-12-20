export default function sortByHealth(arr) {
  const arrHealth = [];
  const newArr = [];
  arr.forEach((element) => {
    arrHealth.push(element.health);
  });
  arrHealth.sort((a, b) => b - a);

  for (let i = 0; arrHealth.length > i; i += 1) {
    const foundElement = arr.find((e) => e.health === arrHealth[i]);
    newArr.push(foundElement);
  }
  return newArr;
}
