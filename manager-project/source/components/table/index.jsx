import React from 'react';

import './style.scss';

export default class Table extends React.Component {
    constructor({ paginator, responsive = false }) {
        super();
        // .table-dark
        this.state = {
            actualPage: 1,
            paginator,
            responsive
        }
    }

    tableHeader() {
        const scheme = this.state.paginator.scheme;
        return (
            <thead>
                <tr>
                    <th scope="col">#</th>
                    { scheme.map( (name, index) => (<th key={index} scope="col">{name}</th>) ) }
                </tr>
            </thead>
        )
    }

    tableBody() {
        const scheme = this.state.paginator.scheme;
        const collection = this.state.paginator.collection;
        const total = this.state.paginator.collection.length;

        const tableRows = [];
        const actualPage = this.state.actualPage
        const perPage = this.state.paginator.perPage
        const itensForThisPage = collection.slice((actualPage - 1 ) * perPage, perPage * actualPage);

        for (let [ index, entry ] of itensForThisPage.entries()) {
            tableRows.push(
                <tr key={index}>
                    <th scope="row">{perPage * (actualPage - 1) + index}</th>
                    <td>{ entry[scheme[0]] }</td>
                    <td>{ entry[scheme[1]] }</td>
                    <td>{ entry[scheme[2]] }</td>
                </tr>
            )
        }

        return (
            <tbody className="">
                { tableRows }
            </tbody>
        )
    }

    tablePaginator() {
        const perPage = this.state.paginator.perPage
        const total = this.state.paginator.collection.length
        return (
            <nav className="pagination justify-content-center my-3" aria-label="Page navigation example">
                <div className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </div>
                {Array(Math.ceil(total/perPage)).fill(null).map((_, index) => {

                    return (
                        <div className={`page-item ${ this.state.actualPage === index+1 ? 'active' : '' }`} key={index}>
                            <a className="page-link" onClick={(event) => (event.preventDefault(), this.setState({ actualPage : index + 1 }))} href="#">{index+1}</a>
                        </div>
                    )
                })}

                <div className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </div>
            </nav>
        )
    }

    render() {

        let table = (
            <table className="table table-hover table-striped">
                { this.tableHeader() }
                { this.tableBody() }
            </table>
        )

        table = this.state.responsive ? <div className="table-responsive">{ table }</div>  : table;

        return (
            <React.Fragment>
                {table}
                {this.tablePaginator()}
            </React.Fragment>
        )
    }
}