import java.util.Map;
import java.util.HashMap;

class MajorityElement {
    public static int majorityElement(int[] nums) {
		// Time Complexity - O(n) | Space Complexity - O(n)
		/*
        Map<Integer, Integer> map = new HashMap<>();
		int count = 0;
		int maxEl = 0;

		for(int i = 0; i < nums.length; i++){
			map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
		}

		for(int i = 0; i < nums.length; i++){
			if(map.get(nums[i]) > nums.length / 2) return nums[i];
		}
        return maxEl;
        */

        // Moores Voting Algorithm
        // Time Complexity - O(N)
		int count = 0;
		int majEl = 0;

		for(int num : nums){
			if(count == 0) majEl = num;

			if(num == majEl) count += 1;
			else count -= 1;
		}
		return majEl;
    }
    public static void main(String[] args) {
        int[] nums = {3, 2, 3};
        //int[] nums = {2, 2, 1, 1, 1, 2, 2};
        //int[] nums = {8, 8, 7, 7, 7};

        System.out.println(majorityElement(nums));
	}
}