export function quickSort(nums: number[], start: number, end: number) {
  const pivot = nums[end]
  let left = start
  let i = start

  while (i < end) {
    if (nums[i] < pivot) {
      swap(nums, i, left)
      left++
    }
    i++
  }

  swap(nums, i, left)

  quickSort(nums, 0, left)
  quickSort(nums, left + 1, end)

  console.log(input)
}

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}

const input = [5, 2, 4, 3, 3]
quickSort(input, 0, 4)
console.log(input)

/**
 *
 * 2, 5, 4, 1, 3
 *    l
 *       i
 */
