import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let scale = 125;

  const text = "ShinyDuck"
  const snetence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.098,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const brs = [];
  for (let i = 0; i < 50; i++) {
    brs.push(<br />)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage - ShinyDuck</title>
      </Head>
      <div className="content">
        <Link className={styles.logo} href='/'>
          <Image src={"/pfp.png"} width={scale} height={scale} alt={'Logo'} />
        </Link>

        <div className={styles['title-wrapper']}>
          <motion.h1 className={styles.title} variants={snetence} initial="hidden" animate="visible">
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
        </div>
        <h2 className={styles.subtitle}></h2>
      </div >
      {brs}
    </div >
  )
}
