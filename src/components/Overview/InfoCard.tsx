export interface InfoCardProps {
  title: string;
  value: string;
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 10,
        padding: 20,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 12, color: "white" }}>{props.title}</div>
      <div style={{ fontSize: 20, color: "white" }}>{props.value}</div>
    </div>
  );
}
