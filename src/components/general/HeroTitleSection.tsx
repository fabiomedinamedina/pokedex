interface Props {
  image: string;
  title: string;
  description: string;
}

export const HeroTitleSection = ({ image, title, description }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(/${image})` }}
      className={`flex flex-col w-full justify-end items-start my-9 p-10 rounded-lg bg-cover bg-no-repeat bg-center h-80`}
    >
      <h1 className="text-7xl font-extrabold text-white drop-shadow-md">
        {title}
      </h1>
      <p className="text-white text-xl drop-shadow-sm">
        {description}
      </p>
    </div>
  )
}