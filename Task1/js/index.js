let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");

let inputStatus = document.getElementById("inputStatus");


let btnAdd = document.getElementById("btnAdd");

let tableBody = document.getElementById("tableBody");
let currentIndex = 0;
let users = [];
if(JSON.parse(localStorage.getItem("Users")) !== null){
    users = JSON.parse(localStorage.getItem("Users"));
    displayUsers();
}
btnAdd.addEventListener("click",()=>{


        if(btnAdd.innerHTML === "Add User"){
            let user = {
                name: inputName.value,
                Email: inputEmail.value,
                Status: inputStatus.value
            };
            users.push(user)
            localStorage.setItem("Products",JSON.stringify(users))
            displayUsers()
            clearForm()

        } else if(btnAdd.innerHTML === "Update User"){
            updateUser()
            clearForm()

        }

})
function displayUsers(){
    let temp = "";
    let StatusRow = "";
    for(let i=0;i<users.length;i++){
        if(users[i].Status === "Active"){
            StatusRow = `<td class="text-white bg-success">${users[i].Status}</td>`
        } else if(users[i].Status === "Block"){
            StatusRow = `<td class="text-white bg-danger">${users[i].Status}</td>`
        }
        temp += `
        <tr>
            <td>${i + 1}</td>
            <td>${users[i].name}</td>
            <td>${users[i].Email}</td>

            ${StatusRow}
            <td>
                <i onclick="getUserInformation(${i})" title="Update" class="fa-solid me-2 text-warning fa-pen"></i>
                <i onclick="deleteUser(${i})" title="Delete" class="fa-solid text-danger fa-trash"></i>
             
            </td>
        </tr>`
    }
    tableBody.innerHTML = temp
}
btnClear.addEventListener("click",clearForm)
function clearForm(){
    inputName.value = ""
    inputEmail.value = ""
    inputStatus.value = ""

}
function getUserInformation(index){
    currentIndex = index
    inputName.value = users[currentIndex].name
    inputEmail.value = users[currentIndex].Email
    inputStatus.value =users[currentIndex].Status
    btnAdd.classList.replace("btn-success","btn-warning")
    btnAdd.innerHTML = "Update User"

}
function updateUser(){
    let user = {
        name: inputName.value,
        Email: inputEmail.value,
        Status: inputStatus.value
    };
    users[currentIndex] = user
    displayUsers()
    localStorage.setItem("Users",JSON.stringify(users))
    btnAdd.classList.replace("btn-warning","btn-success")
    btnAdd.innerHTML = "Add User"
}
function deleteUser(index){
    users.splice(index,1)
    displayUsers()
    localStorage.setItem("Users",JSON.stringify(users))
}




