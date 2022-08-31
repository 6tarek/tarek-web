// lets
//medea
let medea=document.querySelector('#madia')
let ul=document.querySelector('#medea')
//projects
let h2 = document.querySelector("#bio");
let h1 = document.querySelector("#bio2");
let img = document.querySelector("#link");
let projects11 = document.querySelector("#projects11");
let projects13 = document.querySelector("#projects13");
let projects21 = document.querySelector("#projects21");
let projects23 = document.querySelector("#projects23");
let projects31 = document.querySelector("#projects31");
let projects33 = document.querySelector("#projects33");
/////////////////////////lets api fetch
let bio = fetch(`https://api.github.com/users/6tarek`);
let repos1 = fetch(`https://api.github.com/repos/6tarek/currency-islam`)
let repos2 = fetch(`https://api.github.com/repos/6tarek/my-web`)
let repos3 = fetch(`https://api.github.com/repos/6tarek/uptime-`)
// get1 
async function get1() {
  const respons = await bio;
  const data = await respons.json();
  console.log(data);
  h2.innerHTML = data.bio
  h1.innerHTML = data.bio
  img.href = data.avatar_url
}
get1();
// get2
async function get2() {
  const re = await repos1;
  const data = await re.json();
  console.log(data);
  projects11.innerHTML = data.name
  projects11.href = data.html_url
  projects13.innerHTML = data.description
//   h1.innerHTML = dat.bio
}
get2();
// get3
async function get3() {
  const re = await repos2;
  const data = await re.json();
  console.log(data);
  projects21.innerHTML = data.name
  projects21.href = data.html_url
  projects23.innerHTML = data.description
//   h1.innerHTML = dat.bio
}
get3()
// get4
async function get4() {
  const re = await repos3;
  const data = await re.json();
  console.log(data);
  projects31.innerHTML = data.name
  projects31.href = data.html_url
  projects33.innerHTML = data.description
//   h1.innerHTML = dat.bio
}
get4()
//////////////////onclik
/////////////////madea
medea.onclic = function (){
  console.log(hi)
}



