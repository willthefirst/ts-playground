export function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  if (end >= start) {
    const middle = Math.floor((end + start) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (nums[middle] > target) {
      return binarySearch(nums, target, start, middle)
    }

    return binarySearch(nums, target, middle + 1, end)
  }

  return -1
}

const result = binarySearch([-5, 4, 10, 34], 35, 0, 3)
