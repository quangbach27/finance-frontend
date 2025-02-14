'use client';
import {
    DropdownMenu,
    DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';

import {
    Bell,
    ChevronRight,
    CreditCard,
    FileText,
    LogOut,
    Settings
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownContentMenuLayout from '../DropdownContentMenuLayout';
import NavItem from '../NavItem';

const Breadcumbs = ({
    breadcumbs
}: {
    breadcumbs: Array<{
        label: string;
        href?: string;
    }>;
}) => {
    return (
        <div className="flex">
            {breadcumbs.map((item, index) => (
                <div key={item.label + index} className="flex items-center">
                    {index > 0 && <ChevronRight className="mx-1 h-4 w-4" />}
                    {item.href ? (
                        <Link className="hover:underline" href={item.href}>
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-600 hover:cursor-default">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

const MENU_ITEMS = [
    {
        label: 'Subscription',
        value: 'subscription',
        href: '#',
        icon: CreditCard,
        external: false
    },
    {
        label: 'Settings',
        href: '#',
        icon: Settings
    },
    {
        label: 'Terms & Policies',
        href: '#',
        icon: FileText,
        external: true
    }
];

export default function AppHeader() {
    const breadcrumbs = [
        { label: 'kokonutUI', href: '#' },
        { label: 'dashboard' }
    ];

    return (
        <nav className="ml-11 flex flex-1 justify-between px-4 lg:ml-0 lg:px-6">
            {/* Breadcumbs */}
            <Breadcumbs breadcumbs={breadcrumbs} />

            {/*  icon */}
            <div className="flex gap-2 lg:gap-4">
                <button className="rounded-full p-1.5 hover:bg-gray-100 sm:p-2">
                    <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image
                            src="/avatar.png"
                            alt="User avatar"
                            width={28}
                            height={28}
                            className="cursor-pointer rounded-full ring-2 ring-gray-200 sm:h-8 sm:w-8"
                        />
                    </DropdownMenuTrigger>
                    <DropdownContentMenuLayout>
                        <div>
                            {MENU_ITEMS.map((item) => (
                                <NavItem
                                    key={item.label}
                                    icon={item.icon}
                                    href={item.href}
                                >
                                    {item.label}
                                </NavItem>
                            ))}
                            <NavItem icon={LogOut} onClick={() => {}}>
                                Logout
                            </NavItem>
                        </div>
                    </DropdownContentMenuLayout>
                </DropdownMenu>
            </div>
        </nav>
    );
}
