import { getBankAccount } from '@/services/walletService';
import IconButton from '@components/common/IconButton';
import { formatCurrency } from '@lib/utils';
import { Plus, Wallet } from 'lucide-react';

export default async function AccountProfileContainer() {
    const bankAccount = await getBankAccount();
    return (
        <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
                <div className="flex items-center gap-2">
                    <Wallet height={16} width={16} />
                    <h1 className="text-xl font-bold text-gray-700">Account</h1>
                </div>
                <p className="text-gray-600">
                    {bankAccount.account_number} - {bankAccount.bank_name}
                </p>
            </div>
            <div className="rounded-lg border border-gray-100">
                <div className="border-b border-gray-100 p-4">
                    <h2 className="text-base text-gray-600">Total balance</h2>
                    <p className="text-xl font-semibold">
                        {formatCurrency(bankAccount.balance)}
                    </p>
                </div>
                <div className="border-b border-gray-100">
                    <div className="p-3 text-sm">
                        <p className="mb-2">Your Account</p>
                        <div>
                            {(bankAccount.wallets || []).map((wallet) => (
                                <div
                                    key={wallet.id}
                                    className="flex items-center justify-between rounded-md p-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-green-200 p-2">
                                            <Wallet width={16} height={16} />
                                        </div>
                                        <p>{wallet.name}</p>
                                    </div>
                                    <div>{formatCurrency(wallet.balance)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2 p-2 text-white md:gap-3">
                    <IconButton icon={Plus} label="Add" />
                </div>
            </div>
        </div>
    );
}
