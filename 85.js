const fullimg=document.querySelector(".full-img");
const thumb=document.querySelectorAll(".gallery img");
const modal=document.querySelector(".modal");
console.log(fullimg, thumb, modal);

thumb.forEach(function(img){
    img.addEventListener("click",function(){
        modal.classList.add("open");
        fullimg.classList.add("open");

        const original=img.getAttribute("src");
        console.log(original);
        fullimg.src=original;
    })
    modal.addEventListener("click", function(e){
        if(e.target.classList.contains("modal")){
            modal.classList.remove("open");
            fullimg.classList.remove("open");
        }
    })

})