//saxelis sigrdzis funqcia

function Namelenght (name)  {
    return  name.length;
}
console.log(`saxelis sigrdze:`);
console.log(Namelenght(`oto`));


//momxmareblis misamarti, shriftis shecvl da didi asoebit dabruneba terminalshi 

function gavadidotaddress (address) {

    return address.toUpperCase();

}

console.log(gavadidotaddress("gadideba:" + "tbilisi , georgia"))





//mesame etapi




function bothfunction (Namelenght, gavadidotaddress, user) {

    console.log();
}




// ობიექტი


// 3. მესამე ეტაპი //

const user = {
    id: 208,
    username: "oto",
    email: "mukhylishviliotari@gmail.com",
    age: 28,
    isActive: true,
    address: "vejini,gurjaani",
    country: "Georgia",
    city: "tbilisi",
    role: "user",
    level: "beginner",
    theme: "dark",
    emailNotifications: true,
    lastLogin: "2026-01-08",
};

function bothfunction(nameFunc, addressFunc, userObj) {

    const nameLengthResult = nameFunc(userObj.username);
    const addressResult = addressFunc(userObj.address);

    const result = {
        nameLength: nameLengthResult,
        addressUpper: addressResult
    };

    return result;
}

// გამოძახება
const finalResult = bothfunction(Namelenght, gavadidotaddress, user);

console.log(finalResult);

