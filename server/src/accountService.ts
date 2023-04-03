import dbConnection from './dbConnection';

class AccountsService {

    getAllAccounts() {
        return new Promise((resolve, reject) =>
            dbConnection.query('SELECT * FROM accounts', (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        );
    }

    createAccount(name: string, email: string, password: string) {
        const sql = `INSERT INTO accounts(name,email,password) VALUES (?, ?,?)`;
        const values = [name, email, password];
        return new Promise((resolve, reject) =>
            dbConnection.query(sql, values, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        );
    }
    checkIfEmailExist(email: string) {
        const sql = dbConnection.query('SELECT email FROM accounts where email = ?');
        console.log(sql);
        return new Promise((resolve, reject) =>
            dbConnection.query(sql, email, (err, result) => {
                if (err) reject(err);
                resolve(result);

            })
        );
    }

}
export default AccountsService;
