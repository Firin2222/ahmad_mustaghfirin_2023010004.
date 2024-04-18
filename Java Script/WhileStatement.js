let str = " "; 
let idx = 0; 
loop: 
for (idx; idx<5; idx++){ 
if (idx===1){ 
continue loop; 
} 
str = str + idx; 
console.log(str); 
} 