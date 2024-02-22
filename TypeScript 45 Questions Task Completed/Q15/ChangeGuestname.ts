// Exercise 15 With Some Changing In Guest List 

let guestList: string[] = ["Danish", "Yasir", "Faheem", "Salar", "Ali", "Yaseen"];

guestList.forEach((Guest) => {
    console.log(`Hey Mr ${Guest}! Please Come at my house eating dinner Thanks.`)
});

// but after invitation we realized that oe from this guest will not come so we make some changes in list

let indexOfAli =guestList.indexOf("Ali");
if (indexOfAli !== -1){
    guestList[indexOfAli]="Sarim"
};


guestList.forEach((Guest) => {
    console.log(`Hey Mr ${Guest}! Please Come at my house eating dinner Thanks.(New List)`)
});


