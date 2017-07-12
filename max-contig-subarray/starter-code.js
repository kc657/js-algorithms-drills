function maxContigSubarray (arr) {
  let largestGroup = null
  let largestArray = []


  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log('if array does not show up below, then the array was full of damn negatives')
      continue
    } else {
      for (i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i + 1]
        if (sum > largestGroup) {
          largestGroup = sum
          largestArray.shift()
          largestArray.shift()
          largestArray.push(arr[i], arr[i + 1])
        }
      }
      console.log(`the sum of the two largest continious subarray  is `largestGroup);
      console.log(largestArray)
    }
  }
}


testArr1 = [1, 2, 1, -4, 8]
testArr2 = [0, 8, 1, 2, 3]
testArr3 = [-1, 5, 66, 7, -8, -22, 4]
testArr4 = [-2, -3, -1, -5, -4]

console.log(maxContigSubarray(testArr1))
console.log(maxContigSubarray(testArr2))
console.log(maxContigSubarray(testArr3))
  console.log(maxContigSubarray(testArr4))
