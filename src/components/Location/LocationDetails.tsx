import { LocationLeftPart } from "./LocationLeftPart";
import { LocationRightPart } from "../Overview/LocationRightPart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function LocationDetails() {
  const { city } = useParams();

  useEffect(() => {
    //call the api
  }, [city]);

  return (
    <div style={{ display: "flex" }}>
      <LocationLeftPart />
      <LocationRightPart />
    </div>
  );
}
