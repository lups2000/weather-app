import { LocationSelection } from "./LocationSelection";

export function LocationLeftPart() {
  const handleChangeInput = (value: string) => {
    //console.log(value);
  };

  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "#f0f0f0",
        padding: 20,
        height: "100vh",
      }}
    >
      <div>
        <h2>Munich</h2>
        <h6>Latitute/Longitude</h6>
        <LocationSelection title="City" onChangeInput={handleChangeInput} />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h5>Date</h5>
        <h5>Time</h5>
      </div>
      <hr />
      <div>
        <h5>Weather</h5>
        <p>Weather details go here...</p>
      </div>
    </div>
  );
}
