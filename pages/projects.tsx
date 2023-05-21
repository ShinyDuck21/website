import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Projects.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import mainStyles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let scale = 125;

    return (
        <div>
            <Head>
                <title>Projects - ShinyDuck</title>
            </Head>
            <a href='/projects' className={mainStyles.projectsLink}>Projects</a>
            <a href='https://www.youtube.com/channel/UC3E5hRARdDFrySL5emTCaJw' className={mainStyles.youtubeLink}>Youtube</a>


            <div className="content">
                <Link className={styles.logo} href='/'>
                    <Image src={"/pfp.png"} width={scale} height={scale} alt={'Logo'} />
                </Link>
            </div >

            <h1 className={mainStyles.title}>Projects</h1>
            <h2 className={styles.otherText}>The list of projects starts here</h2>
            <ul className={styles.list}>
                <li><a href='/projects/banos'>Banos (finished)</a></li>
                <li><a>Game?</a></li>
            </ul>
        </div>
    )
}