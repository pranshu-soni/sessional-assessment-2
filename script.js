document.getElementById('my-form').addEventListener("submit",function(e){
    e.preventDefault()
})

const submitButton = document.getElementById("button");
const input = document.getElementById("search");

input.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submitButton.Disabled = false;

    if (value === ""){
        submitButton.Disabled = true;  
    }
});