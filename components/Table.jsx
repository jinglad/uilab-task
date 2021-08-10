import Header from "./Header";

const Table = () => {
  return (
    <>
      <div style={{ width: "85%" }}>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <h1>
            <pre>This is dummy table content</pre>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Table;
