import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Message } from "./Message";
import { Loader } from "./Loader";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = "http://localhost:5000/waifus";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    let options = {
      // Options para las peticiones posts
      body: data,
      headers: { "content-type": "application/json" },
    };

    data.id = Date.now();
    helpHttp()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let endpoit = `${url}/${data.id}`;

    let options = {
      // Options para las peticiones posts
      body: data,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .put(endpoit, options)
      .then((res) => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Are you sure to delete this waifu?");

    if (isDelete) {
      let endpoit = `${url}/${id}`;

      let options = {
        headers: { "content-type": "application/json" },
      };

      helpHttp()
        .del(endpoit, options)
        .then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2 className="app_title">CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {error && <Message msg={error} color="#dc3545" />}
      {loading && <Loader />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};
