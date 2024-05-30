class IsSubsequence {
    public static boolean isSubsequence(String s, String t) {
		int i = 0, j = 0;
		while (i < s.length() && j < t.length()) {
			if (s.charAt(i) == t.charAt(j)) {
				i++;
			}
			j++;
		}
        return i == s.length();
    }
    public static void lengthOfLastWord(String s){
		char[] c = s.trim().toCharArray();
		int count = 0;

		for(int i = c.length - 1; i >= 0; i--) {
			System.out.println(c[i]);
			if(c[i] != ' ') count++;
			else break;
		}
		System.out.println(count);
	}
    public static void main(String[] args){
		//String s = "abc";
		//String t = "ahbgdc";

		String s = "acb";
		String t = "ahbgdc";

		//String s = "axc";
		//String t = "ahbgdc";

		lengthOfLastWord("   fly me   to   the moon  ");

		//System.out.println(isSubsequence(s, t));
	}
}