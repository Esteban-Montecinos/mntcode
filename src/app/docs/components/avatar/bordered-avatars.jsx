export default function BorderedAvatars() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Bordered</h2>
      <div className="flex flex-row justify-center gap-4 p-6 border rounded-t-lg border-neutral-700">
        <img
          className="w-12 h-12 p-[.15rem] rounded-full ring-2 ring-emerald-500"
          src="https://github.com/Esteban-Montecinos.png"
          alt="avatar of Esteban-Montecinos"
        />
        <img
          className="w-12 h-12 p-[.15rem] rounded ring-2 ring-emerald-500"
          src="https://github.com/Esteban-Montecinos.png"
          alt="Rounded avatar"
        />
      </div>
      <div className="flex flex-col gap-2 p-6 text-sm border rounded-b-lg border-neutral-700">
        &lt;img className=&quot;w-12 h-12 p-[.15rem] rounded-full ring-2 ring-emerald-500&quot;<br/>
        &nbsp;&nbsp;src=&quot;https://github.com/Esteban-Montecinos.png&quot;<br/>
        &nbsp;&nbsp;alt=&quot;avatar of Esteban-Montecinos&quot;<br/>
        /&gt;
      </div>
    </div>
  );
}
