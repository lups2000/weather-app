import { InputGroup, FormControl } from "react-bootstrap";

export interface LocationSelectionProps {
  title: string;
}

export function LocationSelection(props: LocationSelectionProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{props.title}</span>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a location"
          aria-label="Enter a location"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </div>
  );
}
