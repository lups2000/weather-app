import { GPT } from "./GPT";
import { InfoCard } from "./InfoCard";

export function LocationRightPart() {
  return (
    <div style={{ flex: 1, padding: 30 }}>
      <div>
        <h5>Today Overview</h5>
        <p style={{ marginTop: -10, fontSize: 12 }}>Last Update at...</p>
        <GPT />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 30,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <InfoCard title="Title 1" value="Value 1" />
          </div>
          <div style={{ flex: 1 }}>
            <InfoCard title="Title 2" value="Value 2" />
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <InfoCard title="Title 3" value="Value 3" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", gap: 10, flex: 1 }}
          >
            <div style={{ flex: 1 }}>
              <InfoCard title="Title 1" value="Value 1" />
            </div>
            <div style={{ flex: 1 }}>
              <InfoCard title="Title 2" value="Value 2" />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: 30 }} />
    </div>
  );
}
