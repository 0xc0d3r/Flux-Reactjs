var comments;

var CommentBox = React.createClass({
  getInitialState: function(){
    return {data:[]};
  },
  handleCommentSubmit: function(comment){
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data:newComments});
  },
  render: function(){
    var commentBox =
    <div>
      <CommentList data={this.state.data} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
    </div>;
    return (commentBox);
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment user={comment.author} comment={comment.text} />
      );
    });
    var commentList = <div>{commentNodes}</div>;
    return (commentList);
  }
});

var Comment = React.createClass({
  render: function(){
    var comment =
    <div>
      <h2>{this.props.user}</h2>
      {this.props.comment}
    </div>;
    return (comment);
  }
});


var CommentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var user = React.findDOMNode(this.refs.user).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if(!user || !text){
      return;
    }

    this.props.onCommentSubmit({author:user,text:text});
    React.findDOMNode(this.refs.user).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function(){
    var form =
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" id="user" placeholder="Username" ref="user" />
      <br/><br/>
      <input type="text" name="comment" id="comment" placeholder="Comment" size="32" ref="text" />
      <input type="submit" value="Comment" />
    </form>;
    return (form);
  }

});

React.render(<CommentBox data={comments} />,document.getElementById('comment-box'));

/*

*/
