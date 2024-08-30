import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Indonesia, offically the Tepublic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumtra, java, Sulawesi, and parts of Borneo and New Guinea."
        
        ></TripData>
         <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Indonesia, offically the Tepublic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacfic oceans. It consists of over 17,000 islands, including Sumtra, java, Sulawesi, and parts of Borneo and New Guinea."
        
        ></TripData>
         <TripData
        image={Trip3}
        heading="Trip in France"
        text="Indonesia, offically the Tepublic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumtra, java, Sulawesi, and parts of Borneo and New Guinea."
        
        ></TripData>
        
      </div>
    </div>
  );
}

export default Trip;
