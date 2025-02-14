export const metadata: Metadata = {
    title: 'Dashboard Page'
};

export default function DashboardPage() {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
            <div className="bg-red-300">
            
            </div>
            <div className="bg-green-500">Recent Transactions</div>
            <div className="bg-blue-400 lg:col-span-2">Upcomming Events</div>
        </div>
    );
}
