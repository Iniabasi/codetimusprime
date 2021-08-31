AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "JavaScript",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/102ZwQ3@VkrLa2Baq6SbLcwKDnE1KJjUSNoyyr8jqxjSQTChWX5aUYwDtZCqLeUwse3M0OkO/",
  },
  {
    title: "PHP and SQL",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/103MsT3@hk-9fX-HzGI9vSeKD4WnPF4Mi0yJF-TSPPh5V6ZDgWZEvlIUQdULRmYbqAEl7_XM/",
  },
  {
    title: "React",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/1031r63@wQhFlym6WB7gJ69DRpvplWLoD7VOgGJsO8mMvoqYWBlYgcleyvnGJkVEQkvG3aId/",
  },
  {
    title: "HTML, CSS and Bootstrap",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/103Xr43@c57TDoxqhw48mah_uoGkTpcyqZhnOwvtA5n35247tPryNraQR-UFls_aTevQ5BHT/",
  },
  {
    title: "Andriod Developmwnr with Kotlin",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/104OIM3@nqVT5DIDVOdIoz6D70R6pVEk2z1JFz_6eBe8_R1ETi9xtqRWvQ_GLjrkbLDOY6ED/",
  },
  {
    title: "Unreal Engine C++",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/101XRs3@RJ1NRpEmcs2wgDpjdWITTi9sBGgV2Uwoa0OdnO0kVZ_jcExnLeKlFE1RBWuifA7n/",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/103Q5k3@JUgbVNsR0kPmWwLe-4tuRyK9-68J5axuuISmFHRHASD2xqC3jecbyh0ZsNy4B9q0/",
  },
  {
    title: "VUE.js and Firebase",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/share/101x503@iEacVzCiOw9pbXZmAzJmHPVupagAO1y9IZ3EAuGtijS0fNqq2zMqLaKukK1khgpF/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning/home/welcome",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);