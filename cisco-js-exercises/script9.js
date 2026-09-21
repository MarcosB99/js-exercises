let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let isOver = true;

while (isOver) {
    let response = Number(
        prompt(
            `Choose one of the following options:
            1. Show the first contact.
            2. Show the last contact.
            3. Show all contacts.
            4. Add a new contact.
            5. Exit the program.
            
            (Enter the number of the option)`
        ));

    if (!Number.isNaN(response)) {
        switch (response) {
            case 1:
                alert(`First contact: ${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`);
                break;
            case 2:
                let last = contacts.length - 1;
                alert(`Last contact: ${contacts[last].name}, ${contacts[last].phone}, ${contacts[last].email}`);
                break;
            case 3:
                let allContacts = "List of all contacts:\n\n";
                for (let i = 0; i < contacts.length; i++) {
                    allContacts += `${i + 1}. ${contacts[i].name}, ${contacts[i].phone}, ${contacts[i].email}\n`;
                }
                alert(allContacts);
                break;
            case 4:
                let name = prompt("Enter a name for the contact:");
                if (name === "") {
                    alert("Name can't be blank.");
                } else {
                    let phone = prompt("Enter a phone number for the contact:");
                    if (phone === "") {
                        alert("Phone number can't be blank.");
                    } else {
                        let email = prompt("Enter an email for the contact:");
                        if (email === "") {
                            alert("Email can't be blank.");
                        } else {
                            let newContact = { name: name, phone: phone, email: email }
                            contacts.push(newContact);
                            alert(`The contact ${newContact.name} has been added correctly.`);
                        }
                    }
                }
                break;
            case 5:
                isOver = false;
                break;
            default:
                alert("Choose one valid option from the list.")
                break;
        }
    } else {
        alert("Invalid entry.")
    }
}