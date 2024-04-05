//  get the deta 

let users = [
    {
        profilepic : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
        displayPic:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2 ,
        location: "Pune, India", 
        name:"Harshita" , 
        age:23 ,
        interests:[{
            icon: `<i class="fa-solid fa-book-open-reader"></i>`,
            interest:"reading books"
        } , {
            icon: `<i class="fa-solid fa-music"></i>`,
            interest: "music"
        } ],
        bio:"HI this is Harshita , I am from Pune and I love tea.",
        status:"",
        isFriend:null,
    },
    {
        profilepic : "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
        displayPic:"https://images.unsplash.com/photo-1471277668659-85a158117882?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location: "Delhi, India", 
        name:"shivangi" , 
        age:26 ,
        interests:[{
            icon: `<i class="fa-solid fa-book-open-reader"></i>`,
            interest:"reading books"
        } , {
            icon: `<i class="fa-solid fa-music"></i>`,
            interest: "music"
        } ],
        bio:"HI this is Shivangi , I am from Delhi currently I am doing my B.tech from NSIT.",
        status:"",
        isFriend:null,
    },
    {
        profilepic : "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
        displayPic:"https://images.unsplash.com/photo-1578298245355-3c600a9a13d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4 ,
        location: "Hariana, India", 
        name:"Joyita" , 
        age:24 ,
        interests:[{
            icon: `<i class="fa-solid fa-book-open-reader"></i>`,
            interest:"reading books"
        } , {
            icon: `<i class="fa-solid fa-music"></i>`,
            interest: "music"
        } ],
        bio:"HI this is Joyita , I am from Hariana .",
        status:"",
        isFriend:null,
    },
    {
        profilepic : "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
        displayPic:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 7 ,
        location: "Mumbai, India", 
        name:"Jessy" , 
        age:23 ,
        interests:[{
            icon: `<i class="fa-solid fa-book-open-reader"></i>`,
            interest:"reading books"
        } , {
            icon: `<i class="fa-solid fa-music"></i>`,
            interest: "music"
        } ],
        bio:"HI this is Jessy , I am from Mumbai , I'm an aspirat Model.",
        status:"",
        isFriend:null,
    },
]

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".profileimg img").src= users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interests) {
        clutter +=`<div class="tag flex gap-2 items-center bg-white/30 rounded-full px-3 py-1 text-white tracking-tighter  ">
        ${interests.icon}
        <h3 class="text-white text-sm capitalize">${interests.interest}</h3>
    </div>`
    });
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}
(function setInitial () {
    select(".mainCard img").src = users[curr].displayPic;
    select(".incomingCard img").src = users[curr+1]?.displayPic;
   setData(curr);
    curr = 2;
})();

function imageChange(){
    if(!isAnimating){
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
               let main = select(".mainCard");
               let inComing = select(".incomingCard");
    
               inComing.classList.remove("z-[2]");
               inComing.classList.add("z-[3]");
               inComing.classList.remove("incomingCard");
    
               main.classList.remove("z-[3]");
               main.classList.add("z-[2]");
    
               gsap.set(main,{
                scale:1,
                opacity:1,
               });
    
               if(curr === users.length)  curr = 0;
               select(".mainCard img").src = users[curr].displayPic;
               select(".mainCard img").src = users[curr].profilepic;

               curr++;
    
               main.classList.remove("mainCard");
               inComing.classList.add("mainCard");
               main.classList.add("incomingCard");
    
            }
        });
      tl.to(".mainCard",{
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration:.9,
      },"a")
      .from(".incomingCard",{
        scale: 0.9,
        opacity: 1,
        ease: Circ,
        duration:1.1,
      },"a");
    }
   
};
let deny =  select(".deny");
let accept = select(".accept");

deny.addEventListener("click" , function(){
   
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.07,
        ease:Power4.easeInout,
        duration:1.5,
    })
})
accept.addEventListener("click" , function(){
    
    alert("Cal cal padai me lag ja keya hoga iye sab karke");
   
})

function containCreator() {
    document.querySelectorAll(".element").
    forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}
containCreator();


