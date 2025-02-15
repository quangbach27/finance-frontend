export type TagType = 'THU' | 'CHI';

export type BankAccountType = {
    balance: number;
    account_number: string;
    bank_name: string;
    wallets?: Array<{
        id: number;
        balance: number;
        name: string;
        description?: string;
        transactions?: Array<{
            id: string;
            amount: number;
            description: string;
            date: Date;
            tag_id: number;
        }>;
        tags?: Array<{
            id: number;
            name: string;
            type: TagType;
        }>;
    }>;
};
