import java.util.HashMap;

public class ValidAnagram{
	public static boolean validAnagram(String s1, String s2){
		//Time - O(nlogn) | Space - O(n)
		/*
		char[] sArr = s.toCharArray();
		char[] tArr = t.toCharArray();

		Arrays.sort(sArr);
		Arrays.sort(tArr);

        return Arrays.equals(sArr, tArr);
        */

        // ----------------------------------

        // Time - O(n) | Space - O(n)
        /*
		if(s1.length() != s2.length()) return false;

		char[] c1 = s1.toCharArray();
		char[] c2 = s2.toCharArray();
		HashMap<Character, Integer> map1 = new HashMap<>();
		HashMap<Character, Integer> map2 = new HashMap<>();

		for(int i = 0; i < c1.length; i++){
			if (map1.get(c1[i]) == null) {
				map1.put(c1[i], 1);
			}
			else {
				Integer count = (int) map1.get(c1[i]);
				map1.put(c1[i], ++count);
			}
		}

		for(int j = 0; j < c2.length; j++){
			if (map2.get(c2[j]) == null) {
				map2.put(c2[j], 1);
			}
			else {
				Integer count = (int) map2.get(c2[j]);
				map2.put(c2[j], ++count);
			}
		}

		if(map1.equals(map2)) return true;

		return false;
        */

        // ----------------------------------

        // Time - O(n) | Space - O(1)

		if(s1.length() != s2.length()) return false;

		int[] char_counts = new int[26];

		for (int i = 0; i < s1.length(); i++) {
			char_counts[s1.charAt(i) - 'a']++;
			char_counts[s2.charAt(i) - 'a']--;
		}

		for(int i = 0; i < char_counts.length; i++) {
			if(char_counts[i] != 0){
				return false;
			}
		}

		return true;
	}
	public static void main(String[] args){
		String s1 = "anagram";
		String s2 = "nagaram";

		//String s1 = "rat";
		//String s2 = "car";

		System.out.println(validAnagram(s1, s2));
	}
}