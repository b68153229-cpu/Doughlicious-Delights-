// homepage
// light function
       let isDark = false;
    function col() {
        if (isDark) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            isDark = false;

        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            isDark = true;
        }
    }
    
    function toggleMenu() {
    const menu = document.getElementById("menu");
    const icon = document.querySelector(".description i");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}


    // location 
    function getDetails() { let city = prompt("Enter your city:"); let state = prompt("Enter your state:"); if (city && state) { alert("Submitted!\nCity: " + city + "\nState: " + state); } else { alert("Submission cancelled."); } } 
    // background
     const canvas = document.getElementById("canvas"); const ctx = canvas.getContext("2d"); function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
     resize(); window.addEventListener("resize",resize);
      // --------------------- // Stars // --------------------- 
      const stars=[]; for(let i=0;i<150;i++){ stars.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, alpha:Math.random(),speed:Math.random()*0.02 }); } 
      // --------------------- // Clouds // --------------------- 
      const clouds=[]; for(let i=0;i<5;i++){ clouds.push({ x:Math.random()*canvas.width, y:Math.random()*250, speed:0.2+Math.random()*0.3}); } 
      // --------------------- // Shooting Stars // --------------------- 
      const shooting=[]; function newShooting(){ shooting.push({ x:Math.random()*canvas.width, y:Math.random()*200, dx:8,dy:4, life:100 }); } setInterval(newShooting,2500);
       // --------------------- // Particles // --------------------- 
      const particles=[]; for(let i=0;i<60;i++){ particles.push({ x:Math.random()*canvas.width,y:Math.random()*canvas.height, r:Math.random()*3, dx:(Math.random()-0.5)*0.3, dy:(Math.random()-0.5)*0.3 }); } 
      // --------------------- // Draw Moon // ---------------------
      function moon(){ let x=canvas.width-180; let y=120;let g=ctx.createRadialGradient(x,y,20,x,y,90); g.addColorStop(0,"white"); g.addColorStop(1,"rgba(255,255,255,0)"); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,90,0,Math.PI*2); ctx.fill(); 
      // ctx.fillStyle="#fff6cc"; // ctx.beginPath(); // ctx.arc(x,y,45,0,Math.PI*2); // ctx.fill(); // ctx.fillStyle="black";
      ctx.beginPath(); ctx.arc(x+15,y-10,45,0,Math.PI*2);ctx.fill(); }
       // --------------------- // Draw Cloud // --------------------- 
      function drawCloud(x,y){ ctx.fillStyle="rgba(255,255,255,.15)"; ctx.beginPath(); ctx.arc(x,y,30,0,Math.PI*2); ctx.arc(x+30,y-15,35,0,Math.PI*2); ctx.arc(x+70,y,30,0,Math.PI*2);ctx.arc(x+40,y+15,30,0,Math.PI*2); ctx.fill(); }
       // --------------------- // Animation // --------------------- 
      function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height);
         // Stars 
      for(let s of stars){ s.alpha+=s.speed;if(s.alpha>1||s.alpha<0) s.speed*=-1; ctx.fillStyle="rgba(255,255,255,"+s.alpha+")"; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); }
       // Moon 
       moon(); 
       // Clouds
      for(let c of clouds){ drawCloud(c.x,c.y); c.x+=c.speed; if(c.x>canvas.width+150) c.x=-150; }
       // Particles
      for(let p of particles){ ctx.fillStyle="rgba(255,255,180,.4)"; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill(); p.x+=p.dx; p.y+=p.dy; if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0; if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0; } // Shooting Stars 
      for(let i=shooting.length-1;i>=0;i--){ let s=shooting[i]; ctx.strokeStyle="white";ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s.x-40,s.y-20); ctx.stroke(); s.x+=s.dx; s.y+=s.dy; s.life--; if(s.life<=0) shooting.splice(i,1); }
      requestAnimationFrame(animate); } animate();


    //   add to cart
    function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
    }