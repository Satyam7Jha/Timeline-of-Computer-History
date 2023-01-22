window.addEventListener("load", () => {


   const galleryPage = document.getElementById("Gallery")
   galleryPage.addEventListener("click",()=>window.open("./index.html",'_self'))


   const timeLinePage = document.getElementById("timeLine")
   timeLinePage.addEventListener("click",()=>window.open("./components/TimeLine.html",'_self'))


   const slideContainer = document.getElementById("modalContainer")
   var slide = 0;

   const slideData = [
      {
         src:"https://initialcommit.com/img/initialcommit/computer-scientists-who-made-history-10.jpg",
         text:"John McCarthy"
      },
      {
         src:"https://initialcommit.com/img/initialcommit/computer-scientists-who-made-history-2.jpg",
         text:"Tim Berners-Lee"
      },
     
      {
         src:"https://images.computerhistory.org/timeline/timeline_computers_1953.ibm701.jpg",
         text:"Cuthbert Hurd (IBM)"
      },
      {
         src:"https://images.computerhistory.org/timeline/timeline_computers_1970.amdahl470.jpg",
         text:"Gene Amdahl"
      },
      {
         src:"https://wallpapercave.com/dwp2x/HFsWtAz.jpg",
         text:"Bill Gates"
      },
      
      {
         src:"https://wallpapercave.com/dwp2x/wp7693974.jpg",
         text:"Steve Jobs"
      },
      {
         src:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i11C7eZxf.eU/v1/1200x-1.jpg",
         text:"Invented Transistors"
      },
      {
         src:"https://wallpapercave.com/dwp2x/wp4171385.jpg",
         text:"Google's Founder"
      },
      {
         src:"https://images.computerhistory.org/timeline/timeline_computers_1939.hewlettpackard.jpg",
         text:"David & Bill Hewlett"
      },
     
      
   ]


//   Image track

      const trackLimit = nextPercentage =>{
         if(nextPercentage>0)return 0
         if(nextPercentage<-100)return -100;
         return nextPercentage
      }
   
         //image-track
         const track = document.getElementById("image-track")
         
         var nextPercentage = "0"
      
         window.onmousemove = e =>{
            
            if(track.getAttribute("mouseDownAt") === "0") return;
   
            const mouseDelta = parseFloat(track.getAttribute("mouseDownAt")) - e.clientX
            let  maxDelta = window.innerWidth/2
            const percentage = (mouseDelta/maxDelta) * -100;
            nextPercentage = percentage + parseFloat(track.getAttribute("prevPercentage"))
            track.setAttribute("percentage",nextPercentage)
            // track.style.transform = `translate(${trackLimit(nextPercentage)}%,-50%)`
            track.animate({
               transform:`translate(${trackLimit(nextPercentage)}%,-50%)`
            },{duration:1200,fill:"forwards"});
            
   
   
   
   
            const imageList = track.getElementsByClassName("image")
            for(let i = 0;i<imageList.length;i++ ) {

               imageList[i].addEventListener("click",()=>handleOpenModal(i))
               // imageList[i].style.objectPosition  = `${Math.abs(track.getAttribute("percentage"))}% 50%`
               imageList[i].animate({
                  objectPosition:`${100 - Math.abs(track.getAttribute("percentage"))}% 50%`
               },{duration:1200,fill:"forwards"});
   
            }
            
            
            
             
         }  
         
         window.onmousedown = e =>{
            track.setAttribute("mouseDownAt",e.clientX)
         }
         window.onmouseup = e =>{
            track.setAttribute("mouseDownAt","0")
            track.setAttribute("prevPercentage",track.getAttribute("percentage")) 
         }
   
       
      
  
//  modal javaScript

      
      const leftSlide = document.getElementById("leftSlide")
      const rightSlide = document.getElementById("rightSlide")
      const slideDes = document.getElementById("modalImageDescription")
      const modalImage = document.getElementById("modalImage");
      const closeButton = document.getElementById("close-modal")
      const modalImageDescription = document.getElementById("modalImageDescription")

      const handleClose=() =>{
         slideContainer.style.visibility = "hidden"
         console.log("hfdfdf")
      }

     
      const handleOpenModal = (ind)=>{
         slide = ind
         slideContainer.style.visibility = "visible";

         modalImage.setAttribute("src",slideData[slide]['src']);
         
         slideDes.innerHTML = slideData[slide]['text']

      }
      

     

      const handleSlideChage = (direction)=>{
         let rot
         if(direction === "left"){
            slide = Math.max(0,slide-1)
            rot =(8- slide) * 90
            rightSlide.animate({
               transform : `rotate(-${rot}deg)`
            },{duration:1000,fill:"forwards"})
            leftSlide.animate({
               transform : `rotate(-${rot}deg)`
            },{duration:1000,fill:"forwards"})
         }
         else{

            slide = Math.min(8,slide+1)
            rot = slide * 90
            rightSlide.animate({
               transform : `rotate(${rot}deg)`
            },{duration:1000,fill:"forwards"})
            leftSlide.animate({
               transform : `rotate(${rot}deg)`
            },{duration:1000,fill:"forwards"})

         }
         modalImage.setAttribute("src",slideData[slide]['src']);
         
         slideDes.innerHTML = slideData[slide]['text']
         modalImageDescription.animate({
            transform:"translage(50%,50%)"
         },{duration:1000})
      }

      closeButton.addEventListener("click",handleClose)

      leftSlide.addEventListener("click",()=>handleSlideChage("left"))
      rightSlide.addEventListener("click",()=>handleSlideChage("right"))


   


 






     
     
     
      
     

});






