import React, { Suspense } from 'react';
const About = React.lazy(()=>import('../Components/About'));

const Footer = React.lazy(()=>import('../Components/Footer'));

const Faqs = React.lazy(()=>import('../Components/Faqs'));
// const Gallery = React.lazy(()=>import('../components/Gallery'));
const Landing = React.lazy(()=>import('../Components/Landing'));
// const Navbar = React.lazy(()=>import('../components/Navbar'));
const Schedule = React.lazy(()=>import('../Components/Schedule'));
const Sponsors = React.lazy(()=>import('../Components/Sponsors'));
const Register = React.lazy(()=>import('../Components/Register'));
const Leader = React.lazy(()=>import('../Components/Registration/Leader'));
const Profile = React.lazy(()=>import('../Components/Profile'));

const LandingPage = () => {
    return (
        <div>

            <Suspense>
                <Landing />
            </Suspense>

              <Suspense fallback={<div>Loading...</div>}>
                <About />   
            </Suspense>  

            <Suspense fallback={<div>Loading...</div>}>
                <Faqs />
            </Suspense>

            <Suspense>
                <Sponsors />
            </Suspense>
            
            <Suspense>
                <Footer />
            </Suspense>

            <Suspense>
                <Leader />
            </Suspense>

            

        </div>
    );
};

export default LandingPage;