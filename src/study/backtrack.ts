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

1, 2, 3
1 + 2
1 + 3
2 + 3
n = 3
O(n)= 3


1, 2, 3, 4
1 + 2
1 + 3
1 + 4
2 + 3
2 + 4
3 + 4
n = 4
= 6
= 3 + 2 + 1


1, 2, 3, 4, 5
1 + 2
1 + 3
1 + 4
1 + 5
2 + 1
2 + 3
2 + 4
2 + 5
3 + 1
3 + 2
3 + 4
3 + 5
4 + 5
= 10
4 + 3 + 2 + 1