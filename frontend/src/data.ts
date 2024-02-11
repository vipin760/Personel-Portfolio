
export interface Portfolio{
 responsive:boolean;
 image:string;
 label:string;
 text:string;
 link:string;
}

export const portfolioData:Portfolio[]=[
   {
      responsive:true,
      image:"/assets/url-shortener.png",
      label:'URL-Shortener',
      text:'Deploying your project frontend and backend on Vercel marks a significant milestone. Leveraging Vercel seamless deployment process streamlines hosting, ensuring your project is readily accessible to users. Embrace this learning experience, mastering the intricacies of deployment while laying the foundation for future development endeavors. Congratulations on your successful deployment!',
      link:"https://url-shortener-2-frontend.vercel.app/home"
   },
 {
    responsive:true,
    image:"assets/hospital management.png",
    label:'HospitalManagement',
    text:'The journey towards responsiveness was a lesson in balance — a delicate interplay between flexible grids, fluid images, and the careful consideration of breakpoints. Each adjustment brought me closer to a design that seamlessly adjusted its elements, maintaining clarity and visual appeal across a spectrum of devices',
    link:"https://vipin760.github.io/hospitalManagementHomepage/"
 },
 {
    responsive:true,
    image:"assets/arcbuilders.png",
    label:'ARC BUILDERS',
    text:'Entering the realm of my second project, I embraced the challenge of infusing life and dynamism into my creations by exploring the world of animations using HTML and CSS. This venture marked a significant leap forward in my coding journey, as I sought to elevate the user experience and add a touch of sophistication to my designs.',
    link:"https://vipin760.github.io/ARCBUILDERS/"
 },
 {
    responsive:false,
    image:"assets/bingo.png",
    label:'BINGO',
    text:'Embarking on my first project with HTML and CSS, I found myself facing a daunting landscape of unfamiliar code and design elements. The initial stages were marked by confusion, uncertainty, and the occasional frustration as I grappled with the intricacies of web development.',
    link:"https://vipin760.github.io/Bingo/"
 }
]