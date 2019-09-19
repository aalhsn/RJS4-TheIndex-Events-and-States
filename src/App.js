import React, {Component} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state ={
    currentAuthor:null
  }
  
  selectAuthor = author =>{
    this.setState({
      currentAuthor: author
    });
  }

  showDetail=()=>this.state.currentAuthor? <AuthorDetail author={this.state.currentAuthor}/> : <AuthorsList authors={authors} selectAuthor={this.selectAuthor}/>
  showList= ()=><AuthorsList authors={authors} selectAuthor={this.selectAuthor}/>
  render(){
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar showList={this.showList} />
        </div>
        <div className="content col-10">
          {this.showDetail()}
        </div>
      </div>
    </div>
  );
}
}

export default App;
