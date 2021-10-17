import styles from './Profile.module.css';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const socialMedia = [
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/agung96tm/',
    },
    {
        name: 'Github',
        icon: faGithub,
        link: 'https://github.com/agung96tm',
    },
    {
        name: 'Facebook',
        icon: faFacebook,
        link: 'https://www.facebook.com/manwithoutconfusion/',
    },
    {
        name: 'Twitter',
        icon: faTwitter,
        link: 'https://twitter.com/agung96tm',
    },
]


const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.information}>
                <h1 className={styles.information__Title}>
                    I am Agung Yuliyanto
                </h1>
                <p className={styles.information__Subtitle}>
                    Software Developer
                </p>
            </div>

            <div className={styles.social_media}>
                {socialMedia.map((socialMedia: any) => (
                    <Link passHref={true} key={socialMedia.name} href={socialMedia.link}>
                        <div className={styles.social_media__Social}>
                            <FontAwesomeIcon className={styles.social_media__Icon} icon={socialMedia.icon} />
                            {socialMedia.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Profile;