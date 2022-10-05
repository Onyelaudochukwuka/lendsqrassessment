import React, { FC } from "react"
import { loginIllustration, Logo } from "../../assets";
import { Input } from "../../components";
import { useInput } from "../../utils/hooks";
import style from "./index.module.css"
interface ILogIn {

}
const LogIn: FC<ILogIn> = () => {
    const [email, setEmail, clearEmail] = useInput("");
    return (
        <section className={style.LogIn}>
            <div className={style.LogIn__left}>
                <Logo className={style.LogIn__left__logo} />
                <img src={loginIllustration} className={style.LogIn__left__illustration} />
            </div>
            <div className={style.LogIn__right}>
                <Input
                    {...{
                        value: email,
                        setValue: setEmail,
                        clearValue: clearEmail,
                        placeholder: "Email",
                        type: "email"
                    }}
                />
            </div>
        </section>

    );
}

export default LogIn;