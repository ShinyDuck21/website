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
            <Link href='/projects' className={mainStyles.projectsLink}>Projects</Link>
            <Link href='https://www.youtube.com/channel/UC3E5hRARdDFrySL5emTCaJw' className={mainStyles.youtubeLink}>Youtube</Link>


            <div className="content">
                <Link className={styles.logo} href='/'>
                    <Image src={"/pfp.png"} width={scale} height={scale} alt={'Logo'} />
                </Link>
            </div >

            <h1 className={mainStyles.title}>Projects</h1>
            <h2 className={styles.otherText}>The list of projects starts here</h2>
            <ul className={styles.list}>
                <li><Link href='/projects/banos'>Banos (finished)</Link></li>
                {/* <li><Link>Game?</Link></li> */}
            </ul>
        </div>
    )
}