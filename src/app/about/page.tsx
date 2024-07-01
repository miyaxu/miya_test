import styles from './about.module.sass';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p>Miya</p>
      <Image
        src="/images/cat.jpg"
        alt="cat"
        width={250}
        height={250}
      />
    </div>
  )
};
