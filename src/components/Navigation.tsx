import { Link, useLocation } from "react-router-dom";

export function Navigation() {
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Gallery", path: "/gallery" },
        { label: "Music", path: "/music" },
        { label: "Blog", path: "/blog" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '50px',
                backgroundColor: '#333',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                borderBottom: '2px solid #555',
                zIndex: 1000,
            }}
        >
            <div style={{ fontWeight: 600 }}>Matcha Hybrid</div>

            <div style={{ display: 'flex', gap: '16px' }}>
                {navItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                color: active ? '#4CAF50' : '#FFF',
                                textDecoration: 'none',
                                fontWeight: active ? 'bold' : 'normal',
                                borderBottom: active ? '2px solid #4CAF50' : 'none',
                                paddingBottom: '4px',
                            }}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}