interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}
const MatrixContainerFluid = ({ children }: AuxProps) => {
  return (
    <>
      <div className="container-fluid">{children}</div>
    </>
  );
};
export default MatrixContainerFluid;
