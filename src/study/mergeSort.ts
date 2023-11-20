export function mergeSort(
  nums: number[],
  start: number,
  end: number
): number[] {
  if (end <= start) {
    return nums
  }

  const middle = Math.floor((start + end) / 2)

  mergeSort(nums, start, middle)
  mergeSort(nums, middle + 1, end)
  merge(nums, start, middle, end)

  return nums
}

function merge(nums: number[], start: number, middle: number, end: number) {
  const leftArr = new Array(middle - start + 1)
  const rightArr = new Array(end - middle)

  for (let i = 0; i < leftArr.length; i++) {
    leftArr[i] = nums[i + start]
  }

  for (let i = 0; i < rightArr.length; i++) {
    rightArr[i] = nums[middle + i + 1]
  }

  let leftIndex = 0
  let rightIndex = 0
  let arrIndex = start

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      nums[arrIndex] = leftArr[leftIndex]
      leftIndex++
    } else {
      nums[arrIndex] = rightArr[rightIndex]
      rightIndex++
    }
    arrIndex++
  }

  while (leftIndex < leftArr.length) {
    nums[arrIndex] = leftArr[leftIndex]
    leftIndex++
    arrIndex++
  }

  while (rightIndex < rightArr.length) {
    nums[arrIndex] = rightArr[rightIndex]
    rightIndex++
    arrIndex++
  }
}

const input = [5, 4, 3, 1, 2]
mergeSort(input, 0, 4)
console.log(input)
