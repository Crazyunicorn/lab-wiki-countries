import React, { Component } from 'react';
import Country from './countries.json';

class Details extends Component{
  constructor(props) {
    super(props)
  }


render(){
  return(

    <tbody>
      <tr>
        <td >{this.props.name}</td>
        <td>{this.props.capital}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{this.props.area} km
          <sup>2</sup>
        </td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            {Country[1].borders.map((border, index) => {
              return(
                  <li><a href="/AND">{border}</a></li>
              )
            })


            }

          </ul>
        </td>
      </tr>
    </tbody>
  );
}
}

export default Details;
