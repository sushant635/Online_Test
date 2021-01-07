import logo from "./logo.svg";
import "./App.css";
import React from "react";
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.getanswers = this.getanswers.bind(this);
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/Objective/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data,
        });
      });
     
  }
 
  getanswers(){
    document.getElementById("UserAnswers").innerHTML = "";
    var e = document.getElementsByTagName('input');
    for (var  i = 0; i < e.length; i++) {
    if (e[i].type == "radio") {
        if (e[i].checked) {
        document.getElementById("UserAnswers").innerHTML += "Q" + e[i].name + "Answer you selected is :" + e[i].value + "<br/>";
        }
    }
  }
}
  render() {
    var self = this;
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    }
    else{
        console.log(items)
        $(document).ready(function(){
          $("#but1").click(function(){
              $(".rb").show();
              $(".rb").attr("disabled",true)
          })
      });
      
    
      return(
        
        <div className='container'>
           <h1 className="text-center">Online Test</h1>
          {items.map(items => (
            <div className="jumbotron">
             
            <table>
              <tbody>
                
              <tr>
                <td key={items.key} >{items.id}) {items.question} ?</td>
              </tr>
              <tr>
                <td><input type="radio" id="option1" name="{ items.id }"  className="rb" value="{ items.option1 }"/> {items.option1} </td>
              </tr>
              <tr>
                <td><input type="radio" id="option1" name="{ items.id }"   className="rb" value="{ items.option2 }"/> {items.option2} </td>
              </tr>
              <tr>
                <td><input type="radio" id="option1" name="{ items.id }"   className="rb" value="{ items.option3 }"/> {items.option3} </td>
              </tr>
              <tr>
                <td><input type="radio" id="option1" name="{ items.id }"   className="rb" value="{ items.option4 }"/> {items.option4} </td>
              </tr>
              <tr>
                <td><label  id="correct_ans"   className="rb"><b>{ items.correct_ans }</b></label></td>
              </tr>
                
              </tbody>
            
            </table>
            <hr/>
            </div>
           
          ))}
          
          <input type="Submit" id="but1" value="Submit" className="btn btn-primary" onClick='{() => self.getanswers}'></input>
          <b id="UserAnswers"></b>
        </div>
        
        
       
       );
    }
  }
}

export default App;
