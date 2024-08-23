const data = [
    {
        "id": 1021,
        "title": "Remove Outermost Parentheses",
        "difficulty": "Easy",
        "problem_description": "A valid parentheses string is either empty, \"()\", or can be formed by concatenating valid parentheses strings. A valid parentheses string `s` is primitive if it is nonempty and cannot be split into two nonempty valid parentheses strings. Given a valid parentheses string `s`, the task is to remove the outermost parentheses of every primitive string in its primitive decomposition.",
        "solution": "class Solution {\n    public String removeOuterParentheses(String s) {\n        int balance = 0;\n        StringBuilder str = new StringBuilder();\n        for (char i : s.toCharArray()) {\n            if (i == '(') {\n                if (balance > 0) {\n                    str.append(i);\n                }\n                balance++;\n            } else if (i == ')') {\n                balance--;\n                if (balance > 0) {\n                    str.append(i);\n                }\n            }\n        }\n        return str.toString();\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(n)",
        "test_cases": [
            {
                "input": "(()())(())",
                "expected_output": "()()()",
                "explanation": "The outermost parentheses are removed from the primitives: \"()\", \"()\", \"()\"."
            }
        ],
        "brief_explanation": "The solution uses a balance counter to track the depth of parentheses. The outermost parentheses are identified by checking when the balance returns to zero, and only the inner parentheses are kept."
    },
    {
        "id": 151,
        "title": "Reverse Words in a String",
        "difficulty": "Medium",
        "problem_description": "Given an input string `s`, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.",
        "solution": "class Solution {\n    public String reverseWords(String s) {\n        s = s.trim();\n        String[] chars = s.split(\"\\s+\");\n        int left = 0;\n        int right = chars.length - 1;\n        while (left < right) {\n            String temp = chars[left];\n            chars[left] = chars[right];\n            chars[right] = temp;\n            left++;\n            right--;\n        }\n        return String.join(\" \", chars);\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(n)",
        "test_cases": [
            {
                "input": "  hello world  ",
                "expected_output": "world hello",
                "explanation": "Leading and trailing spaces are trimmed, then the words are reversed and joined with a single space."
            }
        ],
        "brief_explanation": "The solution trims the input string, splits it into words, reverses the array of words, and then joins them back together with a single space."
    },
    {
        "id": 1903,
        "title": "Largest Odd Number in String",
        "difficulty": "Easy",
        "problem_description": "You are given a string `num`, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of `num`, or an empty string `\"\"` if no odd integer exists. A substring is a contiguous sequence of characters within a string.",
        "solution": "class Solution {\n    public String largestOddNumber(String num) {\n        int len = num.length() - 1;\n        while (len >= 0) {\n            int d = num.charAt(len) - '0';\n            if (d % 2 != 0) {\n                return num.substring(0, len + 1);\n            }\n            len--;\n        }\n        return \"\";\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(1)",
        "test_cases": [
            {
                "input": "35427",
                "expected_output": "35427",
                "explanation": "The largest odd number substring is \"35427\"."
            }
        ],
        "brief_explanation": "The solution iterates through the string from the end, checking if each character is an odd digit. It returns the substring from the start to the first odd digit found."
    },
    {
        "id": 14,
        "title": "Longest Common Prefix",
        "difficulty": "Easy",
        "problem_description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
        "solution": "import java.util.Arrays;\n\nclass Solution {\n    public String longestCommonPrefix(String[] strs) {\n        StringBuilder ans = new StringBuilder();\n        Arrays.sort(strs);\n        char[] first = strs[0].toCharArray();\n        char[] last = strs[strs.length - 1].toCharArray();\n        for (int i = 0; i < first.length; i++) {\n            if (first[i] != last[i]) {\n                break;\n            }\n            ans.append(first[i]);\n        }\n        return ans.toString();\n    }\n}",
        "time_complexity": "O(n log n)",
        "space_complexity": "O(1)",
        "test_cases": [
            {
                "input": ["flower", "flow", "flight"],
                "expected_output": "fl",
                "explanation": "The common prefix among all strings is \"fl\"."
            }
        ],
        "brief_explanation": "The solution sorts the array of strings and then compares the first and last strings in the sorted order to find the common prefix."
    },
    {
        "id": 205,
        "title": "Isomorphic Strings",
        "difficulty": "Easy",
        "problem_description": "Given two strings `s` and `t`, determine if they are isomorphic. Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
        "solution": "import java.util.HashMap;\n\nclass Solution {\n    public boolean isIsomorphic(String s, String t) {\n        if (s.length() != t.length()) {\n            return false;\n        }\n        HashMap<Character, Character> map = new HashMap<>();\n        for (int i = 0; i < s.length(); i++) {\n            char charS = s.charAt(i);\n            char charT = t.charAt(i);\n            if (map.containsKey(charS)) {\n                if (map.get(charS) != charT) {\n                    return false;\n                }\n            } else {\n                if (map.containsValue(charT)) {\n                    return false;\n                }\n                map.put(charS, charT);\n            }\n        }\n        return true;\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(1)",
        "test_cases": [
            {
                "input": ["egg", "add"],
                "expected_output": true,
                "explanation": "The mapping from `s` to `t` is consistent."
            }
        ],
        "brief_explanation": "The solution uses a hashmap to track character mappings from `s` to `t` and checks for consistency throughout the strings."
    },
    {
        "id": 796,
        "title": "Rotate String",
        "difficulty": "Easy",
        "problem_description": "Given two strings `s` and `goal`, return true if and only if `s` can become `goal` after some number of shifts on `s`. A shift on `s` consists of moving the leftmost character of `s` to the rightmost position. For example, if `s = \"abcde\"`, then it will be \"bcdea\" after one shift.",
        "solution": "class Solution {\n    public boolean rotateString(String s, String goal) {\n        if (s.length() != goal.length()) {\n            return false;\n        }\n        int n = s.length();\n        for (int i = 0; i < n; i++) {\n            if (s.equals(goal.substring(i) + goal.substring(0, i))) {\n                return true;\n            }\n        }\n        return false;\n    }\n}",
        "time_complexity": "O(n^2)",
        "space_complexity": "O(1)",
        "test_cases": [
            {
                "input": ["abcde", "cdeab"],
                "expected_output": true,
                "explanation": "After 3 shifts, \"abcde\" becomes \"cdeab\", which matches `goal`."
            }
        ],
        "brief_explanation": "The solution checks all possible rotations of `s` to see if any of them match `goal`."
    },
    {
        "id": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy",
        "problem_description": "Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) {\n            return false;\n        }\n        Map<Character, Integer> mp = new HashMap<>();\n        for (char i : s.toCharArray()) {\n            mp.put(i, mp.getOrDefault(i, 0) + 1);\n        }\n        for (char i : t.toCharArray()) {\n            if (!mp.containsKey(i)) {\n                return false;\n            }\n            mp.put(i, mp.get(i) - 1);\n            if (mp.get(i) == 0) {\n                mp.remove(i);\n            }\n        }\n        return mp.isEmpty();\n    }\n}",
        "time_complexity": "O(n)",
        "space_complexity": "O(1)",
        "test_cases": [
            {
                "input": ["anagram", "nagaram"],
                "expected_output": true,
                "explanation": "The characters in `s` can be rearranged to form `t`."
            }
        ],
        "brief_explanation": "The solution uses a hashmap to count the frequency of each character in `s` and then decrements the count while iterating through `t`. If the hashmap is empty at the end, `t` is an anagram of `s`."
    }
]


export default data;