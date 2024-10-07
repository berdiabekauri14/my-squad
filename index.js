const form = document.getElementById("form");
const dataBase = [];
const d = new Date().toString();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = document.getElementById("facebook-link");
    const name = form.name.value;
    const lastName = form.lastName.value;
    const age = form.age.value;

    if (name === "" || lastName === "" || age === "") {
        alert("ერორი, გთხოვთ შეავსეთ ფორმა მთლიანად");
        return;
    }

    dataBase.push({
        სახელი: name,
        გვარი: lastName,
        ასაკი: age
    });

    console.log(dataBase);
    console.log(`თარიღი როდის დარეგისტრირდა მომხმარებელი: ${d}`);

    message.textContent = "facebook link";
})