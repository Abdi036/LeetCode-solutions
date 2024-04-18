/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let width;
    let area;
    let maxima = 0;

    while(left < right){
        
        width = right - left
        area = Math.min(height[right],height[left]) * width;
        maxima = Math.max(maxima,area);

        if(height[left] <= height[right]){
            left++
        }else{
            right--
        }
    }
    return maxima;
};