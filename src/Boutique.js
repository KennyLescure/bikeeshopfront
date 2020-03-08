import React, { Component } from 'react';
import './App.css';
import Produits from './produit.json';
import { Button, Dropdown } from 'react-bootstrap';

class Boutique extends React.Component{
  render (){
    return(
      <div id="unproduit">
        {Produits.map((postDetail, index) => {
          return <tr id="trproduit">
            <td id="description">{postDetail.description}</td>
            <td id="name">{postDetail.name}</td>
            <td id="price">{postDetail.price} €</td>
            </tr>
        })}
      </div>
    )
  }
}

export default Boutique;
