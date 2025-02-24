const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];
const rowEl = document.querySelector(".card-container")
const nameEl = document.querySelector("#inputName")
const jobEl = document.getElementById("inputJob")
const emailEl = document.getElementById("inputEmail")
const imgEl = document.getElementById("img")
const formEl = document.querySelector(".form")

for (let i = 0; i < teamMembers.length; i++) {
  const name = teamMembers[i].name.toUpperCase()
  const role = teamMembers[i].role
  const email = teamMembers[i].email
  const img = teamMembers[i].img
  addMarkup(img, name, role, email)

}
function addMarkup(img, name, role, email) {
  rowEl.innerHTML += `
    <div class="col-4 ">
      <div class="card mb-3">
        <div class="row g-0  ">
          <div class="col-md-4 my-card">
            <img src="${img}" class="img-fluid rounded-start" alt="" >
          </div>
          <div class="col-8 bg-black text-white text-start description">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text text-primary">${email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

}
formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = nameEl.value
  const role = jobEl.value
  const email = emailEl.value
  const img = imgEl.value
  const newMembers = {
    name: name,
    role: role,
    email: email,
    img: img
  }
  teamMembers.push(newMembers)
  addMarkup(img, name, role, email);
  formEl.reset()
})