import React from "react";
import { Fragment } from "react";

const App = () => {
  return (
    // [<NetflixSeries key="1" />,<NetflixSeries key="2"/>]
    <>
    <React.Fragment>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    </React.Fragment>
    </>
  );
};
const NetflixSeries=()=>{
  return(
  <Fragment>
        <div>
          <img src= "qot.jpg" alt="qot.jpg" width="40%" height="40%"/>
        </div>
        <h2>Name: Queen of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>
          Summary:Queen of Tears is a K-drama that tells the story of a couple who
          have become distant due to circumstances. An ill-fated twist in their
          life brings them together and gives them the courage to fight their
          fate1. The show offers a fresh and transformative take on K-romance,
          with predictable yet startlingly human elements
        </p>
  </Fragment>
  )
}
export default App;
// console.log(React.createElement('h1',null,"Hello World 1"))
