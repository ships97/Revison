let arr=[1,4,5,5,6,6,8,9,6,3,3,3,3,3,3];


let obj={}

for(var i=0; i<arr.length; i++)
{
  if(obj[arr[i]]==undefined)
  {
      obj[arr[i]]=1;
  }
  obj[arr[i]]=obj[arr[i]]+1;
}
console.log(obj);