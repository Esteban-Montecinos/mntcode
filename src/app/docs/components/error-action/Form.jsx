"use client";
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
}
