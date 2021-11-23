function longestConsecutive(nums: number[]): number {
    if (nums.length < 1) { return 0; }
    
    //create a new set to remove dupes
    let newSet = new Set([...nums]);
    console.log(newSet)
    //set up a counter for the longest sequence
    let longest = 0;
    //loop through the set
    for (let num of newSet) {
        //set the current longest seq to one
        let current = 1;
        console.log(num)
        //if the set has num - 1, continue
        if (newSet.has(num - 1)) {
            continue
        }
        //loop through the nums while set has num + 1
        while(newSet.has(num + 1)) {
            //increment both num and current
            current++;
            num++
        }
        //longest will be the max of current and longest
        longest = Math.max(current, longest);
    }
    return longest
    
};