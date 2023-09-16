export default function Introduction() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <p className="text-base text-neutral-400">
          Re-usable components built using Next.js + Tailwind CSS.
        </p>
      </div>
      <p className="text-lg text-neutral-100">Pick the components you need.</p>
      <p className="text-lg text-neutral-100">
        Copy and paste the code into your project and customize to your needs.
      </p>
    </main>
  );
}
