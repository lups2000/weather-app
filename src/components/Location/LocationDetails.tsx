import { LocationLeftPart } from "./LocationLeftPart";
import { LocationRightPart } from "./LocationRightPart";

export function LocationDetails() {
  return (
    <div style={{ display: "flex" }}>
      <LocationLeftPart />
      <LocationRightPart />
    </div>
  );
}
