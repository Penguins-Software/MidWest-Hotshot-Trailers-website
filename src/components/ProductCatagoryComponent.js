import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
// import "./ProductCatagoryComponent.css"

import data from '../data/data.json'

export default class ProductCatagoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagory: data.catagory
        }
      }

    render() {

        return(
            
            <div id='products' >
                <h1 className="display-4 text-center">Product Catagory</h1>

                <div className="row no-gutters">
                    <Container fluid >
                        {this.state.catagory.map((data) => 
                            <>
                                <img src={data.image} height="250px" width="250px" className="img-fluid p-1" alt="Responsive image" />
                            </>
                    )}
                    </Container>
                </div>

            </div>

        )
    }
}