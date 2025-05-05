enum FundRiskLevel {
    Very_High,
    High,
    Medium,
    Low
}

export interface Fund {
    id: string;
    label: string;
    charges: number;
    summary: string;
    riskLeveLevel: FundRiskLevel;
    predicted: {
        year: number,
        percentage: number
    }[]
    portfolioDescription: string,
    portfolio: {
        name: string,
        percentage: number,
        about: string
    }[],
    expectedPercentageIncrease: {
        mostLikely: number,
        good: number,
        bad: number
    }
}

export interface UserFund {
    fundId: string,
    amountInvested: number
}

export interface User {
    id: string,
    name: string,
    funds: UserFund[]
}

/**
 * Get an array all funds available
 * 
 * @returns { Promise<Fund[]> } array of all funds
 */
export async function getFunds(): Promise<Fund[]> {
    return new Promise((resolve) => {
        const dbRequest = indexedDB.open("cushon")
        dbRequest.onsuccess = () => {
            const request = dbRequest.result.transaction('funds').objectStore('funds').getAll();
            request.onsuccess = () => {
                resolve(request.result);
            };
            request.onerror = (e) => {
                console.log("Error:", e);
                resolve([]);
            }
        }
    });
}

/**
 * Put or update an amount a user is investing into a specified fund
 * 
 * @param { string } userId users id to add investment to
 * @param { string } fundId id of fund user is investing into
 * @param { number } amount amount to invest
 * @returns 
 */
export async function setFund(userId: string, fundId: string, amount: number): Promise<void> {
    return new Promise((resolve) => {
        const dbRequest = indexedDB.open("cushon")
        dbRequest.onsuccess = () => {
            const objectStore = dbRequest.result.transaction('users', "readwrite").objectStore('users');
            const request = objectStore.get(userId);
            request.onsuccess = () => {
                let user: User = request.result;
                let fundIndex = user.funds.findIndex(fund => fund.fundId === fundId)
                if (fundIndex > -1) {
                    user.funds[fundIndex].amountInvested += amount;
                } else {
                    user.funds.push({ fundId, amountInvested: amount });
                }
                const updateRequest = objectStore.put(user);
                updateRequest.onsuccess = () => {
                    resolve();
                }
                updateRequest.onerror = (e) => {
                    console.log("Error:", e);
                    resolve();
                }
            };
            request.onerror = (e) => {
                console.log("Error:", e);
                resolve();
            }
        }
    });
}