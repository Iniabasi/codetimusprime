//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/healthsignlogo.png",
    place: "Healthsign, Ottawa, Ontario",
    time: "(May, 2021 - Aug, 2021)",
    desp: "<li>Developed Algorithms for iOS and andriod apps using swift, java and swift. </li> <li>Created automated unit testing to ensure accuracy and provide a wider test coverage of application features</li><li>Profiled existing code, optimized code to be more efficient and faster.</li><li>Implemented an algorithm that optimized the runtime of the application from O(n^3) to O(log n)</li>",
  },
  {
    title: "Co-Founder and UI/UX designer",
    cardImage: "assets/images/experience-page/iCare.png",
    place: "iCare, (ciena smart city challenge)",
    time: "(January - Present)",
    desp: "<li>Designed a prototype for an application using canvas an wireframes.</li><li>Designed mockups and use cases for user experience.</li><li>Created and outlined a usability chart explaining features, functionalities and feasibility.</li><li>Design won first place in the competition (uottawa edition)</li>",
  },
  {
    title: "Wire Management",
    cardImage: "assets/images/experience-page/npsg.png",
    place: "NPSG, Amazon -Ottawa",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Created and organised a neat set up of computer systems.</li><li>Organised cables and hardware in a way that is easily identified and troubleshooted</li><li>Worked with team members to setup computer systems in offices and workspaces</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Advisor, Coding club and Leadership Programme",
    cardImage: "assets/images/experience-page/freelancelogo.png",
    description:
      "Responsible for handling the the creation and design of course material and syllabus",
  },
  {
    title: "Volunteer, Lighthouse church- Production Team",
    cardImage: "assets/images/experience-page/lighthouse.png",
    description:
      "Helped in editing videos for the church online",
  },
  {
    title: "Beth Emmanuel",
    cardImage: "assets/images/experience-page/freelancelogo.png",
    description:
      "Helped in the storing and organisation of files.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "iCare",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>Worked with in a team to solve a problem facing a particular community</li><hr /><li>Created a design that could mitigate some health challenges facing people in the community</li><hr /><li>Created an outline on how to implment the plan while navigating the problems posed by Covid-19</li>",
  },
  {
    title: "coding club",
    image: "assets/images/experience-page/freelancelogo.png",
    time: "06/2020 - 08/2020",
    desp: "<li>Worked closely with team members to plan daily activities of the coding club</li><hr /><li>Overviewed the budget of the club and the programme</li>",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
