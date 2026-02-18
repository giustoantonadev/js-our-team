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

//select the elements in the DOM
const teamContainerEl = document.getElementById("teams-container");
const formEl = document.getElementById('userForm');
const nameFormEl = document.getElementById('name');
const roleFormEl = document.getElementById('role');
const emailFormEl = document.getElementById('email');
const imgFormEl = document.getElementById('img');

for (let i = 0; i < teamMembers.length; i++) {
  const userData = teamMembers[i];
  const { name, role, email, img } = userData;

  const markup = `
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
        <div class="card bg-dark text-white h-100 shadow">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid object-fit-cover w-100 h-100 d-none d-md-block rounded-start" alt="${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-center">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${role}</p>
                        <p class="card-text text-primary">${email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

  teamContainerEl.innerHTML += markup
}

console.log(teamContainerEl);

