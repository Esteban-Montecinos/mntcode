import { Chip } from "@nextui-org/chip";
import ErrorPage from "./error-page";
import Editor from "@/app/ui/editor";
import { IconFileTypeJs, IconFileTypeJsx } from "@tabler/icons-react";
import {
  serverAction,
} from "@/app/constants-code";
import { GetFileBySlug } from "@/app/ui/read-file";
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
        <Editor
          icon={<IconFileTypeJs className="w-5 h-5" />}
          title="next.config.js"
        >
          {serverAction}
        </Editor>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">
          Displaying error for a server action form in Next.js 13
        </h1>
        <p className="text-base text-neutral-400">
          Displays a callout for user attention.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ErrorPage />
        <Editor icon={<IconFileTypeJsx className="w-5 h-5" />} title="page.jsx">
          <GetFileBySlug filename="src\app\docs\components\error-action\error-page.jsx" />
        </Editor>
        <Editor icon={<IconFileTypeJsx className="w-5 h-5" />} title="form.jsx">
          <GetFileBySlug filename="src\app\docs\components\error-action\form.jsx" />
        </Editor>
      </div>
    </main>
  );
}
