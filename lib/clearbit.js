const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select button, input and the four field
const input = document.querySelector("#clearbitEmail");
const button = document.querySelector("#clearbitSubmit");

const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");

const stalkPerson = (event) => {
  // 3. preventDefault()
  event.preventDefault();
  // 4. Fetch info from ClearAPI
  // (GET? POST? => check the documentation)
  fetchClearbit(input.value);
}

const fetchClearbit = (emailToStalk) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${emailToStalk}`;
  fetch(url, {
    headers: { "Authorization": authorization }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.person);
      // 5. Display the info in the 4 fields
      displayClearbitInfo(data.person);

    });
};

const displayClearbitInfo = (personData) => {
  name.innerText = personData.name.fullName;
  email.innerText = personData.email;
  bio.innerText = personData.bio;
  location.innerText = personData.location;
};

// 2. Listen to a click on submit
button.addEventListener("click", stalkPerson);

