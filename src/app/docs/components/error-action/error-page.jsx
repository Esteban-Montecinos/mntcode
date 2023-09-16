import Form from "./form";

export default function ErrorPage() {
  async function fetchData(formData) {
    "use server";
    const name = formData.get("name");
    if (name === "") return { error: "Name is required" };
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
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
}
