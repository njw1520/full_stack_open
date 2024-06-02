const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Nate" />
      <Hello name="Jeff" />
      <Hello name="Peter" />
    </div>
  );
};

export default App;
