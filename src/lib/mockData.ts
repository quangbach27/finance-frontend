import { BankAccountType } from './definition';

export const BANK_ACCOUNTS: BankAccountType = {
    balance: 20000000,
    account_number: '7777777316',
    bank_name: 'Techcombank',
    wallets: [
        {
            id: 1,
            balance: 10000000,
            name: 'Quy Tc Tong',
            transactions: [
                {
                    id: 'abc',
                    amount: 200000,
                    tag_id: 3,
                    description: 'Tien zoom',
                    date: new Date(2025, 1, 11)
                },
                {
                    id: 'abcd',
                    amount: 500000,
                    tag_id: 2,
                    description: 'Tien nha - Song',
                    date: new Date(2025, 1, 10)
                },
                {
                    id: 'abcde',
                    amount: 1000000,
                    tag_id: 2,
                    description: 'Tien nha - Dat',
                    date: new Date(2025, 1, 14)
                },
                {
                    id: 'adcdef',
                    amount: 1000000,
                    tag_id: 1,
                    description: 'Tien DH',
                    date: new Date()
                }
            ],
            tags: [
                {
                    id: 1,
                    name: 'Tien DH',
                    type: 'THU'
                },
                {
                    id: 2,
                    name: 'Tien Thanh Vien o VP',
                    type: 'THU'
                },
                {
                    id: 3,
                    name: 'Chi co dinh',
                    type: 'CHI'
                }
            ]
        },
        {
            id: 2,
            balance: 2000000,
            name: 'Quy Du Phong'
        },
        {
            id: 3,
            balance: 8000000,
            name: 'Quy VP',
            tags: [
                {
                    id: 4,
                    name: 'Dinh ky',
                    type: 'THU'
                },
                {
                    id: 5,
                    name: 'Chundo',
                    type: 'CHI'
                }
            ]
        }
    ]
};
