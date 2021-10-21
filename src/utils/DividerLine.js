const DividerLine = () => {
  let style = { width: "3rem", height: ".15rem", background: "gold" };
  return (
    <div className="row mt-2 mb-3">
      <div className="col-lg-1 m-1" style={style} />
      <div className="col-lg-1 m-1" style={style} />
    </div>
  );
};

export default DividerLine;
