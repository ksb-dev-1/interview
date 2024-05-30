class LengthOfLastWord {
    public static int lengthOfLastWord(String s) {
        char[] c = s.trim().toCharArray();
		int count = 0;

		for(int i = c.length - 1; i >= 0; i--) {
			if(c[i] != ' ') count++;
			else break;
		}
        return count;
    }
    public static void main(String[] args){
		System.out.println(lengthOfLastWord("   fly me   to   the moon  "));
	}
}