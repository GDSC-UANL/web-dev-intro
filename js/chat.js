let messageInput = document.getElementById("message-input")
let messages = document.getElementById("messages")

function messageSent(event){
    event.preventDefault()
    let div = document.createElement("div")
    div.classList.add("message")
    div.classList.add("own")
    div.innerHTML = messageInput.value
    messages.appendChild(div)
    messageInput.value = ""
}