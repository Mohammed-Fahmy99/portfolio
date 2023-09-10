type singleTimeLineProps = {
  year: number;
  title: string;
  duration: string;
  details: string;
};

function SingleTimeLine({
  item: { year, title, duration, details },
}: {
  item: singleTimeLineProps;
}) {
  return (
    <li className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className=" inline-block  w-3 h-3  bg-stone-200 rounded-full border-white" />
        <span className="bg-blue-900 rounded-md px-2 py-1 text-white font-semibold">
          {year}
        </span>
        <span className="text-lg font-semibold text-blue-900">{title}</span>
        <span className="font-normal text-sm text-stone-400 leading-none">
          {duration}
        </span>
      </div>
      <p className="ml-6 text-base font-normal text-stone-500 ">{details}</p>
    </li>
  );
}

export default SingleTimeLine;
