const BackgroundImage = () => {
    return (
        <div className="bg-center w-full h-screen bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/bg-image.png')" }}>
            {/* INNER DIV */}
            <div className="text-center bg-white rounded-md max-w-md mx-4 p-8" style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(5px)"
            }}>
                <h1 className="text-4xl mb-4">☘️</h1>
                <h1 className="text-4xl font-semibold mb-4">The Nature Candle</h1>
                <p className="text-lg leading-relaxed">
                    All made with natural soy wax, Candleaf is a companion for all your pleasure moments.
                </p>
                <button className="bg-[#56B280] my-9 py-2 px-10 text-white rounded-xl font-semibold hover:bg-green-700">
                    Discover our collection
                </button>
            </div>
        </div>
    );
}

export default BackgroundImage;
