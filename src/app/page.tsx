import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className="test-style">
        <h1>Hello Joshua</h1>
      </div>
      <Image
        src="images/home.svg"
        width={500}
        height={500}
        alt="Home image">
      </Image>
    </div>
  );
}
