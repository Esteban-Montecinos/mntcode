export default function PlaceholderInitials() {
    const code = `<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-600">
    <span aria-label="Esteban Montecinos" className="font-medium text-neutral-100">
        EM
    </span>
</div>`;
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Placeholder initials</h2>
        <p className="text-sm text-neutral-400">It can be used to display first and last name initials when a profile image is not available.</p>
        <div className="flex flex-row justify-center gap-4 p-6 border rounded-t-lg border-neutral-700">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-600">
            <span
              aria-label="Esteban Montecinos"
              className="font-medium text-neutral-100"
            >
              EM
            </span>
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-neutral-600">
            <span
              aria-label="Esteban Montecinos"
              className="font-medium text-neutral-100"
            >
              EM
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-6 border rounded-b-lg border-neutral-700">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
  )
}