const longestCommonPrefix = (strs)=> {
    let pf = strs[0].slice(0,2)
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].startsWith(pf)) {
             pf = strs[i].slice(0,2)
        }else{
             pf =" "
        }
    }
    return pf
};
const strs= ["dog","racecar","car"]
const res = longestCommonPrefix(strs)
console.log(res);
