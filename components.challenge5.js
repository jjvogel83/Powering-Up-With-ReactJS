//Challenge 5 (JSX and Collections)
//components.js
class RobotItems extends React.Component {
  render() {
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Topics I am interested in</h3>
        <ul>
            {topics.map( () => <li>{topics}</li> )}
        </ul>
      </div>
    );
  }
}