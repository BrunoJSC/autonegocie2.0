interface BoxProps {
  title: string;
  paragraph: string;
}

export function Box({ title, paragraph }: BoxProps) {
  return (
    <div className="max-w-[749px] my-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-base md:text-lg lg:text-xl text-[#848484]">
        {paragraph}
      </p>
    </div>
  );
}
