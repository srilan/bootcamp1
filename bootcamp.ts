interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber: string[];
    address?: string;
    email?: string;
}

const person: Person = {
    firstName: "Limuel",
    lastName: "Pogi",
    age: 18,
    phoneNumber: ["pang-feu", "pang-ust"],
    email: "limuel@limuel.com"
}


const person2: Person = {
    firstName: "Mike",
    lastName: "Daw",
    age: 18,
    phoneNumber: ["pang-7f", "pang-lawson", "pang-julies", "pang-jolibee", "pang-diwata"],
    email: "mike@mike.com"
}


const contacts: Person[] = [person, person2];

contacts[0].email = "limue@pogi.com"

const newCOntact: Person = {
    firstName: "Dante",
    lastName: "Gulapa",
    age: 18,
    phoneNumber: ["pang-troll", "pang-roast"],
    email: "dante@trashtalker.com"
}
const newContacts = contacts.map((a) => {
    a.lastName = "manipulated"
    return a;
})
while(contacts.length > 0) {
    contacts.pop()
}

console.log("PErson", contacts, newContacts)
