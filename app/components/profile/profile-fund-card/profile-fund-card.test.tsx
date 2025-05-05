import { render, screen, waitFor } from "@testing-library/react";
import ProfileFundCard from "./profile-fund-card";
import * as api from '../../../api';
import { mockFunds } from "../../../mockFunds";

describe("ProfileFundCard component", () => {

    it("should display the amount invested", async () => {
        jest.spyOn(api, "getFundById").mockResolvedValue(mockFunds[0]);
        const mockUserFund = { fundId: "fund id", amountInvested: 200, currentValue: 300 }
        render(<ProfileFundCard userFund={ mockUserFund }/>);
        await waitFor(() => {
            const fund = screen.queryByText(`Invest Amount: £${mockUserFund.amountInvested}`);
            expect(fund).toBeInTheDocument();
        });
    });

    it("should display the amount invested", async () => {
        jest.spyOn(api, "getFundById").mockResolvedValue(mockFunds[0]);
        const mockUserFund = { fundId: "fund id", amountInvested: 200, currentValue: 300 }
        render(<ProfileFundCard userFund={ mockUserFund }/>);
        await waitFor(() => {
            const fund = screen.queryByText(`Invest Amount: £${mockUserFund.amountInvested}`);
            expect(fund).toBeInTheDocument();
        });
    });

    it("should display the fund name", async () => {
        const mockFund = mockFunds[0];
        mockFund.label = "Mock fund name";
        jest.spyOn(api, "getFundById").mockResolvedValue(mockFunds[0]);
        const mockUserFund = { fundId: "fund id", amountInvested: 200, currentValue: 300 }
        render(<ProfileFundCard userFund={ mockUserFund }/>);
        await waitFor(() => {
            const fund = screen.queryByText("Mock fund name");
            expect(fund).toBeInTheDocument();
        })

    });
});