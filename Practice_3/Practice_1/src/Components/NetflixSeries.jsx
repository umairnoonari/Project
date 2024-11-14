import seriesData from "../api/seriesData.json"
const NetflixSeries=()=>{
    return(
        <ul style={{listStyle:"none"}}>
           {seriesData.map((itm)=>(<li key={itm.id}>
                <div>
                    <img src={itm.img_url} alt={seriesData[0].img_url}
                    width="40%"
                    height="40%"
                    />
                </div>
                <h2>Name: {itm.name}</h2>
                <h3>Rating: {itm.rating}</h3>
                <p>Summary: {itm.description} </p>
                <p>Genre: {itm.genre}</p>
                <p>Cast: {itm.cast}</p>
                <a href={itm.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </li>))}
        </ul>
    )
}
export default NetflixSeries
// import { Fragment } from "react";
// const NetflixSeries=()=>{
    // const rating=8.2;
    // const name="Queen of Tears"
    // const summary="Queen of Tears is a K-drama that tells the story of a couple who have become distant due to circumstances. An ill-fated twist in their life brings them together and gives them the courage to fight their fate1. The show offers a fresh and transformative take on K-romance, with predictable yet startlingly human elements"
    // const age=18
    // let canWatch="Not Available"
    // if(age>=18) canWatch="Watch Now"
    // const canWatch=()=>{
    //     if(age<18) return "Not Available"
    //     return "Watch Now"
    // }
    // const Genre=()=>{
    //   const genre="RomCom"
    //   return genre
    // }
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
    // return(
    // <Fragment>
    //       <div>
    //         <img src= "qot.jpg" alt="qot.jpg" width="40%" height="40%"/>
    //       </div>
    //       <h2>Name: {name}</h2>
    //       <h3>Rating:{5+3.3}</h3>
    //       <p>
    //         Summary:{summary}
    //       </p>
    //       <p>Genre: {Genre()}</p>
    //       {/* <button>{age>=18?"Watch Now":"Not Available"}</button> */}
    //       {/* <button>{canWatch}</button> */}
    //       <button>{canWatch()}</button>
  
    // </Fragment>
    // )
//   }
//   export default NetflixSeries
//   const Header=()=>{
//     return <p>Copyright @Umair Ahmed Noonari</p>
//   }
//   const Footer=()=>{
//     return <p>Copyright @Umair Ahmed Noonari</p>
//   }
//   export {Header,Footer} 
