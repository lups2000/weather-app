import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export interface LocationSelectionProps {
  title: string;
  onChangeInput: (value: string) => void;
}

export function LocationSelection(props: LocationSelectionProps) {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{props.title}</span>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a location"
          aria-label="Enter a location"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.onChangeInput(input);
            }
          }}
        />
      </InputGroup>
    </div>
  );
}
