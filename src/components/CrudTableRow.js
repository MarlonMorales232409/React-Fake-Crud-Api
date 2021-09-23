import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    let {name, lastName, id} = el;

    return (
    <tr className = "table-row">
        <td><p className="table-p">{name}</p></td>
        <td>{lastName}</td>
        <td>
            <button className = "data-button" onClick = {()=> setDataToEdit(el)}>Edit</button>
            <button className = "data-button" onClick = {()=> deleteData(id)}>Delete</button>
        </td>
    </tr>
    )
}
