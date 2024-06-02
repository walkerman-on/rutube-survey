import cl from "./Header.module.scss"
import LogoRutube from "shared/assets/img/LogoRutube.svg"

export const Header = () => {
    return (
        <header className={cl.Header}>
            <div className={cl.logoContainer}>
                <LogoRutube className={cl.logo}/>
            </div>
            <div className={cl.lineContainer}>
                <div className={cl.line}></div>
            </div>
        </header>
    );
};
