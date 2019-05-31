import React, {Component} from "react";
import axios from "axios";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      price: "",
     
    };


   handleAddItemChange(e) { 
    this.setState({ [name]: value});

    const {name, image, price} = e.target

   handleCancelItemChange(e)
    this.setState({ [name]: value});
     
   }
 }

    render() {

      return (
        <div className="Form">

           <button id="addButton" onClick={e => this.addItem(e)}>Add to inventory</button>
           <button id="cancelButton" onClick={e => this.cancelItem(e)}>Cancel to inventory</button>

           <input value={this.state.name} name="name" onChange={this.handleChange} placeholder="name" />
           <input value={this.state.image} name="image" onChange={this.handleChange} placeholder="image" />
           <input value={this.state.price} name="price" onChange={this.handleChange} placeholder="price" />
   
         </div>
      );
    }
  };

export default Form;