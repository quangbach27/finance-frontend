import AccountProfileContainer from '@containers/AccountProfileContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard Page',
    icons: '/logo-black.svg'
};

export default function DashboardPage() {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
            <div>
                <AccountProfileContainer />
            </div>
            <div className="bg-green-500">Recent Transactions</div>
            <div className="bg-blue-400 lg:col-span-2">Upcomming Events</div>
        </div>
    );
}
