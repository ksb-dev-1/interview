import java.util.Arrays;
import java.util.HashMap;

public class TwoSum{
	public static int[] twoSum(int[] nums, int target) {
		// Time - O(n) | Space - O(n)
		HashMap<Integer, Integer> map = new HashMap<>();
		int[] indices = new int[2];

		for(int i = 0; i < nums.length; i++){
			int remainder = target - nums[i];

			if(map.containsKey(remainder)){
				indices[0] = map.get(remainder);
				indices[1] = i;
				return indices;
			}
			map.put(nums[i], i);
		}
		return indices;
	}
	public static void main(String[] args){
		int[] nums = {2, 7, 11, 15};
		int target = 9;

		//int[] nums = {3, 2, 4};
		//int target = 6;

		//int[] nums = {3, 3};
		//int target = 6;

		System.out.println(Arrays.toString(twoSum(nums, target)));
	}
}