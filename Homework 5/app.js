const btn = document.getElementById('hider');
const text = document.getElementById('text');

btn.addEventListener("click", ()=>{
    text.style.display = 'none';
});


document.body.insertAdjacentHTML(
    "beforeend",
    "<div id='Card'> <h2>Vaniko</h2> <a href='#'>Go to Profile</a></div>"
)
  
const Em = document.querySelector("#card")

Em.style.backgroundColor = 'red';