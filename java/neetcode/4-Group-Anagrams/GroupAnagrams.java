import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class GroupAnagrams{
	public static List<List<String>> groupAnagrams(String[] strs) {
		Map<String, List<String>> map = new HashMap<>();

		for (String str : strs) {
			char[] chars = str.toCharArray();
			Arrays.sort(chars);
			String sortedStr = new String(chars);


			if (!map.containsKey(sortedStr)) {
				map.put(sortedStr, new ArrayList<>());
			}
			map.get(sortedStr).add(str);
		}
		return new ArrayList<>(map.values());
    }
	public static void main(String[] args){
		String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
		//String[] strs = {""};
		//String[] strs = {"a"};

		System.out.println(groupAnagrams(strs));
	}
}