import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import java.util.Stack;

public class NextGreaterElement {
	public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
		// Time Complexity - O(n) | Space Complexity - O(n)
		Stack<Integer> st = new Stack<>();
	    HashMap<Integer, Integer> map = new HashMap<>();

	    for(int num : nums2) {
		  while(!st.isEmpty() && num > st.peek()) {
		    map.put(st.pop(), num);
		  }
		  st.add(num);
	    }

	    for(int i = 0; i < nums1.length; i++) {
		  nums1[i] = map.getOrDefault(nums1[i], - 1);
	    }
        return nums1;
    }
	public static void main(String[] args) {
		//int[] nums1 = {4, 1, 2};
		//int[] nums2 = {1, 3, 4, 2};

		int[] nums1 = {2, 4};
		int[] nums2 = {1, 2, 3, 4};

		System.out.println(Arrays.toString(nextGreaterElement(nums1, nums2)));
	}
}