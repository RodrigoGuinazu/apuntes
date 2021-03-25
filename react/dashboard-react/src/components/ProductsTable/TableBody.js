import React from 'react'

function TableBody(props) {
    return (
        <>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
                <td>
                    <ul>
                        <li>Category 01</li>
                        <li>Category 02</li>
                        <li>Category 03</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span className="text-danger">Red</span></li>
                        <li><span className="text-primary">Blue</span></li>
                        <li><span className="text-success">Green</span></li>
                    </ul>
                </td>
                <td>245</td>
            </tr> 
        </>
    )
}

export default TableBody