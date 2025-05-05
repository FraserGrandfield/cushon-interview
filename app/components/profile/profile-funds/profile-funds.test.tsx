import { render, screen, waitFor } from "@testing-library/react";
import * as api from '../../../api';
import { mockFunds } from "../../../mockFunds";
import ProfileFunds from "./profile-funds";

describe("ProfileFunds component", () => {

    it("should display a single fund", async () => {
        jest.spyOn(api, "getFundById").mockResolvedValue(mockFunds[0]);
        const mockUserFunds = [{ fundId: "fund id", amountInvested: 200, currentValue: 300 }]
        render(<ProfileFunds userFunds={ mockUserFunds }/>);
        await waitFor(() => {
            const fund = screen.queryByText(`Invest Amount: £${mockUserFunds[0].amountInvested}`);
            expect(fund).toBeInTheDocument();
        });
    });

    it("should display a multiple funds", async () => {
        jest.spyOn(api, "getFundById").mockResolvedValue(mockFunds[0]);
        const mockUserFunds = [
            {
                fundId: "fund id",
                amountInvested: 200,
                currentValue: 300
            },
            {
                fundId: "second fund id",
                amountInvested: 50,
                currentValue: 25
            }
        ]
        render(<ProfileFunds userFunds={ mockUserFunds }/>);
        await waitFor(() => {
            const firstFund = screen.queryByText(`Invest Amount: £${mockUserFunds[0].amountInvested}`);
            const secondFund = screen.queryByText(`Invest Amount: £${mockUserFunds[1].amountInvested}`);
            expect(firstFund).toBeInTheDocument();
            expect(secondFund).toBeInTheDocument();
        });
    });
});