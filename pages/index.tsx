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
  const text2 = "Developer and Gamer!!!";
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

  const brs2 = [];
  for (let i = 0; i < 20; i++) {
    brs2.push(<br />)
  }


  return (
    <div>
      <Head>
        <title>Homepage - ShinyDuck</title>
      </Head>
      <div className="content">
        <Link className={styles.logo} href='/'>
          <Image src={"/pfp.png"} width={scale} height={scale} alt={'Logo'} />
        </Link>
        <a href='/projects' className={styles.projectsLink} >Projects</a>
        <a href='https://www.youtube.com/channel/UC3E5hRARdDFrySL5emTCaJw' className={styles.youtubeLink}>Youtube</a>

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
        {brs}
        <h1 className={styles.otherText}>I am a developer and I play a lot of video games.
          <br></br>My favorite game currently is Monster Hunter World.I am an american. My Latest thing I made (not including this website)
          is Banos a bot I made for Discord. <a href='/projects/banos'>Check him out here</a>
        </h1>
      </div >
      {brs2}
    </div >
  )
}