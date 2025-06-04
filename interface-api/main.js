const gitHubId = 
    document.querySelector('input[type=text]');
const btnBuscar = 
    document.querySelector('button');

const nameField = document.querySelector("#name")
const bioField = document.querySelector("#bio")
const followersField = document.querySelector("#followers")
const locationField = document.querySelector("#location")
const avatarField = document.querySelector("#avatar")

btnBuscar.addEventListener("click", async () => {
    const data = await fetch('https://api.github.com/users/' 
    + gitHubId.value, )
    .then(response => response.json())

    nameField.textContent = data.name
    bioField.textContent = data.bio
    followersField.textContent = data.followers
    locationField.textContent = data.location
    avatarField.setAttribute("src", data.avatar_url)
})