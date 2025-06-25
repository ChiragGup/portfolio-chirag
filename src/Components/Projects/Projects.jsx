import React from 'react';
import ProjectCard from './ProjectCard';

// Importing images
import expenseTrackerImage from '../../assets/Expence-Tracor.webp';
import audioVideoPlayerImage from '../../assets/Video Player.png';
import cookingWebsiteImage from '../../assets/Cooking Website.jpg';
import portfolioWebsiteImage from '../../assets/Potfolio Website.avif';
import bookRentalAppImage from '../../assets/Book Rental.jpg';
import quizAppImage from '../../assets/Quiz.jpg';

function Projects() {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                
                
                <ProjectCard
                    title="Cooking Website"
                    main="A website for recipes with API integration, built using React.js and Tailwind CSS."
                    demoLink="https://github.com/yourusername/cooking-website-demo"
                    sourceCodeLink="https://github.com/yourusername/cooking-website"
                    image={cookingWebsiteImage} 
                />
                <ProjectCard
                    title="Portfolio Website"
                    main="My personal portfolio website showcasing my skills and projects, built with React.js and Tailwind CSS."
                    demoLink="https://github.com/yourusername/portfolio-demo"
                    sourceCodeLink="https://github.com/yourusername/portfolio"
                    image={portfolioWebsiteImage} 
                />
                <ProjectCard
                    title="Ai video ads generator"
                    main="A book rental app for seamless book sharing and transactions, developed using React.js and Node.js."
                    demoLink="https://ai-video-ads-generator-delta.vercel.app/"
                    sourceCodeLink="https://github.com/yourusername/book-rental-app"
                    image={bookRentalAppImage} 
                />
                
            </div>
        </div>
    );
}

export default Projects;
