import ArtistList from '../ArtistList/ArtisltList';
import Header from '../Header/Header';
import './Home.css';

const Home = (props) => {
  return (
    <div>
      <Header></Header>
      <ArtistList properties={props}></ArtistList>
    </div>
  );
}

export default Home;