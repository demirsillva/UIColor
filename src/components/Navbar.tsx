import Theme from "../theme/Theme"
import { BiUser } from "react-icons/bi"

export default function Navbar() {
    return (
        <nav className="fixed z-50 w-full h-14 flex justify-between items-center px-10 bg-zinc-50 shadow-sm dark:shadow-zinc-700 text-zinc-800 dark:text-zinc-100 dark:bg-indigo-950">
            <div className="flex items-center gap-3">
                <img src="/UIColor-logo.png" alt="Logo UI Color Code" className="w-9"/>
                <h2 className="font-bold text-lg">Color Code</h2>
            </div>

            <div className="">
                <ul className="flex flex-row items-center gap-3">
                    <li><a href="#" rel="noopener noreferrer">Save</a></li>
                    <li>
                        <a href="#" rel="noopener noreferrer">
                            <BiUser className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <Theme />
                    </li>
                </ul>
            </div>
        </nav>
    )
}