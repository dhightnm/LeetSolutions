/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //set a result var
    let result = 0;
    //set pointers
    let left = 0;
    let right = height.length - 1;
    
    //set a condition that we will check as we point through the "blocks";
    
    while (left < right) {
        //find the smaller of the two pointers
        let smallest = Math.min(height[left], height[right]);
        //define the water area
        let area = (right - left) * smallest;
        console.log(area)
        //set the result to the total area
        if (area > result) { result = area };
        //move pointers to look for larger area
        
        if (height[left] < height[right]) {
            left ++
        } else {
            right --;
        }
    };
    return result;
};