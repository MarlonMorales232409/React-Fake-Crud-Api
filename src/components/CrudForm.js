import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  lastName: "",
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.lastName) {
      alert("Incomplete Data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="app__form-container">
      <h3 className="app__form-title">
        {!dataToEdit ? "Add new Waifu" : "Edit this Waifu"}
      </h3>
      <form className="app__form-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add the Name"
          onChange={handleChange}
          value={form.name}
          className="app__form-input"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Add the Last Name"
          onChange={handleChange}
          value={form.lastName}
          className="app__form-input"
        />

        <input
          type="submit"
          value={dataToEdit ? "Complete" : "Send"}
          className="app__form-buttom"
        />
        <input
          type="reset"
          value="Clear"
          onClick={handleReset}
          className="app__form-buttom"
        />
      </form>
    </div>
  );
};
