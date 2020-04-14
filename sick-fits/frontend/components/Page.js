import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'

export default class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <Nav />
                {this.props.children}
            </div>
        )
    }
}
