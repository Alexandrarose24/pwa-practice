const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cap_btn = document.getElementById('cap_btn');

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cap_result = document.getElementById('cap_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
cap_btn.addEventListener('click', getList);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
    });
}

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      if (data.url.includes('.mp4')) {
        getRandomDog();
      }
      else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}
function getList() {
  fetch("https://restcountries.com/v3.1/region/europe")
    .then(resolve => resolve.json())
    .then(data => {
      let count = 0;
      data.forEach(country => {
        count += 1;
        console.log(count);
      });
      let c1 = count / 2;
      c1 = Math.ceil(c1);
      console.log(c1);
      let c2 = 0;
      let elem = document.createElement("ul");
      data.forEach(country => {
        c2 += 1;
        elem.innerHTML += `<li>` + `${country.capital[0]}` + `</li>`;
        cap_result.appendChild(elem);
        // console.log(country.capital[0]);
      });
    })
}

