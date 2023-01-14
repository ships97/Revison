

let nums = [1,3,5,6], target = 5

var min=0;
    var max=nums.length-1;
    
    
    while(min<=max)
        {
            
            let midpoint=Math.floor((min+max)/2);
            
            if(nums[midpoint]<target)
                {
                    min=midpoint+1;
                }
            else if(nums[midpoint]>target)
                {
                    max=midpoint-1
                }
            else{
                return midpoint
            }
            
        }
   
    return nums.length