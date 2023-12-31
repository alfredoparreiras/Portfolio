import MainTitle from "@/components/MainTitle"
import Me from "../../assets/me.jpeg"
import { skills } from './skills';
import Icons from "@/components/Icons";



const WebAboutMe = () => {
  return (
    <section className="pb-36 bg-red-800 hidden lg:block">
      <MainTitle title="Who Am I" />
      <div className="flex w-full justify-between lg:pt-4">
        <div className="w-5/12 text-xl">
          <p className="mb-3">
            Hi, I'm Alfredo, a proud Brazilian currently living in the vibrant
            city of Montreal. I'm happily married to Carol and deeply connected
            with my Christian faith.
          </p>
          <p className="mb-3">
            As a focused developer, my excitement lies in exploring new
            technologies and broadening the scope of digital discovery. You can
            find my actual stack below.
          </p>
          <p className="mb-3">
            But there's more to me than just coding! When I'm not working, I
            enjoy reading, running and exploring the worlds of cooking and
            coffee.
          </p>
          <p className="mb-3">
            A quirky fact about me? I have a growing collection of tattoos.
          </p>
          <p className="mb-3 text-left">Welcome!</p>
          <div className=" grid lg:grid-cols-6 lg:gap-12 lg:mt-16 ">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons skill={item} />
                    <p className="text-base">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="">
            <img
              src={Me}
              alt="Alfredo's Photo"
              className="max-w-md grayscale hover:grayscale-0 transition duration-500 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebAboutMe