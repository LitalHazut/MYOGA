import { createAccount } from '../accounts-service';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { IAccount } from '../types';

export const useAddAccount = () => {
    const [account, setAccount] = useState<IAccount[]>([]);

    return (newAccount: string, email: string, password: string) => {
        const unique_id = uuid();
        let id = parseInt(unique_id);
        let newEntry = { id, name: newAccount, email, password };

        createAccount(newEntry)
            .then(() => setAccount([...account, newEntry]))
            .catch((e) => {
                alert('oh no i failed!!');
            });
    };
};



