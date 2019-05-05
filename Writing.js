import React, { Component } from "react";
 
class Writing extends Component {
  render() {
    return (
      <div>
        <h2>Mike McMillan's Writing</h2>
        <h3>Articles</h3>
        <ul>
          <li><a href="https://medium.freecodecamp.org/lexical-scoping-in-javascript-e876cd221b74">An easy intro               to Lexical Scoping in JavaScript</a></li>
        </ul>
        <h3>Books</h3>
        <ul>
          <li><a href="http://shop.oreilly.com/product/0636920029557.do">Data Structures & Algorithms with             JavaScript</a>
          </li>
          <li><a href="https://www.amazon.com/Data-Structures-Algorithms-Using-C-ebook/dp/B00AHTN4ZW">Data  
            Structures and Algorithms Using C#</a>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Writing;