import AppHeader from '@components/common/AppHeader';
import AppSidebar from '@components/common/AppSidebar';

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <AppSidebar />
            <div className="flex w-full flex-1 flex-col">
                {/* Header */}
                <header className="flex h-16 items-center border-b border-gray-200">
                    <AppHeader />
                </header>
                <main className="flex-1 overflow-auto bg-white p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
