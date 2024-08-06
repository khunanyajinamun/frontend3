import Image from "next/image";
import Carousel from "./components/carousel";
import Card from "./components/card";

export default function Home() {
  return (
    <div>
      <Carousel />
      <br />
      <Card />
      <br />
    </div>
      
  );
}
