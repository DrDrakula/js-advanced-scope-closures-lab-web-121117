function produceDrivingRange(blocks){
  return function(x, y){
    if(parseInt(x) + blocks > parseInt(y)){
      return `within range by ${(parseInt(x) + blocks) - parseInt(y)}`
    }else{
      return `${parseInt(y) - (parseInt(x) + blocks)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(tip){
    return tip * percentage
  }
}
