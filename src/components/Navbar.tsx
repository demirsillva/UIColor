export default function Navbar() {
    return (
    <nav className="w-full h-14 flex justify-between items-center px-10 shadow-sm fixed relative">
        <div>
            UI Color Gen
        </div>

        <div className="">
            <ul className="flex flex-row gap-3">
                <li><a href="#" rel="noopener noreferrer">Create</a></li>
                <li><a href="#" rel="noopener noreferrer">Edit</a></li>
            </ul>
        </div>
    </nav>
    )
}