import React from 'react'
import TableBody from './TableBody'
import TableTitle from './TableTitle'

function Table() {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <TableTitle />
                    </thead>
                    <tfoot>
                        <TableTitle />
                    </tfoot>
                    <tbody>
                        <TableBody />
                        <TableBody />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table