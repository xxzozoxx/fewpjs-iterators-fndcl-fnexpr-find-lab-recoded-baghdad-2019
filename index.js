const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arr) {
  arr=arr.find(function(w){
     return w['result'] === 'W';})
 return arr['year'];
}
