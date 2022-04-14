class Solution {
    public int solution(int[] a, int[] b) {
        int result = 0;
        if(a.length == b.length){
            for(int i = 0 ; i < a.length ; i++){
                result+= a[i]*b[i];
            }
        }
        return result;
    }
}
