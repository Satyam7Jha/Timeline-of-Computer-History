window.addEventListener("load", () => {


   const galleryPage = document.getElementById("Gallery")
   galleryPage.addEventListener("click",()=>window.open("./index.html",'_self'))


   const timeLinePage = document.getElementById("timeLine")
   timeLinePage.addEventListener("click",()=>window.open("./components/TimeLine.html",'_self'))


   const slideContainer = document.getElementById("modalContainer")
   var slide = 4;

   const slideData = [
      {
         src:"./assets//images/img1.png",
         text:"sdfdsfsdfsdf"
      },
      {
         src:"./assets//images/attamaComputer.png",
         text:"sdfdssdffsdfsdf"
      },
      {
         src:"./assets//images/bell.png",
         text:"Michael S. Dell"
      },
      {
         src:"https://wallpapercave.com/dwp2x/HFsWtAz.jpg",
         text:"Bill Gates"
      },
      {
         src:"https://wallpapercave.com/dwp2x/wp4171385.jpg",
         text:"Google Founders"
      },
      {
         src:"https://www.bbvaopenmind.com/wp-content/uploads/2018/02/bardeen-3.jpg",
         text:"Invinted Transisitor"
      },
      {
         src:"https://images.csmonitor.com/csmarchives/2011/10/1007_Wozniak.jpg?alias=standard_900x600",
         text:"Apple 1"
      },
      {
         src:"https://www.intel.com/content/dam/www/public/us/en/newsroom/posts/galleries/gordon-moore/gordon-moore-16-rwd.jpg.rendition.intel.web.1648.927.jpg",
         text:"Gordon Moore"
      },
      {
         src:"https://www.ibm.com/ibm/history/ibm100/images/icp/N847674I31813W60/us__en_us__ibm100__fortran__25_reunion__620x350.jpg",
         text:"Developer of FORTRAN"
      }
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
            
   
   
   
   
            console.log("hii")
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

      const handleClose=() =>{
         slideContainer.style.visibility = "hidden"
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
      }

      closeButton.addEventListener("click",handleClose)

      leftSlide.addEventListener("click",()=>handleSlideChage("left"))
      rightSlide.addEventListener("click",()=>handleSlideChage("right"))


   


 






     
     
     
      
     

});






