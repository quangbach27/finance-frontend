'use client';
import useDevice from '@/hooks/useDevice';
import clsx from 'clsx';
import {
    Radius,
    WalletMinimal,
    Banknote,
    Menu,
    Home,
    BarChart2,
    Receipt,
    Wallet,
    ReceiptText,
    Mail,
    Users2,
    Settings,
    HelpCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavItem from '../NavItem';

const NAV_ITEMS = [
    {
        heading: 'Overview',
        items: [
            { label: 'Dashboard', icon: Home, href: '/' },
            { label: 'Analytics', icon: BarChart2, href: '#' }
        ]
    },
    {
        heading: 'Finance',
        items: [
            { label: 'Transactions', icon: Wallet, href: '#' },
            { label: 'Invoices', icon: ReceiptText, href: '#' },
            { label: 'Request Payments', icon: Mail, href: '#' }
        ]
    },
    {
        heading: 'Team',
        items: [{ label: 'Member', icon: Users2, href: '#' }]
    }
];

const NavItemsGroup = ({
    heading,
    children
}: {
    heading?: string;
    children: React.ReactNode;
}) => {
    return (
        <div>
            {heading && (
                <div className="mb-2 px-3 font-semibold uppercase text-gray-500">
                    {heading}
                </div>
            )}

            <div>{children}</div>
        </div>
    );
};

export default function AppSidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathName = usePathname();
    const device = useDevice();

    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (device === 'lg' || device === 'xl') {
            handleCloseMenu();
        }
    }, [device]);

    const renderNavItems = () =>
        NAV_ITEMS.map(({ heading, items }) => (
            <NavItemsGroup heading={heading} key={heading}>
                {items.map((item) => (
                    <NavItem
                        key={item.href + item.label}
                        icon={item.icon}
                        href={item.href}
                        onClick={handleCloseMenu}
                        isActive={pathName === item.href}
                    >
                        {item.label}
                    </NavItem>
                ))}
            </NavItemsGroup>
        ));

    return (
        <>
            <button
                className="fixed left-2 top-2 z-[70] rounded-lg bg-white p-2 shadow-md lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu />
            </button>

            <nav
                className={clsx(
                    'fixed inset-y-0 left-0 z-[70] flex w-64 -translate-x-full transform flex-col border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0',
                    {
                        'translate-x-0': isMobileMenuOpen,
                        '-translate-x-full': !isMobileMenuOpen
                    }
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex h-16 items-center gap-3 border-b border-gray-200 px-6 text-xl font-bold"
                >
                    <Image
                        src="/logo-black.svg"
                        alt="Acme"
                        width={32}
                        height={32}
                        className="block flex-shrink-0 dark:hidden"
                    />
                    <span>Sumni Finance</span>
                </Link>
                <div className="flex-1 space-y-6 overflow-y-auto p-4">
                    {renderNavItems()}
                </div>

                {/* Setting */}
                <div className="border-t border-gray-200 p-4">
                    <NavItemsGroup>
                        <NavItem href="#" icon={Settings}>
                            Setting
                        </NavItem>
                        <NavItem href="#" icon={HelpCircle}>
                            Help
                        </NavItem>
                    </NavItemsGroup>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[65] bg-black bg-opacity-50"
                    onClick={handleCloseMenu}
                />
            )}
        </>
    );
}
