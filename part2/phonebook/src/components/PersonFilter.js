const PersonFilter = (props) => {
  return (
    <form onSubmit={props.sub}>
      <div>
        {props.text} <input value={props.new} onChange={props.change} />
      </div>
    </form>
  );
};
export default PersonFilter;
