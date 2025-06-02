import Link from "next/link";
import { CgEye } from "react-icons/cg";

interface Props {
  title: string;
  value: number;
  description: string;
  link?: string;
  icon: JSX.Element
}

export const SimpleWidget = ({ title, value, description, link, icon }: Props) => {
  return (
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-300 w-1/4 mx-auto p-4 bg-white bg-clip-border shadow-v shadow-gray-300 gap-2">
      <div className="flex flex-row gap-2 items-center w-full">
        {icon}
        <h2 className="text-xl font-bold text-gray-600 capitalize leading-none">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-gray-800 text-8xl font-bold leading-none">
          {value}
        </p>
      </div>
      <div className="flex flex-row w-full gap-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs font-normal text-gray-400">{description}</p>
        </div>
        {
          link && (
            <div className="flex flex-row gap-1 items-center justify-center">


              <Link href={`${link}`}>
                <CgEye size={20} className="text-gray-400 hover:text-yellow-normal transition ease-linear duration-200" />
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}