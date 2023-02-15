const PersonForm = (props) => {
  return (
    <form onSubmit={props.sub}>
      <div>
        {props.nametext}{" "}
        <input value={props.namenew} onChange={props.namechange} />
      </div>
      <div>
        {props.numbertext}{" "}
        <input value={props.numbernew} onChange={props.numberchange} />
      </div>
      <div>
        <button type="submit">{props.buttontext}</button>
      </div>
    </form>
  );
};
export default PersonForm;
