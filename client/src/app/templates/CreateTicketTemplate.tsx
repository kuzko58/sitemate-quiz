"use client";
import React, { useState } from "react";

const CreateTicketTemplate = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const handleChange: React.FormEventHandler<HTMLFormElement> = (event) => {
    const { name, value } = event.target as HTMLInputElement;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!state.title) {
      setErrors((prev) => ({
        ...prev,
        title: "title is required",
      }));
      return;
    }

    if (!state.description) {
      setErrors((prev) => ({
        ...prev,
        description: "description is required",
      }));
      return;
    }

    console.log("state", state);
  };
  return (
    <div>
      <form
        className="flex flex-col gap-5 p-5 max-w-[500px]"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Create A New Ticket</h2>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input
            className="h-10 rounded-lg border-2 border-blue-300 bg-transparent"
            name="title"
          />
          <p className="text-sm text-red-500">{errors.title}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Description</label>
          <textarea
            className="h-10 rounded-lg border-2 border-blue-300 bg-transparent min-h-[200px]"
            name="description"
          />
          <p className="text-sm text-red-500">{errors.description}</p>
        </div>
        <button
          className="w-full h-10 rounded-lg bg-blue-500 hover:bg-blue-600"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTicketTemplate;
