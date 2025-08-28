import styles from "./../Site.module.css"
import milo from "./../../assets/photo_5294283040933151167_x.jpg"

const shouldShowImage = Math.random() > 0.5

export const ProtectedPage = () => {

    const onClickHandler = () => {
        window.location.reload()
    }

    return (
        <div>
            <h2 className={styles.title}> Поздравляю!</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <p>
                    Ты открыл секретную страничку ♥
                </p>
                {shouldShowImage ? (
                    <img src={milo} alt="Если ты видишь этот текст, то тебе точно пора отдохнуть" />
                ) : (
                    <>
                        <p>Если ты видишь этот текст, то тебе пора отдохнуть :)</p>
                        <button className={styles.buttonLink} onClick={onClickHandler}>Нажми, вдруг повезет увидеть картинку (вероятность 50%)</button>
                    </>
                )}

            </div>
        </div>
    );
};