"use strict";
function permute(nums) {
    const result = [];
    const remainingChoices = nums.map((_) => true);
    backtrack(result, nums, [], remainingChoices);
    return result;
}
function backtrack(result, nums, permutation, remainingChoices) {
    // Goal reached
    if (permutation.length === nums.length) {
        result.push(permutation);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (remainingChoices[i]) {
            remainingChoices[i] = false;
            permutation.push(nums[i]);
            backtrack(result, nums, [...permutation], remainingChoices);
            remainingChoices[i] = true;
            permutation.pop();
        }
    }
}
const source = [1, 2, 3];
const permutations = permute(source);
console.log('Permutations:', permutations);
//# sourceMappingURL=index.js.map