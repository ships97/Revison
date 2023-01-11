var arr=[]
for(var i=0; i<=202; i++)
{ let flag=true;
    let s="";
    s=s+i;
    for(let j=0; j<s.length; j++)
    {
        if(s[j]!==s[s.length-1-j])
        {
            flag =false;
            break;
        }
          
    }

    if(flag)
    {
        arr.push(i)
    }
}
console.log(arr)

