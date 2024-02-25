import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1',{id: "Heading", erc: "hsdfadsf"},
 React.createElement('h1',{id: "Child", erc: "hsdfadsf"},[
    React.createElement('h1',{}, "Hello 1"),
    React.createElement('h2', {}, "Hello 2 1")
    ]))

    const rootElement = ReactDOM.createRoot(document.getElementById('root'))

    rootElement.render(heading)