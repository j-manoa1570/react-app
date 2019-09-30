import React from 'react';
import './head.css';

export class RenderHeader extends React.Component {

   render() {

      return (
         <button className="headerButton padding">
            {this.props.value}
         </button>
      );
   }

}

export default class Top extends React.Component {

   myHeader(text) {
      return (
         <RenderHeader value={text} />
      )
   }


   render() {

      return (
         <div className="head">
            <div className="headerCenter">
               <div className="header-flex">
                  {this.myHeader("Home")}
                  {this.myHeader("About Me")}
                  {this.myHeader("Projects")}
                  {this.myHeader("Interests")}
                  {this.myHeader("Contact")}

               </div>
            </div>
         </div>
      );
   }
}

export function headerElement(props) {

   return (
      <button className="" >
         {props.value}
      </button>
   )
}


