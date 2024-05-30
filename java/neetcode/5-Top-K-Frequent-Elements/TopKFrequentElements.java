import java.util.*;

public class TopKFrequentElements {
	public static int[] topKFrequent(int[] nums, int k){
		Map<Integer, Integer> freqMap = new HashMap<>();
		for (int num : nums) {
			freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
		}

		PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
			(a, b) -> b.getValue() - a.getValue());

		pq.addAll(freqMap.entrySet());

		int[] result = new int[k];
		for (int i = 0; i < k; i++) {
			result[i] = pq.poll().getKey();
		}
        return result;
	}
	public static void main(String[] args){
		int[] nums = {1, 1, 1, 1, 2, 2, 3};
		int k = 2;

		//int[] nums = {1};
		//int k = 1;

		System.out.println(Arrays.toString(topKFrequent(nums, k)));
		//topKFrequent(nums, k);
	}
}