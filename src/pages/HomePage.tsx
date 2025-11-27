import { Link } from "react-router-dom";
import type { SyntheticEvent } from "react";

export function HomePage() {
    const musicTracks = [
        {
            id: 1,
            title: 'Morning Matcha',
            duration: '3:24',
            cover: 'https://images.unsplash.com/photo-1751100807068-d824fcd2da5d?q=80&w=1171&auto=format&fit=crop',
            fallback: '🍵',
        },
        {
            id: 2,
            title: 'Gentle Breeze',
            duration: '4:12',
            cover: 'https://images.unsplash.com/photo-1620831450720-de4a2a539e61?q=80&w=880&auto=format&fit=crop',
            fallback: '🍃',
        },
        {
            id: 3,
            title: 'Sunset Serenade',
            duration: '3:45',
            cover: 'https://images.unsplash.com/photo-1602848596095-481682701e89?q=80&w=881&auto=format&fit=crop',
            fallback: '🌅',
        },
        {
            id: 4,
            title: 'Nighttime Noodles',
            duration: '5:03',
            cover: 'https://images.unsplash.com/photo-1651443039959-582bbea6be6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fallback: '🍜',
        },
    ];

    const galleryPreviews = [
        {
            id: 1,
            label: "Bloom",
            src: "https://images.unsplash.com/photo-1533208087231-c3618eab623c?q=80&w=1185&auto=format&fit=crop",
            fallback: "🌸",
        },
        {
            id: 2,
            label: "Cloudlet",
            src: "https://images.unsplash.com/photo-1533735380053-eb8d0759b24a?q=80&w=1081&auto=format&fit=crop",
            fallback: "☁️",
        },
        {
            id: 3,
            label: "Leaf",
            src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=758&auto=format&fit=crop",
            fallback: "🍃",
        },
        {
            id: 4,
            label: "Sprig",
            src: "https://plus.unsplash.com/premium_photo-1675518886680-0fdb53982f4d?q=80&w=1152&auto=format&fit=crop",
            fallback: "🌿",
        },
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Sipping Calm: Finding Balance with Matcha',
            excerpt: 'A gentle look at turning a morning cup into a mindful ritual that grounds your day.',
            date: 'Nov 10, 2025',
        },
        {
            id: 2,
            title: 'Sketching the Sky: Soft Gradients for Beginners',
            excerpt: 'Quick tips and color pairings for dreamy skies using simple digital brushes.',
            date: 'Nov 2, 2025',
        },
        {
            id: 3,
            title: 'Lo-Fi Loops: Building a Cozy Playlist',
            excerpt: 'How to layer mellow beats, field recordings, and soft synths for focus-friendly tracks.',
            date: 'Oct 25, 2025',
        },
    ];

    return (
        <div className="min-h-screen pb-12">
            {/* Slogan Strip edge-to-edge */}
            <section className="mb-0">
                <div className="relative min-h-[500px] flex items-center">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("https://images.unsplash.com/photo-1593290495624-8af79099bea1?q=80&w=1920&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 30%',
                        }}
                    />
                    <div className="relative w-full px-6 md:px-10 py-12 text-center text-white">
                        <div className="text-center text-[2.8rem] sm:text-[3.4rem] md:text-[4rem] leading-none font-bold tracking-tight text-white/90 lowercase pb-4">
                            moist. hydrated. unbothered
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-[-1px] left-0 w-full h-[120px] pointer-events-none"
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M0,0 C240,90 480,-20 720,50 C960,120 1200,10 1440,60 L1440,120 L0,120 Z"
                            fill="#f7d5df"
                        />
                    </svg>
                </div>
            </section>

            {/* Hero Section */}
            <section className="mb-14 px-0">
            <div className="w-full bg-gradient-to-t from-[#cfe8d7] via-[#d9e8d9] to-[#f7d5df] px-6 md:px-10 py-14 text-center">
                <h1 className="text-4xl md:text-5xl text-[#2f6b3c] font-semibold mb-4">Matcha Days</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    A cozy corner for art, music, and gentle stories. Explore dreamy visuals and mellow sounds.
                </p>
                <div className="mt-8 flex justify-center gap-3 flex-wrap">
                    <Link to="/gallery" className="btn-cta text-base">
                        Explore My Work →
                    </Link>
                </div>
            </div>
        </section>

            {/* Art Gallery Preview */}
            <section className="mb-14">
                <div className="text-center mb-6">
                    <h2 className="text-3xl text-[#2f6b3c]">Illustrations &amp; Art</h2>
                    <p className="text-gray-700">Soft paintings and dreamy illustrations from my studio</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 pb-4">
                    {galleryPreviews.map((art) => (
                        <div
                            key={art.id}
                            className="w-[180px] h-[180px] bg-white/80 flex flex-col items-center justify-center rounded-3xl shadow-[0_15px_30px_-15px_rgba(0,0,0,0.35)] border border-white/70 overflow-hidden"
                        >
                            <img
                                src={art.src}
                                alt={art.label}
                                className="w-full h-full object-cover"
                                onError={(e: SyntheticEvent<HTMLImageElement>) => {
                                    const fallbackEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                                    e.currentTarget.classList.add('hidden');
                                    if (fallbackEl) fallbackEl.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-6xl" aria-hidden="true">
                                {art.fallback}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/gallery" className="btn-cta">
                        View Full Gallery
                    </Link>
                </div>
            </section>

            {/* Music Preview */}
            <section className="mb-14">
                <div className="text-center mb-6">
                    <h2 className="text-3xl text-[#2f6b3c]">Music Cover Designs</h2>
                    <p className="text-gray-700">Album artwork and visual designs for peaceful soundscapes</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 pb-4">
                    {musicTracks.map((song) => (
                        <div key={song.id} className="min-w-[180px] flex flex-col items-center gap-3">
                            <div className="w-[180px] h-[180px] bg-gradient-to-br from-[#d1e8da] to-[#b7d4c5] flex items-center justify-center rounded-3xl shadow-[0_15px_30px_-15px_rgba(0,0,0,0.35)] border border-white/70 overflow-hidden">
                                <img
                                    src={song.cover}
                                    alt={song.title}
                                    className="w-full h-full object-cover"
                                    onError={(e: SyntheticEvent<HTMLImageElement>) => {
                                        const fallbackEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                                        e.currentTarget.classList.add('hidden');
                                        if (fallbackEl) fallbackEl.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden text-5xl" aria-hidden="true">
                                    {song.fallback}
                                </span>
                            </div>
                            <div className="text-gray-900 text-center">
                                <strong>{song.title}</strong> - {song.duration}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/music" className="btn-cta">
                        Explore Music Covers
                    </Link>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="mb-14">
                <h2 className="text-center text-3xl mb-4 text-[#2f6b3c]">Latest Blog Posts</h2>
                <div className="flex justify-center gap-4 space-y-5">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white/70 backdrop-blur rounded-lg p-4 shadow-sm border border-white/60"
                        >
                            <h3
                                className="text-2xl text-[var(--color-matcha)]"
                                style={{ fontFamily: 'Darumadrop One, cursive' }}
                            >
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                            <p className="text-gray-800">{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-12">
                <div className="rounded-3xl bg-gradient-to-r from-[#f6c2cf] via-[#cfe8d7] to-[#b7d4c5] text-center px-6 py-10 shadow-lg border border-white/60">
                    <h2 className="text-3xl text-[#2f6b3c] mb-2">Stay for a While</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Read about creative process, slow living, and gentle aesthetics on the blog.
                    </p>
                    <Link to="/blog" className="btn-cta">
                        Visit the Blog
                    </Link>
                </div>
            </section>
        </div>
    );
}
