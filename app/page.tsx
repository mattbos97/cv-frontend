import {TypeWriter} from "@/app/ui/TypeWriter";

export default function Home() {

  return (
      <div className={`flex justify-center items-center`}>
          <TypeWriter text={'Hi,\nMy name is Matt Bos,\nand welcome to my CV.'} textColor={'text-white'} fontSize={'text-2xl'}/>
      </div>
  );
}
