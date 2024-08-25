const data = [
    {
        "id": 1,
        "link":"https://leetcode.com/problems/binary-search/",
        "title": "Binary Search",
        "difficulty": "Easy",
        "problem_description": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
        "test_cases": [
          {
            "input": "nums = [-1,0,3,5,9,12], target = 9",
            "expected_output": 4,
            "explanation": "9 exists in nums and its index is 4."
          },
          {
            "input": "nums = [-1,0,3,5,9,12], target = 2",
            "expected_output": -1,
            "explanation": "2 does not exist in nums so return -1."
          }
        ],
        "solutions": [
          {
            "type": "optimal",
            "code": "class Solution {\n    public int search(int[] nums, int target) {\n        int n = nums.length;\n        int low = 0;\n        int high = n - 1;\n\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (nums[mid] == target) {\n                return mid;\n            } else if (nums[mid] < target) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n        return -1;\n    }\n}",
            "time_complexity": "O(log n)",
            "space_complexity": "O(1)",
            "brief_explanation": "The solution uses binary search, which is efficient for searching in a sorted array. The algorithm repeatedly divides the search interval in half, eliminating half of the array elements each time, resulting in a logarithmic time complexity."
          }
        ]
      },

      {
        "id": 2,
        "link":"https://leetcode.com/problems/search-insert-position/description/",
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "problem_description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\n\nYou must write an algorithm with O(log n) runtime complexity.",
        "test_cases": [
          {
            "input": "nums = [1,3,5,6], target = 5",
            "expected_output": 2,
            "explanation": "The target 5 is found at index 2."
          },
          {
            "input": "nums = [1,3,5,6], target = 2",
            "expected_output": 1,
            "explanation": "The target 2 is not found, but it would be inserted at index 1."
          },
          {
            "input": "nums = [1,3,5,6], target = 7",
            "expected_output": 4,
            "explanation": "The target 7 is not found, but it would be inserted at index 4."
          }
        ],
        "solutions": [
          {
            "type": "optimal",
            "code": "class Solution {\n    public int searchInsert(int[] nums, int x) {\n        int n = nums.length;\n        int low = 0;\n        int high = n - 1;\n        int ans = -1;\n\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (nums[mid] >= x) {\n                ans = mid;\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        }\n        return ans;\n    }\n}",
            "time_complexity": "O(log n)",
            "space_complexity": "O(1)",
            "brief_explanation": "The solution uses binary search to find the target or the position where it should be inserted. By checking the middle element and adjusting the search bounds accordingly, the algorithm efficiently narrows down the potential position in logarithmic time."
          }
        ]
      },
      {
        "id": 3,
        "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/",
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Medium",
        "problem_description": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.",
        "test_cases": [
            {
                "input": "nums = [5,7,7,8,8,10], target = 8",
                "expected_output": "[3,4]",
                "explanation": "The target 8 is found at indices 3 and 4."
            },
            {
                "input": "nums = [5,7,7,8,8,10], target = 6",
                "expected_output": "[-1,-1]",
                "explanation": "The target 6 is not found in the array."
            },
            {
                "input": "nums = [], target = 0",
                "expected_output": "[-1,-1]",
                "explanation": "The target 0 is not found as the array is empty."
            }
        ],
        "solutions": [
            {
                "type": "optimal",
                "code": "class Solution {\n    public int[] searchRange(int[] arr, int target) {\n        // first element\n        int first = -1;\n        for(int i = 0; i < arr.length; i++){\n            if(arr[i] == target){\n                first = i;\n            }\n        }\n\n        int last = -1;\n        for(int i = arr.length - 1; i >= 0; i--){\n            if(arr[i] == target){\n                last = i;\n            }\n        }\n\n        int ans[] = new int[2];\n        ans[0] = last;\n        ans[1] = first;\n        return ans;\n    }\n}",
                "time_complexity": "O(n)",
                "space_complexity": "O(1)",
                "brief_explanation": "The solution iterates through the array twice to find the first and last occurrence of the target. Though it works, it's not an O(log n) solution."
            }
        ]
    },
    {
      "id": 4,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/description/",
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "problem_description": "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
      "test_cases": [
          {
              "input": "nums = [4,5,6,7,0,1,2], target = 0",
              "expected_output": 4,
              "explanation": "The target 0 is found at index 4."
          },
          {
              "input": "nums = [4,5,6,7,0,1,2], target = 3",
              "expected_output": -1,
              "explanation": "The target 3 is not found in the array."
          },
          {
              "input": "nums = [1], target = 0",
              "expected_output": -1,
              "explanation": "The target 0 is not found as the array contains only one element."
          }
      ],
      "solutions": [
          {
              "type": "optimal",
              "code": "class Solution {\n    public int search(int[] arr, int target) {\n        int low = 0;\n        int high = arr.length - 1;\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (arr[mid] == target) {\n                return mid;\n            }\n            if (arr[low] <= arr[mid]) {\n                if (arr[low] <= target && target <= arr[mid]) {\n                    high = mid - 1;\n                } else {\n                    low = mid + 1;\n                }\n            } else {\n                if (arr[mid] <= arr[high]) {\n                    if (arr[mid] <= target && target <= arr[high]) {\n                        low = mid + 1;\n                    } else {\n                        high = mid - 1;\n                    }\n                }\n            }\n        }\n        return -1;\n    }\n}",
              "time_complexity": "O(log n)",
              "space_complexity": "O(1)",
              "brief_explanation": "The optimal solution uses binary search to find the target by determining whether the left or right half of the array is sorted and then narrowing down the search range accordingly."
          },
          {
              "type": "brute_force",
              "code": "class Solution {\n    public int search(int[] nums, int target) {\n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}",
              "time_complexity": "O(n)",
              "space_complexity": "O(1)",
              "brief_explanation": "The brute force solution iterates through the entire array to find the target, which results in a linear time complexity."
          }
      ]
  },
  {
    "id": 5,
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/",
    "title": "Search in Rotated Sorted Array II",
    "difficulty": "Medium",
    "problem_description": "There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values). Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4]. Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums. You must decrease the overall operation steps as much as possible.",
    "test_cases": [
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 0",
        "expected_output": true,
        "explanation": "The target 0 is present in the array."
      },
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 3",
        "expected_output": false,
        "explanation": "The target 3 is not present in the array."
      }
    ],
    "solutions": [
      {
        "type": "optimal",
        "code": "class Solution {\n    public boolean search(int[] arr, int target) {\n        int low = 0;\n        int high = arr.length - 1;\n\n        while (low <= high) {\n            int mid = (low + high) / 2;\n\n            if (arr[mid] == target) {\n                return true;\n            }\n            if (arr[low] == arr[mid] && arr[mid] == arr[high]) {\n                low++;\n                high--;\n                continue;\n            }\n            if (arr[low] <= arr[mid]) {\n                if (arr[low] <= target && target <= arr[mid]) {\n                    high = mid - 1;\n                } else {\n                    low = mid + 1;\n                }\n            } else {\n                if (arr[mid] <= arr[high]) {\n                    if (arr[mid] <= target && target <= arr[high]) {\n                        low = mid + 1;\n                    } else {\n                        high = mid - 1;\n                    }\n                }\n            }\n        }\n        return false;\n    }\n}",
        "time_complexity": "O(log n)",
        "space_complexity": "O(1)",
        "brief_explanation": "The solution uses a modified binary search to handle the rotated array with possible duplicates. It checks for the target in different sections of the array based on sorted subarrays and adjusts search bounds accordingly."
      },
      {
        "type": "brute_force",
        "code": "class Solution {\n    public boolean search(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) {\n                return true;\n            }\n        }\n        return false;\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(1)",
        "brief_explanation": "The brute force solution iterates through the entire array to find the target. It checks each element until it finds the target or reaches the end of the array."
      }
    ]
  }
  
  

    
      
      
]
const sort = data.sort((a, b) => a.id - b.id);

export default sort;