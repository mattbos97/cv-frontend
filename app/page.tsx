import about from '@/app/lib/data/about-me.json';
import self from "@/public/self-portrait.jpeg";
import TextAndImage from "@/app/ui/components/TextAndImage";

export default function Home() {

  return (
      <div className={`flex flex-1 flex-col justify-center items-center`}>
          <TextAndImage text={about.content} imgSource={self} imgAlt={'self'} />
      </div>
  );
}
