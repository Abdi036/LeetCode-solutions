class Solution:
    def maxFreqSum(self, s: str) -> int:
        max_val_vowel = 0
        max_val_consonant = 0

        vowel_hash_map = {
            "a":0,
            "e":0,
            "i":0,
            "o":0,
            "u":0
        }
        consonant_hash_map = {
            "b": 0,
            "c": 0,
            "d": 0,
            "f": 0,
            "g": 0,
            "h": 0,
            "j": 0,
            "k": 0,
            "l": 0,
            "m": 0,
            "n": 0,
            "p": 0,
            "q": 0,
            "r": 0,
            "s": 0,
            "t": 0,
            "v": 0,
            "w": 0,
            "x": 0,
            "y": 0,
            "z": 0
        }

        for char in s:
            if char in vowel_hash_map:
                vowel_hash_map[char] += 1
            else:
                consonant_hash_map[char] += 1
        
        for key,val in vowel_hash_map.items():
            max_val_vowel = max(max_val_vowel,val)

        for key,val in consonant_hash_map.items():
            max_val_consonant = max(max_val_consonant,val)
        return max_val_vowel + max_val_consonant