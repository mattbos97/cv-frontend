import {TypeWriter} from "@/app/ui/animations/TypeWriter";

export default function Home() {

  return (
      <div className={`flex w-full h-full justify-center items-center p-8`}>
          <TypeWriter text={'Hi,\nMy name is Matt Bos,\nand welcome to my CV.'} textColor={'text-text-primary'} fontSize={'text-2xl'}/>
      </div>
  );
}
