export default function Loading() {
    return (
        <main className="min-h-screen px-6 sm:px-12 md:px-20 animate-pulse">
            <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center gap-5">
                <div className="h-5 w-28 bg-white/10 rounded" />
                <div className="h-16 w-1/2 bg-white/10 rounded" />
                <div className="h-5 w-96 bg-white/5 rounded mt-1" />
                <div className="h-5 w-80 bg-white/5 rounded" />
                <div className="flex gap-3 mt-3">
                    <div className="h-11 w-44 bg-white/10 rounded" />
                    <div className="h-11 w-44 bg-white/5 rounded" />
                </div>
            </div>
        </main>
    );
}
