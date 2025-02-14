import clsx from 'clsx';
import Link from 'next/link';

export default function NavItem({
    href,
    icon: Icon,
    children,
    isActive = false,
    ...rest
}: {
    href?: string;
    icon: React.ElementType;
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}) {
    const Component = href ? Link : 'button';

    return (
        <Component
            {...(href ? { href } : { type: 'button' })}
            className={clsx(
                'text-md flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900',
                {
                    'text-gray-600': !isActive,
                    'bg-gray-100 text-gray-900': isActive
                }
            )}
            {...rest}
        >
            <Icon className="h-4 w-4" />
            {children}
        </Component>
    );
}
