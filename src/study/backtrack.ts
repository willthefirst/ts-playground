export function subset(nums: number[]): number[][] {
  const result: number[][] = []
  const subset: number[] = []

  function dfs(i: number) {
    if (i > nums.length - 1) {
      result.push([...subset])
      return
    }

    subset.push(nums[i])
    dfs(i + 1)

    subset.pop()
    dfs(i + 1)
  }

  dfs(0)

  return result
}

const input = [1, 2, 3]
const result = subset(input)
console.log(JSON.stringify(result))
