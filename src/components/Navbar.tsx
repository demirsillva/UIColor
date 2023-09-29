import Theme from '../theme/Theme'

export default function Navbar() {
    return (
        <nav className="fixed w-full h-14 flex justify-between items-center px-10 shadow-sm">
            <div>
                <img src="/UIColor-logo.png" alt="Logo UI Color Code" className="w-9"/>
            </div>

            <div className="">
                <ul className="flex flex-row items-center gap-3">
                    <li><a href="#" rel="noopener noreferrer">Save</a></li>
                    <li><a href="#" rel="noopener noreferrer">Login</a></li>
                    <li>
                        <Theme />
                    </li>
                </ul>
            </div>
        </nav>
    )
}