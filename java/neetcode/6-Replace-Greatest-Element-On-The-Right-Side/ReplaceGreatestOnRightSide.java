import java.util.Arrays;

class ReplaceGreatestOnRightSide {
    public static int[] replaceElements(int[] arr) {
		// Time - O(n^2) || Space - O(n)
		/*
        int[] res = new int[arr.length];

        for(int i = 0; i < arr.length - 1; i++){
            int max = arr[i + 1];
            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] >= max) {
					max = arr[j];
					res[i] = arr[j];
				}
            }
        }
        res[arr.length - 1] = -1;

        return res;
        */

        int max = -1;

        for(int i = arr.length - 1; i >= 0; i--){
			//System.out.println("arr[i] : " + arr[i] + " max : " + max);
			if(arr[i] > max) {
				int temp = max;
				max = arr[i];
				arr[i] = temp;
			}
			else {
				arr[i] = max;
			}
			//System.out.println(Arrays.toString(arr));
		}
		return arr;
    }
    public static void main(String[] args){
		//int[] arr = {17, 18, 5, 4, 6, 1};
		//int[] arr = {400};
		int[] arr = {56903, 18666, 60499, 57517, 26961};

		System.out.println(Arrays.toString(replaceElements(arr)));
	}
}