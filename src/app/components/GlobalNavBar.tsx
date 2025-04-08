'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GlobalNavBar: React.FC = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Music', href: '/Music' },
        { label: 'SpeedTyping', href: '/SpeedTyping' },
        { label: 'QRcode', href: '/QRcode' },
        { label: 'Translation', href: '/Translation' },
        { label: 'Ai', href: '/' },
    { label: 'Tokens', href: '/Tokens' },
    { label: 'Game', href: '/Game' },
    { label: 'Editor', href: '/Editor' },
    { label: 'Payment', href: '/Stripe' },
    ];

return (
    <nav className="fixed bottom-0 left-0 overflow-x-scroll  right-0 bg-stone-900 border-t border-stone-600 shadow-md shadow-stone-500 z-50">
        <div className="flex justify-around font-yujiMai items-center  p-3">
        {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link key={item.href} href={item.href}>
                <span className={`  hover:text-stone-200  px-3 py-2 rounded transition-colors duration-200 cursor-pointer ${ isActive ? 'text-green-400' : 'text-stone-400' }`}
                >
                {item.label}
                </span>
            </Link>
            );
        })}
        </div>
    </nav>
    );
};

export default GlobalNavBar;
