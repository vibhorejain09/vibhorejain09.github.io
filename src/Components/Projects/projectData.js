import img1 from './Images/portfolioimg.PNG'
import img2 from './Images/hackitoutimg.PNG'
import img3 from './Images/vanillajsimg.PNG'
import img4 from './Images/ccwebimg.PNG'
import img5 from './Images/codepen.PNG'
import img6 from './Images/backyouup.PNG'
const myProjects = [
    {
        id: 1,
        image: img5,
        name: "Codepen-lite",
        description: "Developed an App using HTML, CSS Javascript, and React JS where everyone can write/edit their code of HTML, CSS, and Javascript in real-time. You can view the real-time output of the code you are writing. Libraries like react-codemirror are used for the input in the editor and react-router-dom for the routing between the home page, editor, and an error page. You can resume your work from where you left, implemented using a custom useLocalStorage hook..",
        sourcecode: "https://github.com/vibhorejain09/codepen-lite",
        link: "https://vibhore-jain-codepen-lite.netlify.app/",
    },
    {
        id: 2,
        image: img6,
        name: "Back-You-Up",
        description: "It is a responsive web app made with HTML, CSS, Javascript, React Js, and Firebase on the idea of a policy cum help system for students. Login Sign-up system through Email and Password authentication with the help of Firebase. Users can reset their password through forgot password, can also edit their profile and upload pdf to avail policy, and can also send queries to us. Until a user is not verified by the verification link sent to an email he can not access the other important routes/pages.",
        sourcecode: "https://github.com/vibhorejain09/backyouup",
        link: "https://backyouup-3cdf8.web.app/",
    },
    {
        id: 3,
        image: img1,
        name: "Portfolio",
        description: "This is the basic Portfolio website, built using HTML, CSS, Javascript, React JS. It is single page react app with react scroll and moveToTop component present in it. Contains other component also like header, footer, contact form, cards, timeline. It is a Completely Responsive page.",
        sourcecode: "https://github.com/vibhorejain09/vibhorejain09.github.io",
        link: "https://vibhore-jain.netlify.app/",
    },
    {
        id: 4,
        image: img2,
        name: "Hackathon Website",
        description: "This Project is built in a team of three members for conducting a Hacathon event for a club, built using HTML, CSS, Javascript, React JS. It is a responsive website with all information regarding hacathon and team organising it. Contains components like FAQs, header, footer, countdown, cards, react-scroll, moveToTop component.",
        sourcecode: "https://github.com/ComputerClubGS/hackitout",
        link: "https://hack-it-out.tech/"
    },
    {
        id: 5,
        image: img3,
        name: "Vanilla JS",
        description: "This projet contains components of a website that users can directly use while creating their website. Also contains projetcs to understand the basic functionalities of JavaScript. Built using HTML, CSS, JavaScript. Deployed on Github.",
        sourcecode: "https://github.com/vibhorejain09/MiniProjects",
        link: "https://vibhorejain0911-mini-projects.netlify.app/"
    },
    {
        id: 6,
        image: img4,
        name: "Club Website",
        description: "It is a club website built in a team of three members. Built using HTML, CSS and JavaScript, used basic React Components to make the website responsive. Contains basic elements like header, footer, cards, carousel, sidebar etc. Deployed on Github.",
        sourcecode: "https://github.com/ComputerClubGS/website-2020",
        link: "https://computerclubgs.github.io/website-2020/"
    },        
];

export default myProjects