import React from 'react';
//Search tutorial: https://www.youtube.com/watch?v=gpIbJsSsbz4&list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m&index=9&t=0s

/*
	-Capture the text that is typed into the textbox and store this value 
		using the filterUpdate() function
	-Use the onChange listener function
*/

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		
		const val = this.myValue.value

		//update as filter is updated
		this.props.filterUpdate(val)
		console.log("Filter update: " + val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
				
		//as user types in box, the search continuous to update to find the specific string
		return (
			<header>
				<form>
					<input 
						type="text" //text box
						ref={(value) => this.myValue = value}
						placeholder="Search by Name" 
						onChange={this.filterUpdate.bind(this)} //when box gets changed, update
					/>

				</form>
			</header>
			
		);
	}
}
export default Search;
