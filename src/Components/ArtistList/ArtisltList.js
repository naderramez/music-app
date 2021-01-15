import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArtistList.css';

export default class ArtistList extends React.Component {
  constructor(props) {
    super(props)

    this.baseURL = "https://api.jsonbin.io/b/6000c826f98f6e35d5fca08b/2";
    this.state = {artists: []};
  }


  goToArtist = (artistId) => {
    this.props.properties.history.push(artistId)
  }

  artistListView = () => {
    if (this.state.artists && this.state.artists.length > 0) {
      return this.state.artists.map((item) => {
        let src = `../../images/covers/${item.cover}.jpg`;
        return (
          <NavLink className="col-12 col-lg-5" key={item.id} to={`/${item.id}`}>
              <div className="mb-4">
                <img className="imgCenter" src={src} alt={item.name}></img>
                <h3 className="text-center text-white">{item.name}</h3>
              </div>
          </NavLink>
        );
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-white text-center my-5">Browse The Artists</h1>
        <div className="row mt-4 evenly">
          {this.artistListView()}
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(this.baseURL, {method: "GET", headers: {"secret-key": "$2b$10$v2m1fCD4ZDMU4JSMXPZQ4O/AY2CTfn/LxIvX9VHFXz1xXs5DaTl1u"}})
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        this.setState({artists: result});
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


// onClick={() => {this.goToArtist(item.id)}}