import { render, screen } from "@testing-library/react";
import SelectISAReview from "./select-isa-review";
import { SelectedFund } from "../select-isa-stepper/select-isa-stepper";
import { mockFunds } from "../../../mockFunds";

describe("SelectISAReview component", () => {

    it("should render selected fund amount", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 500, error: "" };
        const mockFund = mockFunds[0];
        render(<SelectISAReview selectedFund={selectedFund} fund={mockFund}/>)
        const amount = screen.queryByText(`£${selectedFund.amount}`);
        expect(amount).toBeInTheDocument();
    });

    it("should render selected fund name", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 500, error: "" };
        const mockFund = mockFunds[0];
        mockFund.label = "Mock fund name"
        render(<SelectISAReview selectedFund={selectedFund} fund={mockFund}/>)
        const fund = screen.queryByText("Mock fund name");
        expect(fund).toBeInTheDocument();
    });
});
