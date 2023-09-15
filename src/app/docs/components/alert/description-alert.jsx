export default function DescriptionAlert({
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Description</h2>
      <p className="text-sm text-neutral-400">
        alert with title and description
      </p>
      <div className="flex flex-col gap-2 p-6 border rounded-t-lg border-neutral-700">
        {/**error alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-red-100 rounded-md bg-red-950">
          <IconExclamationCircle />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Error</p>
            <p className="text-sm">This is an error alert — check it out!</p>
          </div>
        </div>
        {/**warning alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 text-yellow-100 rounded-md bg-yellow-950">
          <IconAlertTriangle />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Warning</p>
            <p className="text-sm">This is an warning alert — check it out!</p>
          </div>
        </div>
        {/**info alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 rounded-md text-cyan-100 bg-cyan-950">
          <IconInfoCircle />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Info</p>
            <p className="text-sm">This is an info alert — check it out!</p>
          </div>
        </div>
        {/**success alert */}
        <div className="flex items-center w-full gap-4 px-4 py-2 rounded-md text-emerald-100 bg-emerald-950">
          <IconCircleCheck />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Success</p>
            <p className="text-sm">This is an success alert — check it out!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 text-sm border rounded-b-lg border-neutral-700">
        
        &lt;div className=&quot;flex items-center w-full gap-4 px-4 py-2 text-red-100 rounded-md bg-red-950&quot;&gt;<br/>
        &nbsp;&nbsp;&lt;IconExclamationCircle /&gt;<br/>
        &nbsp;&nbsp;&lt;div className=&quot;flex flex-col gap-1&quot;&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className=&quot;text-lg font-semibold&quot;&gt;Error&lt;/p&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className=&quot;text-sm&quot;&gt;This is an error alert — check it out!&lt;/p&gt;<br/>
        &nbsp;&nbsp;&lt;/div&gt;<br/>
        &lt;/div&gt;
      
      </div>
    </div>
  );
}
