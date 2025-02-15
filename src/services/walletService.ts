import { BankAccountType } from '@/lib/definition';
import { BANK_ACCOUNTS } from '@lib/mockData';

export const getBankAccount = async (): Promise<BankAccountType> => {
    return BANK_ACCOUNTS;
};
