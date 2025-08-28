import { useNavigate } from "react-router-dom";
import styles from "./../Site.module.css"
import { useAuth } from "./AuthContext";


export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(); 
        navigate('/protectedPage'); 
    };

    return (
        <div className={styles.content} style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', alignItems:'center'}}>
            <p>Пожалуйста, залогинься :)</p>
            <button className={styles.buttonLink} onClick={handleLogin}>Залогиниться</button>
        </div>
    );
};