import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';

export default function DropdownContentMenuLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] rounded-lg border border-zinc-200 bg-background p-1 shadow-lg sm:w-80"
        >
            <div className="">
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                    <div className="p-6">{children}</div>
                </div>
            </div>
        </DropdownMenuContent>
    );
}
