import React from 'react';
import { Link } from 'react-router-dom'

export default function Suggestion(props) {

    const { showSuggestions, userInput, filteredSuggestions, activeSuggestion, onSuggestionClick, loadingSuggestion, setSearchInput} = props
    
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            return (
                <ul className="suggestions col-12 rounded">
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
          
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
                    return (
                      <Link to={`/bantuan/${suggestion.categorySlug}/${suggestion.topics.topicSlug}`} onClick={()=> setSearchInput('')}>
                        <li className={className} key={suggestion} onClick={(e) => onSuggestionClick(e)}>
                          {suggestion.topics.title}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
            )
        } else {
          if(loadingSuggestion){
            return (
                <div className="no-suggestions">
                  <div className="spinner-border spinner-border-sm text-warning mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <em>Fetching...</em>
                </div>
            )
          } else {
            return (
                <div className="no-suggestions">
                  <em>No suggestions available.</em>
                </div>
            )
          }
        }
    } else {
      return ( <></> )
    }
}
