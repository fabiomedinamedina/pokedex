import { BsStars } from "react-icons/bs";
import { TbRuler, TbWeight } from "react-icons/tb";
import { PropertieIcon } from "./PropertieIcon";

type Props = {
  weight: number;
  height: number;
  base_experience: number;
}

export const PropertiesSection = ({ weight, height, base_experience }: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <PropertieIcon title="Height" value={`${height} cm`} icon={<TbRuler size={50} />} />
      <PropertieIcon title="Weight" value={`${weight} kg`} icon={<TbWeight size={50} />} />
      <PropertieIcon title="Base Experience" value={`${base_experience}`} icon={<BsStars size={50} />} />
    </div>
  )
}