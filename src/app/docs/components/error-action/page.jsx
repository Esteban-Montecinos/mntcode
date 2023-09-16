import { Snippet } from "@nextui-org/snippet";
import { Chip } from "@nextui-org/chip";
import ErrorPage from "./error-page";
export const metadata = {
  title: "Display error server action | MntUI - Next.js",
};

export default function page() {
  return (
    <main className="flex flex-col gap-6 p-4">
      <div className="flex flex-col gap-2">
        <p className="text-base">
          You can enable Server Actions in your Next.js project by enabling the
          experimental <Chip size="md">serverActions</Chip> flag.
        </p>
        <Snippet
          hideSymbol
          classNames={{ base: "items-start", pre: "language-html" }}
        >
          <span>{`//next.config.js`}</span>
          <span>{`module.exports = {`}</span>
          <span>{`  experimental: {`}</span>
          <span>{`    serverActions: true,`}</span>
          <span>{`  },`}</span>
          <span>{`}`}</span>
        </Snippet>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">
          Displaying error for a server action form in Next.js 13
        </h1>
        <p className="text-base text-neutral-400">
          Displays a callout for user attention.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <ErrorPage/>
        <Snippet
          hideSymbol
          classNames={{ base: "items-start"}}
        >
          <span>{`//page.jsx`}</span>
          <span>{`import Form from "./Form"`}</span>
          <span>{`export default function ErrorPage() {`}</span>
          <span>{`  async function fetchData(formData) {`}</span>
          <span>{`    'use server'`}</span>
          <span>{`    const name = formData.get('name')`}</span>
          <span>{`    if(name === '') return {error: 'Name is required'}`}</span>
          <span>{`    const data = await fetch('https://...').then(res => res.json())`}</span>
          <span>{`    return data`}</span>
          <span>{`  }`}</span>
          <span>{`  return (`}</span>
          <span>{`  <Form `}</span>
          <span>{`  action={fetchData} `}</span>
          <span>{`  className="flex flex-col items-start max-w-3xl gap-2 p-4 m-auto bg-white rounded-lg"`}</span>
          <span>{`  >`}</span>
          <span>{`  <label className="text-sm text-neutral-950" htmlFor="name">Name</label>`}</span>
          <span>{`  <input`}</span>
          <span>{`  className="w-full p-2 bg-transparent border rounded-md text-neutral-950 border-neutral-950"`}</span>
          <span>{`  type="text"`}</span>
          <span>{`  id="name"`}</span>
          <span>{`  name="name"`}</span>
          <span>{`  placeholder="rick"`}</span>
          <span>{`  />`}</span>
          <span>{`  <button className="w-full p-2 rounded-md bg-neutral-950 text-neutral-200">Fetch Data</button>`}</span>
          <span>{`  </Form>`}</span>
          <span>{`  )`}</span>
          <span>{`}`}</span>
        </Snippet>
      </div>
    </main>
  );
}
