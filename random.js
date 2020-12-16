/* C for Zeyad Ajamy -- 2020 --
  How To use:
  ------------
   +  [YOur ITemS].random(Max Num in the group)
*/
Array.prototype.random = function(x){
  let final  = [];
  let totalRand =  
    this.sort(_=>{
        return Math.random() -0.5
    })
    for (let i =0; i<=totalRand.length/x; i++){
      final.push(totalRand.splice(0, x))
    }
    if(totalRand.length != 0){
      final.push(totalRand)
    }
    return final;
};
