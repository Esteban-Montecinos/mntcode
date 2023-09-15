import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
} from "@tabler/icons-react";
import BasicAlert from "./basic-alert";
import DescriptionAlert from "./description-alert";
import OutlinedAlert from "./outlined-alert";
import Link from "next/link";

export const metadata = {
  title: "Alert | MntUI - Tailwind CSS",
};
export default function AlertPage() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Alert</h1>
        <p className="text-base text-neutral-400">
          Displays a callout for user attention.
        </p>
        <p className="text-lg text-neutral-400 ">
          Icons from <Link className="font-bold underline" href="https://tabler.io/docs/icons/react" target="_blank">@tabler/icons-react</Link>
        </p>
      </div>
      <BasicAlert
        IconAlertTriangle={IconAlertTriangle}
        IconCircleCheck={IconCircleCheck}
        IconExclamationCircle={IconExclamationCircle}
        IconInfoCircle={IconInfoCircle}
      />
      <DescriptionAlert
        IconAlertTriangle={IconAlertTriangle}
        IconCircleCheck={IconCircleCheck}
        IconExclamationCircle={IconExclamationCircle}
        IconInfoCircle={IconInfoCircle}
      />
      <OutlinedAlert
        IconAlertTriangle={IconAlertTriangle}
        IconCircleCheck={IconCircleCheck}
        IconExclamationCircle={IconExclamationCircle}
        IconInfoCircle={IconInfoCircle}
      />
    </main>
  );
}
