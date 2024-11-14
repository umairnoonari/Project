export const SeriesCard=({curElem})=>{
    // const {curElem}=props 
    const {img_url,name,rating,description,genre,cast,watch_url}=curElem 
    return(
    <li>
        <div>
            <img src={img_url} alt={img_url}
            width="40%"
            height="40%"
            />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description} </p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
            <button>Watch Now</button>
        </a>
    </li>
    )
}