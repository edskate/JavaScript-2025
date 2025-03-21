const user = {
    name: 'John',
    age: 27,
    address : {
        street: "Rua text",
        Number: 12,
    },
};
document.body.innerText = JSON.stringify (Object.entries(user))