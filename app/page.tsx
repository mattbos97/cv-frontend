import {TypeWriter} from "@/app/ui/animations/TypeWriter";
import about from '@/app/lib/data/about-me.json';
import self from "@/public/self-portrait.jpeg";
import TextAndImage from "@/app/ui/components/TextAndImage";

export default function Home() {

  return (
      <div className={`flex flex-1 flex-col justify-center items-center`}>
          <div className={`
          flex justify-center items-center
          bg-background-accent-1 rounded-xl
          w-full md:w-[80vw] h-12
          mb-8`}>
              <TypeWriter text={'Hello and welcome to the CV of Matt Bos'} className={'text-4xl text-text-gray-2'}/>
          </div>

          <TextAndImage text={about.content} imgSource={self} imgAlt={'self'} />
      </div>
  );
}
