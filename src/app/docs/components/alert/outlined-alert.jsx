export default function OutlinedAlert({
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Outlined</h2>
      <p className="text-sm text-neutral-400">
        outlined alert basic and description
      </p>
      <div className="flex flex-col gap-2 p-6 border rounded-t-lg border-neutral-700">
        {/**error alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-red-200 border-2 rounded-md border-red-950">
          <IconExclamationCircle />
          <p className="text-sm">This is an error alert — check it out!</p>
        </div>
        {/**warning alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-yellow-200 border-2 rounded-md border-yellow-950">
          <IconAlertTriangle />
          <p className="text-sm">This is an warning alert — check it out!</p>
        </div>
        {/**info alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 border-2 rounded-md text-cyan-200 border-cyan-950">
          <IconInfoCircle />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Info</p>
            <p className="text-sm">This is an info alert — check it out!</p>
          </div>
        </div>
        {/**success alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 border-2 rounded-md text-emerald-200 border-emerald-950">
          <IconCircleCheck />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Success</p>
            <p className="text-sm">This is an success alert — check it out!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 text-sm border rounded-b-lg border-neutral-700">
        Basic:
        <br />
        &lt;div className=&quot;flex items-center w-full gap-4 px-4 py-2
        text-red-200 border-2 rounded-md border-red-950&quot;&gt;
        <br />
        &nbsp;&nbsp;&lt;IconExclamationCircle /&gt;
        <br />
        &nbsp;&nbsp;&lt;p className=&quot;text-sm&quot;&gt;This is an error
        alert — check it out!&lt;/p&gt;
        <br />
        &lt;/div&gt;
        <br />
        <br />
        Description:
        <br />
        &lt;div className=&quot;flex items-center w-full gap-4 px-4 py-2
        border-2 rounded-md text-cyan-200 border-cyan-950&quot;&gt;
        <br />
        &nbsp;&nbsp;&lt;IconInfoCircle /&gt;
        <br />
        &nbsp;&nbsp;&lt;div className=&quot;flex flex-col gap-1&quot;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className=&quot;text-lg
        font-semibold&quot;&gt;Info&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className=&quot;text-sm&quot;&gt;This is
        an info alert — check it out!&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        &lt;/div&gt;
      </div>
    </div>
  );
}
