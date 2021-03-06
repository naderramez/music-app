import './ArtistDetailsComponent.css';
import {useState, useEffect} from 'react';

const ArtistDetailsComponent = (props) => {
  let [artistDetails, setArtistDetails] = useState({});
  let baseURL = `https://api.jsonbin.io/b/6000c826f98f6e35d5fca08b/2`;

  useEffect(() => {
    fetch(baseURL, {method: "GET", headers: {"secret-key": "$2b$10$v2m1fCD4ZDMU4JSMXPZQ4O/AY2CTfn/LxIvX9VHFXz1xXs5DaTl1u"}})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setArtistDetails(data[props.properties.match.params.id - 1]);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [baseURL])
  
  let myAlbums = [];
  let albums = () => {
    if (artistDetails.albums && artistDetails.albums.length > 0) {
      for (let i = 0; i < artistDetails.albums.length; i++) {
        let x = (
          <div className="col-12 col-lg-6 text-center">
            <img className="albumImg" key={artistDetails.albums[i].cover} src={`../../images/albums/${artistDetails.albums[i].cover}.jpg`} alt="cover"></img>
            <div>
              <ul className="myList">
                <li className="albumProps">Title: {artistDetails.albums[i].title}</li>
                <li className="albumProps">Year: {artistDetails.albums[i].year}</li>
                <li className="albumProps">Price: ${artistDetails.albums[i].price}</li>
              </ul>
            </div>
          </div>
        );
        myAlbums.push(x)
      }
    }
  }
albums()

  return (
    <div className="myContainer">
      <div>
        <h1 className="text-center text-white mt-4">{artistDetails.name}</h1>
        <img className="imgCenter" src={`../../images/covers/${artistDetails.cover}.jpg`} alt={artistDetails.name}></img>
        <p className="col-12 col-lg-6 m-auto text-white py-4">{artistDetails.bio}</p>
      </div>
      <div className="row m-2">
        {myAlbums}
      </div>
    </div>
  );
}

export default ArtistDetailsComponent;