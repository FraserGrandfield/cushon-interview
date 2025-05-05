import { render, screen } from "@testing-library/react";
import { mockFunds } from "../../../mockFunds";
import SelectedFundsInfo from "./selected-funds-info";

describe("SelectedFundsInfo component", () => {

    it("should render the fund name", () => {
        const mockFund = mockFunds[0];
        mockFund.label = "Mock fund name"
        render(<SelectedFundsInfo fund={mockFund}/>)
        const fund = screen.queryByText("Mock fund name");
        expect(fund).toBeInTheDocument();
    });
});
