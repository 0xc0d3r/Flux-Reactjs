var Hello = React.createClass({
  render :  function(){
    var hello = <h2>Hello, {this.props.name}!</h2>;
    return (hello);
  }
});

React.render(<div><Hello name="Praneeth" /><Hello name="Anesh" /></div>,document.getElementById('hello'));
