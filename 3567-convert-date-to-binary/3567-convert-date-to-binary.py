class Solution:
    def convertDateToBinary(self, date: str) -> str:
        dates = date.split("-")
        res = []
        
        for val in dates:
            binary = bin(int(val))[2:]
            res.append(binary)
        return "-".join(res)
            