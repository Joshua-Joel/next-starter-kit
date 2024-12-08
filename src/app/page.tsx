import Image from "next/image";
import styles from "./page.module.css";
import L from "../utils/localization";

console.log("brand===",process.env.BRAND);
export default function Home() {
  return (
    <div className={styles.page}>
      <div className="test-style">
        <h1>Hello Joshua</h1>
      </div>
      <h2>{L.t('HomeContent.greeting')}</h2>
      <Image
        src="images/home.svg"
        width={500}
        height={500}
        alt="Home image">
      </Image>
    </div>
  );
}
