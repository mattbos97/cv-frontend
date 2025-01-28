import TypeWriter from "@/app/ui/TypeWriter";

export default function Home() {

  return (
      <div className={`flex justify-center items-center text-6xl text-gray-600`}>
          <TypeWriter text={'Welcome to the CV of Matt Bos.'} cursor={true}/>
      </div>
  );
}
