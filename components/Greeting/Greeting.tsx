import styles from './Greeting.module.css';

const Greeting = () => {
    return (
        <div className="has-text-centered">
            <p className={styles.title}>
                Welcome Friend 👋
            </p>
            <p className={styles.subtitle}>
                Scroll to down if you interest with me 😉
            </p>
        </div>
    )
}

export default Greeting;