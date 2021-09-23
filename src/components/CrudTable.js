import React from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 
          ? 
          (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )
          :
          (
            <tr>
              <td colSpan="3">It can't conect with data base, please try it again in few minutes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
