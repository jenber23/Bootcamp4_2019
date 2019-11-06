import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
/*
    ***REMOVE DOES NOT WORK, did not have time to finish :( ***
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
