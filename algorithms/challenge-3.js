function sumMix(arr) {
    let sum=0;
    let inOnlyArr = arr.map((item)=>{return parseInt(item,10);});
    inOnlyArr.map((item)=>{return sum+=item;})
    return sum;
   
 }

  module.exports = sumMix
  console.log(sumMix([1,"1", "6"]));