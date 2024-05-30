class PivotIndex {
    public static int pivotIndex(int[] nums) {
        int total_sum = 0;
		int left_sum = 0;

		for(int i = 0; i < nums.length; i++) {
			total_sum += nums[i];
		}

		for(int i = 0; i < nums.length; i++) {
			if(i != 0) left_sum += nums[i-1];

			if(left_sum == (total_sum - left_sum - nums[i])) {
				return i;
			}
		}
		return -1;
    }
    public static void main(String[] args) {
		//int[] nums = {1, 7, 3, 6, 5, 6};
		int[] nums = {2, 1, -1};

		System.out.println(pivotIndex(nums));
	}
}