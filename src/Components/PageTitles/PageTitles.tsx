import React from "react";

interface Props {
    title: string;
}


const PageTitles: React.FC<Props> = props => {

  
  
    return (
      <div className={"header"}>
        {props.title}
      </div>
    );
  }
  
  export default PageTitles;