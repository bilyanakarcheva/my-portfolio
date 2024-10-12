import Project1 from '../assets/Project_1.png';
import Project2 from '../assets/Project_2.png';
import Project3 from '../assets/Project_3.png';
export const HERO_CONTENT = `I am a passionate software developer who recently graduated from the Alpha JavaScript program 
in Telerik Academy, eager to dive into real-world programming challenges. With a solid foundation in modern web technologies
 and a keen eye for detail, I'm excited to turn ideas into impactful digital experiences.`;

 export const ABOUT_TEXT = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

export const PROJECTS = [
    {
        title: '№1 Sports Events Calendar',
        image: Project3,
        description: 'Introducing Sports Calendar: a user-friendly app designed to unite sports enthusiasts in one convenient platform. Here, users can browse all upcoming sports events and add the ones they are interested in to their personal calendar, ensuring they never miss a moment. Users can also create contact lists and invite friends to the events they\'re participating in, sharing the thrill together. And for those who want to take the lead, users can create their own events—either public for anyone to join or private for just the friends they invite.',
        technologies: ['JavaScript', 'React', 'Firebase', 'TailwindCSS', 'DaisyUI', 'API', 'ESLint', 'Git'],
        github: '#',
        link: '#'
    },
    {
        title: 'Home DIY Forum',
        image: Project2,
        description: 'The Home DIY Forum web app is a vibrant community platform for home improvement enthusiasts. Users can create posts to share their DIY projects, seek advice, and exchange ideas. The app features a robust commenting system that allows users to engage in discussions, offer tips, and provide feedback. Members can upvote or downvote posts and comments, ensuring the most helpful and popular content rises to the top. Join the Home DIY Forum to connect with like-minded individuals and get inspired for your next home project!',
        technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'Firebase', 'ESLint', 'Git'],
        github: '#',
        link: '#'
    },
    {
        title: 'Giphy Single Page App',
        image: Project1,
        description: 'The Home DIY Forum web app is a vibrant community platform for home improvement enthusiasts. Users can create posts to share their DIY projects, seek advice, and exchange ideas. The app features a robust commenting system that allows users to engage in discussions, offer tips, and provide feedback. Members can upvote or downvote posts and comments, ensuring the most helpful and popular content rises to the top. Join the Home DIY Forum to connect with like-minded individuals and get inspired for your next home project!',
        technologies: ['JavaScript', 'HTML', 'CSS', 'API', 'ESLint', 'Git'],	
        github: '#',
        link: '#'
    }
];

export const NAV_ITEMS = [
    {
        name: 'Home',
        href: '#hero'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];

export const CONTACTS = {
    phone: '+359 878 798 207',
    email: 'karcheva.bilyana@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bilyana-karcheva-a45b26105/'
};