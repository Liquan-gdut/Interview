/**
  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
  你可以按任意顺序返回答案。
  示例 1：

  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
  示例 2：

  输入：nums = [3,2,4], target = 6
  输出：[1,2]
  示例 3：

  输入：nums = [3,3], target = 6
  输出：[0,1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 总结：有的时候，中文不好描述出来，通过数字、过程、绘图，反而能得出结果
var twoSum = function(nums, target) {
  const obj = {}; // 记住每一次遍历
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if ((target - num) in obj) {
          return [obj[target - num], i];
      }
      obj[num] = i;
  }
  // nums.forEach((num, idx) => {
  //     if (num in obj) {
  //         return [obj[num], idx]; // !注意：在forEach中return不会终止循环
  //     } else {
  //         obj[target-num] = idx;
  //     }
  // });
};
