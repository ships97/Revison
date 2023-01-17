function abc(x)
{
    
    var bag="";
    bag=bag+x;
     var ans="";

    
    
    
  if(x>=0)
     {
         
    for(var i=bag.length-1; i>=0; i--)
        {                          
            
            ans=ans+bag[i]
        }
         ans;
     }
    else{
        
            ans=ans+"-"
        for(var i=bag.length-1; i>0; i--)
        {                          
            
            ans=ans+bag[i]
        }
        
    
 
          ans;
       
   
     }
    
    var y=+(ans)

var pow=2147483648;

   
    if(y>-pow && y<pow-1)
        {
            return ans;
        }
        else{
            return 0;
        }
}

console.log(abc(1263))