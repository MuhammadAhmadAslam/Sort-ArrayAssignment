let NumberArray = [1,5,6,22,10,20,11,32,12,7,4,190,221,280,6,8,10,20,77,55,0,5,10];
let e1 = NumberArray.filter(NumberArray => NumberArray < 9)
let e2 = NumberArray.filter(NumberArray => NumberArray >= 9 && NumberArray <= 99);
let e3 = NumberArray.filter(NumberArray => NumberArray > 99 && NumberArray <= 999)
let e4 = NumberArray.filter(NumberArray => NumberArray > 999 && NumberArray <= 9999)
let e5 = NumberArray.filter(NumberArray => NumberArray > 9999 && NumberArray <= 99999)
let e6 = NumberArray.filter(NumberArray => NumberArray > 99999 && NumberArray <= 999999)
e1 = e1.sort()
e2 = e2.sort()
e3 = e3.sort()
e4 = e4.sort()
e5 = e5.sort()
e6 = e6.sort()
let finalResult1 = [...e1 , ...e2 , ...e3 , ...e4 , ...e5 , ...e6]
console.log(finalResult1);





// This is another Method 
document.getElementById('s1').innerText = NumberArray
let sorting = NumberArray.sort()
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
let finalResult = [...extract1 , ...extract2 , ...extract3]
document.getElementById('output').innerText = finalResult











