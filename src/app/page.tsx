import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <div className="test-style">
        <h1>Hello Joshua</h1>
      </div>
      <Image src="/images/home.svg" width={50} height={50} alt="Home image"></Image>
    </div>
  );
}
