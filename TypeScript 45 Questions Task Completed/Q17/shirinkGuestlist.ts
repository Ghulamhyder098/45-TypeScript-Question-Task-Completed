// Exercise 17 Shirinking Guest 

let guestList: string[] = ["Danish", "Yasir", "Faheem", "Salar", "Ali", "Yaseen"];

for(let i=0;i<=3;i++){
    guestList.pop()
    
}

// This is last two people who are invited 

console.log(guestList);

// here the list is empty 

for (let i=0;i<=1;i++){
    guestList.pop()
}
console.log(guestList);
