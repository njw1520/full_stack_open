const App = () => {
  const course = "Half Stack Application Development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using Props to Pass Data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content
        p1={parts[0].name}
        e1={parts[0].exercises}
        p2={parts[1].name}
        e2={parts[1].exercises}
        p3={parts[2].name}
        e3={parts[2].exercises}
      />
      <Total
        e1={parts[0].exercises}
        e2={parts[1].exercises}
        e3={parts[2].exercises}
      />
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
