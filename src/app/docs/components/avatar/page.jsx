import BorderedAvatars from "./bordered-avatars";
import ImageAvatars from "./image-avatars";
import PlaceholderInitials from "./placeholder-initials";

export const metadata = {
  title: "Avatar | MntUI - Tailwind CSS",
};
export default function AvatarPage() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Avatar</h1>
        <p className="text-base text-neutral-400">
          The Avatar component is used to represent a user
        </p>
      </div>
      <ImageAvatars/>
      <PlaceholderInitials/>
      <BorderedAvatars/>
    </main>
  );
}
