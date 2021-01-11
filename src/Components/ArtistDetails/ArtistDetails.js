import ArtistDetailsComponent from "../ArtistDetailsComponent/ArtistDetailsComponent";
import Header from "../Header/Header";


const ArtistDetails = (props) => {
  return (
    <div>
      <Header></Header>
      <ArtistDetailsComponent properties={props}></ArtistDetailsComponent>
    </div>
  );
}

export default ArtistDetails;