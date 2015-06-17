var Comment = React.createClass({
  render: function(){
    var comment =
    <div>
      <b>Anesh Parvatha</b>&nbsp;
      <text>Sample comment</text><br/>
      <text>Like</text>
    </div>;

    return (comment);
  }
});

React.render(<Comment/>, document.getElementById('content'));
