import Link from "next/link";
import styles from "./index.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul role="list" className={styles.list}>
        <li>
          <Link href="/" className={styles.link}>
            Spotlight
          </Link>
        </li>
        <li>
          <Link href="/art-pieces" className={styles.link}>
            Art Pieces
          </Link>
        </li>
        <li>
          <Link href="/favorites" className={styles.link}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
