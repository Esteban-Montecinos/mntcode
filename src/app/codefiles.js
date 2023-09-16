export const serverAction = `module.exports = {
    experimental: {
        serverActions: true,
    },
}`
export const errorActionPage = `import Form from "./form";

export default function ErrorPage() {
  async function fetchData(formData) {
    "use server";
    const name = formData.get("name");
    if (name === "") return { error: "Name is required" };
    const data = await fetch(
    'https://...'
    ).then((res) => res.json());
    return data;
  }
  return (
    <Form
      action={fetchData}
      className="flex flex-col items-start max-w-3xl gap-2 p-4 m-auto bg-white rounded-lg"
    >
      <label className="text-sm text-neutral-950" htmlFor="name">
        Name
      </label>
      <input
        className="w-full p-2 bg-transparent border rounded-md text-neutral-950 border-neutral-950"
        type="text"
        id="name"
        name="name"
        placeholder="rick"
      />
      <button className="w-full p-2 rounded-md bg-neutral-950 text-neutral-200">
        Fetch Data
      </button>
    </Form>
  );
}`
export const errorActionForm = `"use client";
import { useState } from "react";

export default function Form({ action, children, ...props }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function formAction(formData) {
    const res = await action(formData);
    if (res.error) {
      setError(res.error);
      setData(null)
    } else {
      setError(null);
      setData(res.results[0].image)
    }
  }
  return (
    <form action={formAction} {...props}>
      {!!error && (
        <p className="w-full p-2 text-sm text-red-500 bg-red-200 rounded-md">{error}</p>
      )}
      {!!data && (
        <img className="self-center w-24 h-24 rounded-full " src={data} alt="Character avatar"/>
      )}
      {children}
    </form>
  );
}`