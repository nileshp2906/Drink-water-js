var jars = document.querySelectorAll(".jar-list");
var jarslink = document.querySelectorAll(".jar-list a");
var jarLength = jars.length;
var  fill = document.getElementById("fill")
var sum = 0
jars.forEach((e,index)=>{
  e.addEventListener("click", () => {
  for ( let i = 0 ; i <= index ;i++ ) {
    for(let j = index ; j < jarLength ; j++  ) {
      jars[j].classList.remove("active");
      jarslink[j].classList.remove("active");
    }

    jars[i].classList.add("active");
    jarslink[i].classList.add("active");
    sum = 250 *(i+1);
    fill.style.bottom = ((sum/2000)*100 -100) + "%" ;
    fill.innerText = (sum/2000)*100 + "%";
    console.log(sum) ;
  } 
  

  })
}
)
