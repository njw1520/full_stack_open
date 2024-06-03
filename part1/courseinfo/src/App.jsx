const App = () => {
  const course = "Half Stack Application Development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using Props to Pass Data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a Component",
    exercises: 14,
  };

  console.log(part1.name);
  console.log(part1.exercises);

  return (
    <div>
      <Header course={course} />
      <Content
        p1={part1.name}
        e1={part1.exercises}
        p2={part2.name}
        e2={part2.exercises}
        p3={part3.name}
        e3={part3.exercises}
      />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
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
