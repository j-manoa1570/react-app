import React from 'react';

export default class Top extends React.Component {


   render() {

      return (
         <div>
            <div>
               <div class="header-flex">
                  <p className="padding"><a href="home.html">Home</a></p>
                  <p className="padding"><a href="projects/home.html">Projects</a></p>
                  <p className="padding"><a href="interests/home.html">Other Interests</a></p>
                  <p className="padding"><a href="about/home.html">About Me</a></p>

               </div>
            </div>
         </div>
      );
   }
}