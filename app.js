let NumberArray = [1,5,6,22,10,20,11,32,12,7,4,190,221,280,6,8,10,20,77,55,0,5,10];
document.getElementById('s1').innerText = NumberArray
let sorting = NumberArray.sort()
console.log(sorting);
let extract1 = []
let extract2 = []
let extract3 = []
let n = [1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < NumberArray.length; i++) {
     for (let j = 0; j < n.length; j++) {
        if (NumberArray[i] == n[j]) {
            extract1.push(NumberArray[i])
        }
      
     }
     if(NumberArray[i] < 99 && NumberArray[i] > 9){
      extract2.push(NumberArray[i])
    }
     if(NumberArray[i] < 999 && NumberArray[i] > 99){
      extract3.push(NumberArray[i])
    }

}

console.log(extract1);
console.log(extract2);
console.log(extract3);

let finalResult = [...extract1 , ...extract2 , ...extract3]
document.getElementById('output').innerText = finalResult











