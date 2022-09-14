const button = document.getElementById("btn")
const toasts = document.getElementById('toasts');

const messages = ["Message1", 'Message2', "Message3","Message4"];
const types = ['info', 'success', 'failure'];

button.addEventListener("click", () => insertMessage())

function insertMessage(data=null, type=null) {
    const newMessage = document.createElement('div')
          newMessage.innerText  = randomMessage()
          newMessage.classList.add("toast")
          newMessage.classList.add(type ? type : randomType())

          toasts.appendChild(newMessage)

          

          
          setTimeout(() => {
            newMessage.style.transition = "0.8s"
            newMessage.style.opacity = 0
          },2000)
}



function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function randomType() {
    return types[Math.floor(Math.random() * types.length)]
}


















