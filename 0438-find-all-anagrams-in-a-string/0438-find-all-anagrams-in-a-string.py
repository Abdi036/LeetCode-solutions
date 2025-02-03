class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        pCounter = {}
        sCounter = {}

        if len(s) < len(p):
         return res 
        
        for i in range(len(p)):
            if p[i] in pCounter:
                pCounter[p[i]] += 1
            else:
                pCounter[p[i]] = 1
            if s[i] in sCounter:
                sCounter[s[i]] += 1
            else:
                sCounter[s[i]] = 1

        for i in range(len(p),len(s)):
            if sCounter == pCounter:
                res.append(i - len(p))
            
            sCounter[s[i]] = sCounter.get(s[i],0) + 1
            sCounter[s[i - len(p)]] -= 1

            if sCounter[s[i - len(p)]] == 0:
                del sCounter[s[i - len(p)]]
        if sCounter == pCounter:
          res.append(len(s) - len(p))
        return res
        


