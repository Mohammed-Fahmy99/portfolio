import SingleTimeLine from "@components/SingleTimeLine";

const data = [
  {
    year: 2022,
    title: "Project 1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum gravida nulla a aliquam.",
  },
  {
    year: 2021,
    title: "Project 2",
    duration: "1 year",
    details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eaque dolor maxime assumenda enim repudiandae ut hic. Non placeat velit obcaecati ab dolorem, laborum, voluptatibus corporis suscipit incidunt asperiores neque.",
  },
  {
    year: 2020,
    title: "Project 3",
    duration: "3 months",
    details: "Fusce auctor posuere neque, non ultrices mauris pharetra nec.",
  },
  {
    year: 2019,
    title: "Project 4",
    duration: "8 months",
    details:
      "Vestibulum pulvinar quam vitae ipsum interdum, id hendrerit nunc consectetur.",
  },
];

function TimeLineWork() {
  return <div className="flex flex-col gap-8" id="time-line">
    <h2 className="text-4xl font-bold text-center">work</h2>
    <ol className="relative flex flex-col gap-16">
    {
        data.map((item,i) => (
            <SingleTimeLine item={item} key={i}/>
        ))
    }
    </ol>
  </div>;
}

export default TimeLineWork;
