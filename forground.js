// var x = document.querySelector("#hplogoo img").classList.add("spin")
// var yx = document.querySelector("#hplogoo img")
// yx.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-sunflower-transparentflower-sunflower-961524680368wp62u.png&f=1&nofb=1"
// setTimeout(function(){
//     yx.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-sunflower-transparentflower-sunflower-961524680368wp62u.png&f=1&nofb=1"
// }, 3000)
// console.log(x)

console.log("i havce been injected by the background script monitoring the tab")

const first = document.createElement("button")
first.innerText = "SET DATA"
first.id = "first"

const second = document.createElement("button")
second.innerText = "Shout out to the backend"
second.id = "second"


document.querySelector("body").appendChild(first)
document.querySelector("body").appendChild(second)

first.addEventListener("click", () => {
    chrome.storage.local.set({"password" : "`123"})
    console.log("I SET first DATA")
})

second.addEventListener("click", () => {
    chrome.storage.local.set({"username" : "`5453543"})
    // res => console.log(res)
    chrome.runtime.sendMessage({message: "yo check the storage"})
    console.log("I SET second DATA")
})


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.message)
})