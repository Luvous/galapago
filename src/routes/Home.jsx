import React, { Suspense } from 'react';
import BubbleLoader from '../components/BubbleLoader';
import { Helmet } from 'react-helmet';

const NavBar = React.lazy(() => import('../components/NavBar'));
const Landing = React.lazy(() => import('../components/landing'));
const RainOfG = React.lazy(() => import('../components/rainofG'));
const Projects = React.lazy(() => import('../components/Projects'));
const WorkWithUs = React.lazy(() => import('../components/WorkWithUs'));
const Footer = React.lazy(() => import('../components/Footer'));

function Home() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Galapago Studio",
        "description": "Estudio creativo en medios digitales. Diseño gráfico, desarrollo web, y estrategias de marketing digital para tu marca.",
        "url": "https://galapagostudio.com",
        "logo": "https://galapagostudio.com/static/media/galapago_icon.fb59d76122c302c9d2cf4c8837106ec5.svg",
        "sameAs": [
            "https://www.facebook.com/galapagostudio",
            "https://www.instagram.com/galapagostudio",
            "https://www.behance.net/GalapagoStudio",
            "https://www.linkedin.com/company/galapago-studio/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-9-11-2686-3269",
            "contactType": "Customer Service"
        },
        "hasMap": "https://maps.google.com/maps?cid=YOURCIDNUMBER",
        "address": {
            "@type": "PostalAddress",
            "addressCountry":"Argentina",
            "addressLocality": "Buenos Aires",
            "addressRegion": "AR",
            "postalCode": "C1044",
            "streetAddress": "C1044 Sarmiento 2081"
        },
    };
    return (
        <Suspense fallback={<BubbleLoader />}>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <title>Galapago Studio | Soluciones creativas para impulsar tu marca.</title>
                <meta name="description" content="Estudio creativo en medios digitales. Diseño gráfico, desarrollo web, y estrategias de marketing digital para tu marca." />
                <meta property="og:title" content="Galapago Studio | Soluciones creativas para impulsar tu marca" />
                <meta property="og:description" content="Estudio creativo en medios digitales. Diseño gráfico, desarrollo web, y estrategias de marketing digital para tu marca." />
                <meta name="keywords" content="marketing digital, branding, diseño gráfico, desarrollo web, Argentina, Uruguay, estrategias, gestión de redes sociales, diseño de sitios web, Galapago Studio, identidad visual, estudio de diseño, consultoría de marketing, diseño UX/UI, diseño de logos, creación de contenido, rebranding, publicidad digital, marketing en redes sociales" />
                <link rel="canonical" href="https://galapagostudio.com/" />
            </Helmet>
            <div>
                <NavBar />
                <Landing />
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
