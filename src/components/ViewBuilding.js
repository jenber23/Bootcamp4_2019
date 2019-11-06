import React from 'react';

/*
	-Capture building ID to look-up the additional information for the building
	-Return additional details of the building to be rendered on the screen for the user
*/

class ViewBuilding extends React.Component {
	render() {
		//props that will used here
		const { data,selectedBuilding } = this.props; 
		
		const buildData = data.filter(building => building.id === selectedBuilding)
		.map(building => {

			if (!building){ //until select a building, display message
				return(
					<div>
						<p>
							{' '}
							<i>Click on a name to view more information</i>
						</p>
					</div>
				);
				
			}
			console.log("Displaying building data");
				//console.log(this.state.building.code);
			return(
				
				//Coordinates must exist otherwise, output nothing
				//conditional rendering notes: https://www.robinwieruch.de/conditional-rendering-react
				<div>	
					<div>
						<li>Code: { building.code }</li><p />
						<li>Name: { building.name }</li><p />
						<li>Address: { building.address }</li><p />
						<li>Coordinates:

						<ul>Latitude: { building.coordinates && building.coordinates.latitude }</ul>
						<ul>Longitude: { building.coordinates && building.coordinates.longitude }</ul><p />
						</li>
						
					</div>
				</div>
			);
		});
		
		if(!selectedBuilding){	//No building found/selected, display temp message
			return(
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		else	//otherwise display building data captured
		{
			return(
				<div> {buildData}	</div> 
			);
		}
		
	}

}
export default ViewBuilding;
