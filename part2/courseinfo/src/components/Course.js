const Part = (part) => (
  <>
    <li>
      {part.name} {part.exercises}
    </li>
  </>
);

const Content = ({ parts }) => (
  <>
    <ul>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </ul>
  </>
);

const Header = (props) => {
  // console.log("props", props);
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};
const Total = ({ parts }) => {
  // console.log("parts", parts);
  // console.log("part1", parts[0]);
  // console.log("part1 ex", parts[0].exercises);
  let sum = parts.reduce((a, v) => (a = a + v.exercises), 0);
  return (
    <>
      <p>total of {sum} exercises</p>
    </>
  );
};
const Course = ({ course }) => {
  console.log("course ", course.name);
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

const Courses = ({ courses }) => {
  console.log("courses", courses);
  let mapped = courses.map((course) => (
    <Course key={course.id} name={course.name} parts={course.parts} />
  ));
  console.log("mapped name", mapped[0].props.name);
  return (
    <>
      <ul>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
    </>
  );
};
export default Courses;
