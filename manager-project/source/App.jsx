import React from 'react'

import './app.scss'

import Button from './components/button/index.jsx'
import Table from './components/table/index.jsx'

const rand = (...args) => {
    return args[ Math.floor(Math.random() * args.length) ]
}

const fetchTest = () => {
    fetch('http://localhost:8082/identifier/22')
        .then(
            stream => stream.json().then(console.log.bind(console))
        )
    return true;
};

export default ({ name }) => (
    <div className="container-md">
        <header className="header row justify-content-center align-items-center" style={{ 'minHeight' : '10em' }}>
            <div className="col text-center">{ name }</div>
        </header>
        <main className="main row justify-content-center">
            <div className="col-12 text-center">
                <Button onClick={fetchTest}>Despesa</Button>
                <Button onClick={fetchTest}>Receita</Button>
            </div>
            <div className="col-12">
                <Table responsive={true} paginator={{
                    perPage: 10,
                    scheme: [ 'First', 'Last', 'Handle' ],
                    collection : Array(40).fill(null).map((_, index) => ({
                        First: rand('Mark', 'Jacob', 'Larry'),
                        Last: rand('Otto', 'Thornton', 'the Bird'),
                        Handle: `${rand('@mdo', '@fat', '@twitter')}-${index}`,
                    }))
                }} />
            </div>
        </main>
    </div>
);