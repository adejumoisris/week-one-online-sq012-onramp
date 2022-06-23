function sumTwoSmallestNums(arr) {
    let sum=0;
    let filteredArr=arr.filter((elem)=> {return elem>0;});
    let sortedFilteredArr=filteredArr.sort((a,b)=>{ return a-b});
    sum=sortedFilteredArr[0]+sortedFilteredArr[1];
    return sum;
    
 
 }
  module.exports =sumTwoSmallestNums

  console.log(sumTwoSmallestNums([0,-2,-1,-20,2,3,1,1,23]));
  