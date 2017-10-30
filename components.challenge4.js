//Challenge 4 (JSX and Plain JavaScript)
//components.js
class RobotTime extends React.Component {
  render() {
    const pi = Math.PI;
    return (
      <div className = "is-tasty-pie">
        The value of PI is approximately {pi}
      </div>
    );
  }
}
