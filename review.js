// local reviews data
const reviews = [
    {
      id: 1,
      name: "Udder Johnson",
      age: "5 years old",
      img:
        "https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg",
      text:
        "Always happy, we have no idea why, looking for a home that won't look at them like food",
    },
    {
      id: 2,
      name: "Cow McCow",
      age: "10 years old",
      img:
        "https://i.pinimg.com/originals/c5/a4/8c/c5a48c903ba46d6ae9629583b8feb5a7.jpg",
      text:
        "Even happier than Udder Johnson, but getting up there in age. Just looking for a nice field to settle down",
    },
    {
      id: 3,
      name: "Moo Murphy",
      age: "1 year & 5 months old",
      img:
        "https://external-preview.redd.it/_chQqJrGlKRRxQLhjmlH9WI5XCaq8frSw72TYsxIcb8.jpg?auto=webp&s=66f677585ec83955173ff9aca40a4c7a59456ffc",
      text:
        "Full of energy and life, loves to run around. Needs a large open area to be able to let out their energy.Can have a temper",
    },
    {
      id: 4,
      name: "Frank \"Cowpie\" Jones",
      age: "16 years old",
      img:
        "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/ed/4ed28be9-f755-57dc-80b5-382cd4a45cb8/5dc5d8f804ac9.image.jpg",
      text:
        "Old, grumpy, ready to die. Tired of everyone's shit",
    },
  ];
const author = document.getElementById('author');
const age = document.getElementById('age');
const info = document.getElementById('info');
const img = document.getElementById('cow-img')

const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const random = document.querySelector('.random-btn')

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

//show person based on item
const showPerson = person => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    age.textContent = item.age;
    info.textContent = item.text;
}

//show next person

next.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show prev person
prev.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

//show random person
random.addEventListener('click', () => {
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
    console.log(currentItem);
})