const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arr) {
  let findWin = arr.find(function(w){
     return w['result'] === 'W';})
  if(arr['result'] === undefined){
    return arr;
  }
 return arr['year'];
}
