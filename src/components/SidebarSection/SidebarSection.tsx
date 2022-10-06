import React, { FC } from "react"
import { SidebarElements } from "../Sidebar/Sidebar";
import SideBarLink from "../SideBarLink/SideBarLink";
import style from "./index.module.css";
interface ISidebarSection {

}
const SidebarSection: FC<ISidebarSection & SidebarElements> = ({heading, children}) => {
    return (
        <div className={style.SidebarSection}>
            <p className={style.SidebarSection__heading}>{heading}</p>
            {children.map(({ Icon, name, to }) => (
                <SideBarLink to={to}>
                    <Icon className={style.SidebarSection__icon} />
                    <span>{name}</span>
                </SideBarLink>
            ))}
        </div>

    );
}

export default SidebarSection;