const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        p1={part1}
        e1={exercises1}
        p2={part2}
        e2={exercises2}
        p3={part3}
        e3={exercises3}
      />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>Course Name: {props.course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.p1} exercises={props.e1} />
      <Part part={props.p2} exercises={props.e2} />
      <Part part={props.p3} exercises={props.e3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}: {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.e1 + props.e2 + props.e3}</p>
    </div>
  );
};

export default App;
