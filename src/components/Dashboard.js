import React, {Component} from "react";
import axios from "axios";
import Form from "./Form";

class Dashboard extends Component {
   constructor(props){
    super(props)
    this.state = {
      product: [],
      loading: true,
      error: ""
    };
    this.updateProduct = this.updateProduct.bind(this);

   }
    componentDidMount() {
      axios.get("./api/product")
      .then(respond => {
        console.log(response.data)
        this.setState({product: Response.data});
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false, error: "An error occurred"});
      });
    }
    updateProduct(newProduct) {
      this.setState({ product: newProduct });
    }

    render() {

      const {product} = this.state;

      return (
       
       <div className="Dashboard">


         { product.map((product, index) => {
            return(
              <Product key={index} index={index} product={product} updateProduct={this.updatePro}/>

            )}
          )}
      
         </div>
      );
    }
  }

    

export default Dashboard;