class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        hash_set = set()
        res = ""
        order_char = [char for char in key.replace(" ","") if not(char in hash_set or hash_set.add(char))]
        
        hash_map = {}
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
        for i,char in enumerate(order_char):
            if i < len(alphabet):
                hash_map[char] = alphabet[i]
        for char in message:
            res += hash_map.get(char,char)
        return res
            
