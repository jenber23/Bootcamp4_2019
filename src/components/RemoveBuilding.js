import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
/*
    Need to add a building to the listing
    Note: do not modify data.js (upon refresh, added is removed)

    Need to make implement an "add" button
    Then have search functions to input data
*/
//https://reactjs.org/docs/forms.html
//https://react-bootstrap.github.io/components/buttons/

class RemoveBuilding extends React.Component {
	render() {
		//props that will used here
		const { data } = this.props; 
        
        <div>
            <ButtonToolbar>
                <Button RemoveBuild="danger" size="sm">
                Delete
                </Button>
            </ButtonToolbar>
        </div>

    }
    

}
export default RemoveBuilding;
