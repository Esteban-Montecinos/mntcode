export default function BasicAlert({
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
}) {
  const code = `<div className="flex items-center w-full gap-4 px-4 py-2 text-red-100 rounded-md bg-red-950">
    <IconExclamationCircle />
    <p className="text-sm">This is an error alert — check it out!</p>
</div>`;
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Basic alerts</h2>
      <p className="text-sm text-neutral-400">
        The alert offers four severity levels that set a distinctive icon and
        color.
      </p>
      <div className="flex flex-col gap-2 p-6 border rounded-t-lg border-neutral-700">
        {/**error alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-red-100 rounded-md bg-red-950">
          <IconExclamationCircle />
          <p className="text-sm">This is an error alert — check it out!</p>
        </div>
        {/**warning alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-yellow-100 rounded-md bg-yellow-950">
          <IconAlertTriangle />
          <p className="text-sm">This is an warning alert — check it out!</p>
        </div>
        {/**info alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 rounded-md text-cyan-100 bg-cyan-950">
          <IconInfoCircle />
          <p className="text-sm">This is an info alert — check it out!</p>
        </div>
        {/**success alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 rounded-md text-emerald-100 bg-emerald-950">
          <IconCircleCheck />
          <p className="text-sm">This is an success alert — check it out!</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 border rounded-b-lg border-neutral-700">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
