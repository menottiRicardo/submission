const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      <Part title={parts[0].name} amount={parts[0].exercises} />
      <Part title={parts[1].name} amount={parts[1].exercises} />
      <Part title={parts[2].name} amount={parts[2].exercises} />
    </div>
  );
};

const Part = ({ title, amount }) => {
  return (
    <div>
      <p>
        {title} {amount}
      </p>
    </div>
  );
};

const Total = ({ parts }) => {
  const total =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return <p>Number of exercises {total}</p>;
};

export default App;
