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
  const rating=8.2;
  const name="Queen of Tears"
  const summary="Queen of Tears is a K-drama that tells the story of a couple who have become distant due to circumstances. An ill-fated twist in their life brings them together and gives them the courage to fight their fate1. The show offers a fresh and transformative take on K-romance, with predictable yet startlingly human elements"
  const age=17
  // let canWatch="Not Available"
  // if(age>=18) canWatch="Watch Now"
  
  const Genre=()=>{
    const genre="RomCom"
    return genre
  }
  // if(age<18)
  // {
  //     return<Fragment>
  //     <div>
  //       <img src= "qot.jpg" alt="qot.jpg" width="40%" height="40%"/>
  //     </div>
  //     <h2>Name: {name}</h2>
  //     <h3>Rating:{5+3.3}</h3>
  //     <p>
  //       Summary:{summary}
  //     </p>
  //     <p>Genre: {Genre()}</p>
  //     <button>Not Available</button>
  //     </Fragment>
  // }
  return(
  <Fragment>
        <div>
          <img src= "qot.jpg" alt="qot.jpg" width="40%" height="40%"/>
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating:{5+3.3}</h3>
        <p>
          Summary:{summary}
        </p>
        <p>Genre: {Genre()}</p>
        {/* <button>{age>=18?"Watch Now":"Not Available"}</button> */}
        {/* <button>{canWatch}</button> */}
        <button>{canWatch()}</button>

  </Fragment>
  )
}
export default App;
// console.log(React.createElement('h1',null,"Hello World 1"))
