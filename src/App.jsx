import React from "react";
import ReactDOM from "react-dom/client"




const Title = () => (
      <h1 className="title">Nameste react ........</h1>
)
// const number = 10000

const HeadingComponent = () =>(
     <div id="container">
      <Title/>
      <h1 className="heading">Nameste React function component</h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)



