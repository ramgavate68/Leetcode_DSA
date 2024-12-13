const checkPlindrome=(n)=>{
    n = n.toString()
    let pn = n.split('').reverse().join('')
    if(pn == n){
        return true 
    }else{
        return false
    }
}
const res = checkPlindrome(-121)
console.log(res);
