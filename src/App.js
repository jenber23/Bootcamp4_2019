import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data

    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    
    //property: filterText
    //data: value
    this.setState({ filterText: value })  
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    
    //property: selectedBuilding
    //data: id
    this.setState({ selectedBuilding: id })
  }

  addBuilding(codeV, nameV, addressV, latitudeV, longitudeV)
  {
    console.log(codeV);
    const currentData = this.state.data;
    currentData.push(
      {
        code: codeV,
        name: nameV,
        address: addressV,
        coordinates: {
          latitude: latitudeV,
          longitude: longitudeV
        }
      });
      console.log({currentData})
    this.setState({ data: currentData })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}    
                  />
                  
                </table>
              </div>
            </div>
            <div className="column2">
            <b>Building Description</b>
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <div className="column3">
            <AddBuilding 
                addBuilding={this.addBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
