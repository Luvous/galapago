import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Page404 from './Page404.jsx';
import SentContact from './SentContact.jsx';

const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/contact/sent" element={<SentContact />} />
                <Route exact path="/about" element={<About />} />
                
                <Route path="*" element={<Page404Handler />} /> 
            </Routes>
        </Router>
    );
};

// Componente que maneja la lógica de excepción para /sitemap
const Page404Handler = () => {
    const location = useLocation();

    // Verifica si la URL es /sitemap y si es así, no renderiza el componente de 404
    if (location.pathname === "/sitemap") {
        window.location.href = "/sitemap.xml";
        return null;
    }

    return <Page404 />;
};



export default Webpages;