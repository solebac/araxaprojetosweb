interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const MatrixContainer = ({ children }: AuxProps) => {
  return (
    <>
      <div className="matrix-container">{children}</div>
    </>
  );
};
export default MatrixContainer;
