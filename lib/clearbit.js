const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select the button, the input and 4 tds
const button = document.querySelector("#clearbitSubmit");
const input = document.querySelector("#clearbitEmail");
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");

const display = (data) => {
  // 4. Display the fetched data on our webpage
  const person = data.person;
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchData = (url) => {
  fetch(url, {
    headers: {
      'Authorization': authorization
  }})
    .then(response => response.json())
    .then(display);
}

const searchEmail = (event) => {
  // 3. preventDefault() on the button click
  event.preventDefault();
  const url = `https://person.clearbit.com/v2/combined/find?email=${input.value}`
  // 3. Fetch the Clearbit API with AJAX
  fetchData(url);
};

// 2. Listen to a click on the button
button.addEventListener("click", searchEmail);
