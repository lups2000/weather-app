import { InputGroup, FormControl } from "react-bootstrap";

export function LocationSelection() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter a location"
        aria-label="Enter a location"
        aria-describedby="basic-addon2"
      />
    </InputGroup>
  );
}
