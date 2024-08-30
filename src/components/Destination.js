import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
     <DestinationData
     className="first-des"
      heading="Taal volcano , Batangas"
      text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is situated within the province of Batangas. Taal is known for its unique geological features, particularly its island within a lake, within an island within a lake setup, making it one of the most picturesque and intriguing volcanoes in the world.
The volcano's main crater contains a lake known as Crater Lake, which itself contains another small volcanic island called Vulcan Point."
img1={Mountain1}
img2={Mountain2}
     />
      <DestinationData
      className="first-des-reverse"
      heading="The Maldives, Batangas"
      text="The Maldives, renowned for its paradisiacal beaches, offers a multitude of stunning coastal retreats. From the powdery white sands of Veligandu Island to the designated tourist haven of Bikini Beach in Maafushi, and the tranquil shores of Hulhumale Island, each beach exudes its own unique charm and allure. . "
img1={Mountain3}
img2={Mountain4}
     />
    </div>
  );
};

export default Destination;
