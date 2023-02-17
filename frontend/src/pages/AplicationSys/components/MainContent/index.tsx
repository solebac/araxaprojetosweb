interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}
const MainContent = ({ children }: AuxProps) => {
  return (
    <>
      <main className="content">{children}</main>
    </>
  );
};
export default MainContent;
