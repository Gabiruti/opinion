import Image from "next/image";
import Link from "next/link";

export default function MenuOption({
  icon,
  text,
  alt,
  currentPath,
}: {
  icon: string;
  text?: string;
  alt?: string;
  currentPath?: boolean;
}) {
  return (
    <Link
      href={"/"}
      className={`flex gap-2 items-center p-2 rounded-md hover:bg-gray-300/10 ${
        currentPath ? "bg-gray-300/10" : ""
      }`}
    >
      <Image src={icon} width={24} height={24} alt={alt || ""} />
      <p className="text-[1.40rem] text-nowrap">{text}</p>
    </Link>
  );
}
