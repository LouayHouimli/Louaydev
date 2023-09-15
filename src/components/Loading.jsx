
import loadingGif from '../images/giphy.gif'; // Import the loading GIF
const Loading = () => {
  console.log(loadingGif); // Log the path to the GIF
  return (
    <div className="loading-screen">
      <img src={loadingGif} className="loading-gif" />
      <p className="loading-text">Loading...</p>
    </div>
  );
};
export default Loading;