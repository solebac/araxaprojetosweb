type Props = {
  option: string | undefined;
  slog?: string | undefined;
};
const Options = ({ option, slog = "" }: Props) => {
  let test = option?.indexOf("TECNOLOGIA") === 1 ? true : false;
  if (option?.indexOf(slog) === 1) {
    console.log("slog-01.: ", slog);
    console.log("Option.: ", option);
    test = true;
  }
  return (
    <>
      <option value={option} selected={test}>
        {option}
      </option>
    </>
  );
};
export default Options;
