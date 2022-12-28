// LeetCode Data Structure
// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/713/interviews-and-tools/4545/

//Two pointers: one input, opposite ends
let fn1 = (arr) => {
  let left = 0,
    ans = 0,
    right = arr.length - 1;

  while (left < right) {
    if (CONDITION) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

// Two pointers: two inputs, exhaust both
let fn2 = (arr1, arr2) => {
  let i = 0,
    j = 0,
    ans = 0;

  while (i < arr1.length && j < arr2.length) {
    // do some logic here
    if (CONDITION) {
      i++;
    } else {
      j++;
    }
  }

  while (i < arr1.length) {
    // do logic
    i++;
  }

  while (j < arr2.length) {
    // do logic
    j++;
  }

  return ans;
};

// Sliding window
let fn3 = (arr) => {
  let left = 0,
    ans = 0,
    curr = 0;

  for (let right = 0; right < arr.length; right++) {
    // do logic here to add arr[right] to curr

    while (WINDOW_CONDITION_BROKEN) {
      // remove arr[left] from curr
      left++;
    }

    // update ans
  }

  return ans;
};

// Build a prefix sum
let fn4 = (arr) => {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }

  return prefix;
};

// Efficient string building
// arr is a list of characters
let fn5 = (arr) => {
  let ans = [];
  for (const c of arr) {
    ans.push(c);
  }

  return ans.join("");
};

let fn = (arr) => {
  let ans = "";
  for (const c of arr) {
    ans += c;
  }

  return ans;
};

// Linked list: fast and slow pointer
let fn6 = (head) => {
  let slow = head;
  let fast = head;
  let ans = 0;

  while (fast && fast.next) {
    // do logic
    slow = slow.next;
    fast = fast.next.next;
  }

  return ans;
};
