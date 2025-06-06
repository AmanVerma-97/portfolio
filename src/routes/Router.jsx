import React from 'react'
import { createBrowserRouter} from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Internships from "../components/internships/Internships";
import Error from "../components/error/Error";
import Skills from "../components/skills/Skills"
import Certificate from "../components/certificates/Certificate";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      
      children: [
        {
          path:"/",// Matches the root path (/)
          element: <About />, // Renders the About component
          index:true
        },

        {
          path: "/projects",
          element: <Projects />, // Renders the Projects component
        },

        {
          path: "/internships",
          element: <Internships />, // Renders the Internships component
        },

        {
          path: "/education",
          element: <Education />, // Renders the Education component
        },

        {
          path: "/contact",
          element: <Contact />, // Renders the Contact component
        },

        {
          path: "/skills",
          element: <Skills />, // Renders the Contact component
        },

        {
          path: "/certificates",
          element: < Certificate/>, // Renders the Certificate component
        },
      ],

      errorElement: <Error />, // Renders the Error component for unmatched routes
    },
]);
  

export default routes;