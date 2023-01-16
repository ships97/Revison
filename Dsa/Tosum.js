function tosum(nums, target)
{
    let left=0;
    let right=nums.length-1;
    
    while(left<right)
    {
      sum=nums[left]+nums[right];
    
      if(sum==target)
      {
          return [left,right];
      }
       if(sum>target)
      {
          right--
      }
       if(sum<target)
      {
          left++
      }
    }
        
        
}

var nums = [2,7,11,15];
var target =9;

console.log(tosum(nums,target))
