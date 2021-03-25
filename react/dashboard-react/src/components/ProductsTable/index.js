import React from 'react'
import Table from './Table'

function ProductsTable() {
    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <Table />
                </div>
            </div>
        </>
    )
}

export default ProductsTable;