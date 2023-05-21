import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import mainStyles from '../../styles/Home.module.css'
import styles from "../../styles/Banos.module.css"
import Link from 'next/link'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let scale = 125;

    return (
        <div>
            <Head>
                <title>Banos - ShinyDuck</title>
            </Head>
            <div className='content'>
                <Link className={mainStyles.logo} href='/'>
                    <Image src={"/pfp.png"} width={scale} height={scale} alt={'Logo'} />
                </Link>
                <Link href='/projects' className={mainStyles.projectsLink} >Projects</Link>
                <Link href='https://www.youtube.com/channel/UC3E5hRARdDFrySL5emTCaJw' className={mainStyles.youtubeLink}>Youtube</Link>

                <h1 className={styles.title}>Banos</h1>
                <h2 className={styles.subtitle}>Banos is a bot to ban people with Style.<br /><br />Banos will send an image of himself to those banned by him<br /><br /><a href='https://discord.com/api/oauth2/authorize?client_id=908473991906344960&permissions=8&scope=applications.commands%20bot'>Get Him HERE</a></h2>
            </div>
        </div>
    )
}