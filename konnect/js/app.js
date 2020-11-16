// random user class(Object)

class RandomUser {
    constructor() {
        this.api = 'https://randomuser.me/api/';
    }


    async getProfile() {
        const RandomProfile = await fetch(this.api);
        const profileData = await RandomProfile.json();

        return (profileData.results[0])
    }
}


//UI Class(Object)

class UI {

  paintUI(data) {
        profileImg.innerHTML = `
                                <img src="${data.picture.large}" alt="user image" class="profile-image-size">
        `

        profileDetails.innerHTML = `
                                <h2 class="details-header">${data.name.first}'s Details</h2>
                                <ul class="details-list">
                                    <li class="details-item">Name: ${data.name.title} ${data.name.first} ${data.name.last}</li>
                                    <li class="details-item">Gender: ${data.gender}</li>
                                    <li class="details-item">Age: ${data.dob.age}</li>
                                    <li class="details-item">City: ${data.location.city}</li>
                                    <li class="details-item">State: ${data.location.state}</li>
                                    <li class="details-item">Country: ${data.location.country}</li>
                                    <li class="details-item">Email: ${data.email}</li>
                                    <li class="details-item">Phone: ${data.phone}</li>
                                </ul>
        `
    }
}

// app js


window.onload = function() {
    loadProfile()
}

const randomUser = new RandomUser;
const ui = new UI

// ui vars
const profile = document.querySelector('.profiles');
const profileImg = document.querySelector('.profile-image');
const profileDetails = document.querySelector('.profile-details');
const profileBtn = document.querySelector('.btn');

// button to listen for click
profileBtn.addEventListener('click', loadProfile)


// load profile
function loadProfile() {

     randomUser.getProfile()
                .then((data) => {
                   ui.paintUI(data);
                })

            
    



}



