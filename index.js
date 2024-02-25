const heading = React.createElement('H1',{id: "Heading", erc: "hsdfadsf"}, React.createElement('H1',{id: "Child", erc: "hsdfadsf"},[
    React.createElement('H1',{}, "Hello 1"),
    React.createElement('H2', {}, "Hello 2 1")

    ]))

    const rootElement = ReactDOM.createRoot(document.getElementById('root'))

    rootElement.render(heading)