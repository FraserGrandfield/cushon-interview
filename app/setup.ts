/**
 * The file is only for testing.
 * It will create a database 'cushon' in IndexDB and add mock funds.
 */
import { User } from "./api";
import { mockFunds } from "./mockFunds";

const mockUser: User = {
    id: "3910ce07-4462-4782-b388-670c8dd37164",
    name: "Jhon Doe",
    funds: []
}

export function setup() {
    new Promise((resolve) => {
        const request = indexedDB.open("cushon");
        request.onupgradeneeded = () => {
            let db = request.result;
            if (!db.objectStoreNames.contains("funds")) {
                db.createObjectStore("funds", { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains("users")) {
                db.createObjectStore("users", { keyPath: 'id' });
            }
        };
        request.onsuccess = () => {
            resolve(true);
        } 
    }).then(() => addMockFund());
}

function addMockFund() {
    const request = indexedDB.open("cushon");
    request.onsuccess = () => {
        let db = request.result;
        mockFunds.forEach(fund => {
            db.transaction('funds', 'readwrite')
            .objectStore('funds')
            .add(fund);
        });
        db.transaction('users', 'readwrite')
        .objectStore('users')
        .add(mockUser);
    }
}