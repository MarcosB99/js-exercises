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

let response = Number(
    prompt(
        `Choose one of the following options:
        1. Show the first contact.
        2. Show the last contact.
        3. Add a new contact.
        
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
            let name = prompt("Enter a name for the contact:");
            if (name === "") {
                alert("Name can't be blank. Reload the page.");
            } else {
                let phone = prompt("Enter a phone number for the contact:");
                if (phone === "") {
                    alert("Phone number can't be blank. Reload the page.");
                } else {
                    let email = prompt("Enter an email for the contact:");
                    if (email === "") {
                        alert("Email can't be blank. Reload the page.");
                    } else {
                        let newContact = { name: name, phone: phone, email: email }
                        contacts.push(newContact);
                        alert(`The contact ${newContact.name} has been added correctly.`);
                    }
                }
            }
            break;
        default:
            alert("Choose one valid option from the list. Reload the page.")
            break;
    }
} else {
    alert("Invalid entry, please reload the screen.")
}