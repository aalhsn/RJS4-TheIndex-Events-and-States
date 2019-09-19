import React, {Component}from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {

  state = {
    authors:this.props.authors
  }
  
  //You need a state here that stores filteredAuthors
  filterAuthors = query => {
    const authors = this.props.authors;
    this.setState({
      authors:authors.filter(author => `${author.first_name} ${author.last_name}`.toLowerCase().includes(query))
    })
    
  };

  



  render(){
  const authorCards = this.state.authors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} selectAuthor={this.props.selectAuthor} />
    ));
  return (
    <>
    <SearchBar filterAuthors={this.filterAuthors}/>
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
    </>
  );
}
}

export default AuthorsList;
