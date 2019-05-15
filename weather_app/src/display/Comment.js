import React from 'react';
import './comment.css';
class Comment extends React.Component{
  constructor(){
    super();
    this.state={
      i:0,
    }
  }
   fun1=()=>{
  var a=document.getElementById("userComments").value;
  document.getElementById("userComments").value='';
  var para=document.createElement("span");
  var q=document.createTextNode(" "+a);
  para.appendChild(q);
  var p=document.createElement("i");
  p.setAttribute("class", "fa fa-user");
  let i=this.state.i;
  i+=1;
  this.setState({i:i})
  p.appendChild(para);
  var s=document.createElement('p');
  s.appendChild(p);
  document.getElementById("addEventNames").appendChild(s);

}
  render(){
    return(
    <div className="container">
    <input type="text" placeholder="Add your comments" id="userComments"/>
    <button onClick={this.fun1} id="addList">Comment</button>
    <div id="addEnents">
      Comments({this.state.i})
      <div id="addEventNames"></div>
    </div>
    </div>
    )
  }
}
export default Comment;
