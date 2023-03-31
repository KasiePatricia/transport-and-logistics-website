import { SectionTagLight } from "../Components/Reuseable/SectionTag";
import { ButtonBlue } from "../Components/Reuseable/ButtonGroup";
import { NEWS } from "../data/data";
import NewsOne from "../Components/Blog/NewsOne";

const Blog = () => {
  const newsArr = Object.values(NEWS);

  return (
    <section className="w-full py-[6.25rem] bg-white flex justify-center">
      <div className="w-[950px] flex flex-col items-center">
        <SectionTagLight text="Our Blog" />
        <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-htext mt-[0.875rem]">
          Our Latest News
        </h2>
        <section className="w-full py-10 grid border-collapse">
          {newsArr.map((item) => {
            return <NewsOne key={item.id} newsProps={item} />;
          })}
        </section>
        <ButtonBlue btnProps={{ text: "More Blog", linkTo: "#" }} />
      </div>
    </section>
  );
};

export default Blog;
