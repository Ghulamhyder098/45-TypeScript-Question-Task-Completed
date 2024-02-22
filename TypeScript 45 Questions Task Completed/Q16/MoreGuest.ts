// Exercise 16 With More Guest Add in List

let guestList: string[] = ["Danish", "Yasir", "Faheem", "Salar", "Ali", "Yaseen"];

let moreGuest:string[] = ["Tayab","Benz","Rahul"];

// let Add one new guest to the beginning of your array.
guestList.push(moreGuest[0]);

// let Add one new guest in the middle of your array.
guestList.splice(3,0,moreGuest[1]);


// let Add one new guest in last of your array.
guestList.unshift(moreGuest[2]);

console.log(guestList)
