import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

/*
    Need to add a building to the listing
    Note: do not modify data.js (upon refresh, added is removed)

    Need to make implement an "add" button
    Then have search functions to input data
    https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
    https://css-tricks.com/react-forms-using-refs/

*/

class AddBuilding extends React.Component {
    
    constructor() {
        super();
        this.state = {
          codeVal: '',
          nameVal: '',
          addrVal: '',
          latVal: '',
          longVal: ''

        }
      }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState(change);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.codeVal);
        console.log(this.state.nameVal);
        //on submit, capture the form data and return
        this.props.addBuilding(this.state.codeVal,this.state.nameVal,
            this.state.addrVal, this.state.latVal, this.state.longVal);
        //clear texts
        this.setState({
        codeVal: '',
        nameVal: '',
        addrVal: '',
        latVal: '',
        longVal: ''

        });
    }
    render() {
        
       
		return(   
            //refs
            //how to capture from forms using placeholder   
            //==> () callback 
            <div >
                <h3>Add a new building to the listing</h3>
              
                <form id="addForm" onSubmit={this.handleSubmit}>
                    <ul>Code</ul>
                    <input 
                        type="text" //text box
                        name="codeVal"
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.codeVal} 
                        placeholder="Enter Code" 
                    />
                    <ul>Name</ul>
                    <input 
                        type="text" //text box
                        name="nameVal"
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.nameVal} 
                        placeholder="Enter Name" 
                    />
                    <ul>Address</ul>
                    <input 
                        type="text" //text box
                        name="addrVal"
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.addrVal} 
                        placeholder="Enter Address" 
                    />
                    <p>Coordinates:</p>
                    <ul>Latitude</ul>
                    <input 
                        type="text" //text box
                        name="latVal"
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.latVal} 
                        placeholder="Enter Latitude" 
                    />
                    <ul>Longitude</ul>
                    <input 
                        type="text" //text box
                        name="longVal"
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.longVal} 
                        placeholder="Enter Longitude" 
                    />  
                    
                    <input className = "btn btn-success" type = "submit" value = "Add building" />
                </form>
            </div>
        );
       
    }


}
export default AddBuilding;
