const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let personImage = document.querySelector("#person-image");
let personName = document.querySelector("#person-name");
let personJob = document.querySelector("#person-job");
let personMessage = document.querySelector("#person-message");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let random = document.querySelector("#random");

let buttons = [prev, next, random];
let reviewId = 0;

window.addEventListener("DOMContentLoaded", () => {
  let { name, img, job, text } = reviews[reviewId];
  personImage.setAttribute("src", img);
  personName.innerText = name;
  personJob.innerText = job;
  personMessage.innerText = text;
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "prev") {
      reviewId -= 1;
      if (reviewId < 0) {
        reviewId = 3;
      }
    } else if (e.target.id === "next") {
      reviewId += 1;
      if (reviewId >= reviews.length) {
        reviewId = 0;
      }
    } else if (e.target.id === "random") {
      reviewId = Math.floor(Math.random() * reviews.length);
    }

    let { name, img, job, text } = reviews[reviewId];
    personImage.setAttribute("src", img);
    personName.innerText = name;
    personJob.innerText = job;
    personMessage.innerText = text;
  });
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    reviewId -= 1;
    if (reviewId < 0) {
      reviewId = 3;
    }
  } else if (e.key === "ArrowRight") {
    reviewId += 1;
    if (reviewId >= reviews.length) {
      reviewId = 0;
    }
  } else if (e.key === "Enter" || e.key === "Insert") {
    reviewId = Math.floor(Math.random() * reviews.length);
  }

  let { name, img, job, text } = reviews[reviewId];
  personImage.setAttribute("src", img);
  personName.innerText = name;
  personJob.innerText = job;
  personMessage.innerText = text;
});
