import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;
		//return gives the filtered data
		
		const buildingList = data
		.filter(directory => {
			return (
				/*
					-Create a filter on the building list constant that allows you 
						to filter on the name of the building
					-Display only the buldings the meet the filter criteria
				*/
				
				//filter the array by name, do not display if no match	
				// indexOf() returns -1 if not present
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 
			);
		})
		.map(directory => {
			return ( //.map() creates a new array based on function called on every element
				/* Create an onClick listener action that will allow you to 
					click on a building name and capture the ID */

				//keys help React idenitfy which items changed + they're given inside array elements
				//onclick --> capture ID of building clicked
				<tr key={directory.id}
					onClick={() => selectedUpdate(directory.id)} > 
					
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});
		//return the list of all searched buildings found
		//console.log(buildingList);

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
