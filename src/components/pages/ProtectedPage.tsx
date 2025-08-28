import styles from "./../Site.module.css"
import milo from "./../../assets/photo_5294283040933151167_x.jpg"
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const shouldShowImage = Math.random() > 0.5

export const ProtectedPage = () => {

    const { logout } = useAuth(); 
    const navigate = useNavigate();

    const onClickHandler = () => {
        window.location.reload()
    }

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    }

    return (
        <div>
            <h2 className={styles.title}> Поздравляю!</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <p>
                    Ты открыл секретную страничку ♥
                </p>
                {shouldShowImage ? (
                    <>
                        <img src={milo} alt="Если ты видишь этот текст, то тебе точно пора отдохнуть" />
                        <button className={styles.buttonLink} style={{ marginTop: '40px' }} onClick={handleLogout}>Вылогиниться</button>
                    </>
                ) : (
                    <>
                        <p>Если ты видишь этот текст, то тебе пора отдохнуть :)</p>
                        <button className={styles.buttonLink} onClick={onClickHandler}>Нажми, вдруг повезет увидеть картинку (вероятность 50%)</button>
                        <button className={styles.buttonLink} style={{ marginTop: '40px' }} onClick={handleLogout}>Вылогиниться</button>
                    </>
                )}

            </div>
        </div>
    );
};