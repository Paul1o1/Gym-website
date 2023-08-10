// function nextInLine(arr, item){
//     arr.push(item);
//     arr.shift(item);

//     return item;
// }
// var testArr = [1,2,3,4,5]

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: "+ JSON.stringify(testArr))
// var comparison = ["greater than", "less than", "equal"];
//  function checkalue(a){
//  if(a > 3){
//     return comparison[0]
//  }else if( a < 3){
//     return comparison[1]
//  }
//  else{
//     return comparison[2]
//  }
// }
// console.log(checkalue(-2));
// function caseInSwitch(val){
//     var answer = "";
// switch (val) {
//     case (val == 1):
//         answer = "one";
//         break;
//     case 2:
//         answer = "two";
//         break;
   
// }
// return answer;
// }
// console.log(caseInSwitch("one"));
 

// function chainToSwitch(val){
//     var answer = "";
// switch (val) {
//     case (val = "bob"):
//         answer = "marley";
//         break;

//     case (val === 42):
//         answer = "The Answer";
        
//         break;
//     case 1:
//         answer = "there is no #1";
//         break;
//         case 99:
//         answer = "Miss me by this much";
//         break;
//     case 7:
//         answer = "Ate nine";
//         break;
//     default: "wrong";
//         break;
//  }
//  return answer;
// }
// var d = chainToSwitch(7)


var count = 0;
function cc(card){
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
             count++;
             break;
        case "J":
        case "Q":
        case "K":
        case "A":
        case "10":
            count--; 
            break;
    
    }
    var holdbet = "Hold";
    if(count > 0){
        holdbet = "bet";
    }
    return count + " " + holdbet;
}

cc(4); cc("A"); cc(4); cc("A"); cc("J"); 
console.log(cc("B"))

//build objects//
var myDog = {
     22 : "Brownie",
    "legs": 3,
    "tail": 1
}
var dogName = myDog[22];
myDog["bark"] = "woof";
myDog

function checkObj(checkProp){
    if(myDog.hasOwnProperty(checkProp)){
        return myDog[checkProp]
    }
    else {
        return "not found"
    }
}
console.log(checkObj("name"))
 
function opossiteLookup(val){
    var result;

    var lookup = {
        "big": "small",
        "fat": "thin",
        "fast": "slow"
    };
    result = lookup[val]

    return result;
}
  
console.log(opossiteLookup("big"))