export default function InputColor(){
    return (
        <div className="mt-10 max-w-md mx-auto">
            <div className="h-12 border border-gray-300 rounded-full overflow-hidden">
                <input type="text" placeholder="Hexcode" className="px-6 pl-14 w-full font-medium h-full rounded-full bg-transparent"/>
                <div className="relative inline-block w-7 h-7">
                    <input type="color" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"/>
                    <div className="w-full h-full rounded-full border border-gray-300"></div>
                </div>
                {/* <input type="color" className="absolute top-1/2 transform -translate-y-1/2 w-7 h-7 opacity-0 rounded-full border-none left-4 cursor-pointer appearance-none"/> */}
            </div>
        </div>
    )
}