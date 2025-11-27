import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="bg-[#fef5e4] text-black px-4 py-10">
            <div className="mt-12 max-w mx-auto">
                <div className="rounded-3xl bg-gradient-to-br from-[#f7d5df] via-[#cfe8d7] to-[#b7d4c5] text-black p-8 shadow-lg border border-white/60">
                    <div className="grid gap-6 md:grid-cols-4 items-start">
                        {/* Logo / Brand */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center text-2xl">
                                    🍵
                                </div>
                                <span className="text-2xl font-semibold" style={{ fontFamily: 'Darumadrop One, cursive' }}>
                                    Matcha Hybrid
                                </span>
                            </div>
                            <p className="text-sm text-black/60 mb-3">
                                Cozy blends of art, music, and gentle stories.
                            </p>
                        </div>

                        {/* Sitemap */}
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-black/60 mb-3">Menu</h4>
                            <div className="flex flex-col gap-2 text-sm text-black">
                                <Link to="/" className="hover:underline">Home</Link>
                                <Link to="/gallery" className="hover:underline">Gallery</Link>
                                <Link to="/music" className="hover:underline">Music</Link>
                                <Link to="/blog" className="hover:underline">Blog</Link>
                                <Link to="/about" className="hover:underline">About</Link>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-black/60 mb-3">Social</h4>
                            <div className="flex flex-col gap-2 text-sm text-black">
                                <a href="#" className="hover:underline">Instagram</a>
                                <a href="#" className="hover:underline">Pinterest</a>
                                <a href="#" className="hover:underline">Twitter</a>
                                <a href="#" className="hover:underline">YouTube</a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-black/60 mb-3">More Ideas. More Matcha.</h4>
                            <p className="text-sm text-black/70 mb-3">
                                Subscribe for new illustrations, mixes, and cozy updates.
                            </p>
                            <form className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-full px-4 py-2 text-sm text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[#2f6b3c] bg-white/90"
                                />
                                <button type="submit" className="self-start btn-cta text-sm">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-black/70">
                    <span>All rights reserved (c) {currentYear}</span>
                    <Link to="/privacy" className="hover:underline">Privacy</Link>
                </div>
            </div>
        </footer>
    );
}
