import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  error?: string;
  href?: {
    path: string;
    title: string;
  };
}

export const StatusDisplay = ({ icon, title, description, error, href }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {icon}
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">{title}</p>
        <p className="md:text-lg xl:text-xl text-gray-500">{description}</p>
        {
          error && (<p className="text-sm text-gray-500">&quot;{error}&quot;</p>)
        }
        {
          href && (
            <Link
              href={href.path}
              className="flex items-center justify-center px-5 py-2 mt-2 rounded-xl bg-red-normal text-white hover:bg-yellow-normal transition-all">
              {href.title}
            </Link>
          )
        }
      </div>
    </div>
  )
}