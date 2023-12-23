class Solution {
    public boolean isPathCrossing(String path) {
        int x = 0;
        int y = 0;
        Set<String> curr =new HashSet<String>();
        curr.add("0,0");

        for(char ele : path.toCharArray()){
            if(ele == 'N') x++;
            else if(ele == 'S') x--;
            else if(ele == 'E') y++;
            else if(ele == 'W') y--; 

            String position = x+","+y;
            if(curr.contains(position)) return true;
            curr.add(position);
        }
        return false;
    }
}