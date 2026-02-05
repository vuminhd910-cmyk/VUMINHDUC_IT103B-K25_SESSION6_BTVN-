let Students = ["Quý","Nam","Lan","Hùng","Nam"]; 
 let joinedStudents = Students.join(", ");
 console.log("joinedStudents: " , joinedStudents);
       
for(let i = 0; i < Students.length; i++) {
    if(Students[i] === "Lan"){
        console.log("Tên Lan tồn tại trong mảng"); 
        break; 
    } else{
        console.log("Tên Lan không tồn tại trong mảng");
        break; 
    } 
} 
 for(let i = 0; i < Students.length; i++) {
    if(Students[i] === "Nam"){
        console.log("Vị trí của Nam trong mảng là: " , i);  
    } 
 } 




 let moneyArray = [100, 200, 300, 400, 500];
 for(const money of moneyArray) {
    console.log("Số tiền: " , money); 
 }
    for(const money in moneyArray) {
        console.log("Vị trí của số tiền trong mảng: " , money); 
    }

    let total = 0;
    for(let i = 0; i < moneyArray.length; i++) {
        if(moneyArray[i] % 2 === 0) {
            total = total + moneyArray[i]; 
        } else{
            continue;
        }
    }
    console.log("Tổng số tiền chẵn trong mảng là: " , total); 