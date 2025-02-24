const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
const rowEl = document.querySelector(".card-container")
const nameEl = document.querySelector(".inputName")
const jobEl = document.querySelector(".inputJob")
const emailEl = document.querySelector(".inputEmail")
const imgEl = document.querySelector(".imgName")
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
    <div class="col-4">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="">
          </div>
          <div class="col-md-8 bg-black text-white">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text">${email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

}
formEl