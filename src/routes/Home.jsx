import React from 'react'
import Landing from '../components/landing'
import RainOfG from '../components/rainofG'
import Projects from '../components/Projects'
import WorkWithUs from '../components/WorkWithUs'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// import BlogSection from '../components/BlogSection'

function Home() {

    return (
        <div>
            <NavBar />
            <Landing />
            <RainOfG />
            <Projects />
            <WorkWithUs />
            {/* <BlogSection /> */}
            <Footer />
        </div>
    )
}

export default Home