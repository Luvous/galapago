import React, { Suspense } from 'react';
import BubbleLoader from '../components/BubbleLoader';


const NavBar = React.lazy(() => import('../components/NavBar'));
const Landing = React.lazy(() => import('../components/landing'));
const RainOfG = React.lazy(() => import('../components/rainofG'));
const Projects = React.lazy(() => import('../components/Projects'));
const WorkWithUs = React.lazy(() => import('../components/WorkWithUs'));
const Footer = React.lazy(() => import('../components/Footer'));
// const BlogSection = React.lazy(() => import('../components/BlogSection'));

function Home() {
    return (
        <Suspense fallback={<BubbleLoader />}>
            <div>
                <NavBar />
                <Landing  />
                <RainOfG />
                <Projects />
                <WorkWithUs />
                {/* <BlogSection /> */}
                <Footer />
            </div>
        </Suspense>
    );
}

export default Home;
