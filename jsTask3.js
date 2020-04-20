function divisor(arr) {
  for (let number in arr) {
    if (arr[number] % 2 === 0) {
      arr[number] = "yu";
    }
    if (arr[number] % 3 === 0) {
      arr[number] = "gi";
    }
    if (arr[number] % 5 === 0) {
      arr[number] = "oh";
    }
    if (arr[number] % 2 === 0 && arr[number] % 3 === 0) {
      arr[number] = "yu-gi";
    }
    if (arr[number] % 3 === 0 && arr[number] % 5 === 0) {
      arr[number] = "yu-gi-oh";
    }
  }
  console.log(arr);
}
divisor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]);
