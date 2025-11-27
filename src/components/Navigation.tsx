import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
    const location = useLocation();
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Gallery", path: "/gallery" },
        { label: "Music", path: "/music" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;
            if (current > 120 && current > lastScrollY + 10) {
                setHidden(true);
            } else if (current < lastScrollY - 10 || current < 60) {
                setHidden(false);
            }
            setLastScrollY(current);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
            }
            if (e.clientY < 80) {
                setHidden(false);
            } else if (window.scrollY > 120) {
                hideTimeout.current = setTimeout(() => {
                    setHidden(true);
                }, 500);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouseMove);
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, [lastScrollY]);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[1000] text-white"
            style={{
                fontFamily: 'Darumadrop One, cursive',
                transform: hidden ? 'translateY(-120%)' : 'translateY(0)',
                transition: 'transform 1000ms ease',
                backgroundColor: 'transparent',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4 pointer-events-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl">🍵</div>
                        <span className="text-xl font-semibold uppercase">Matcha Days</span>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white/85 text-[#2f2b25] rounded-full shadow-sm flex items-center overflow-hidden">
                            {navItems.map((item) => {
                                const active = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="px-4 py-2 text-sm font-normal transition"
                                        style={
                                            active
                                                ? {
                                                    backgroundColor: '#f28ba6',
                                                    color: '#ffffff',
                                                    boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
                                                }
                                                : {
                                                    color: '#2f2b25',
                                                }
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}
