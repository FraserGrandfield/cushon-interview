import { render, screen } from "@testing-library/react";
import SelectISAAmountInfo from "./select-isa-amount-info";
import { mockFunds } from "../../../mockFunds";
import { Fund } from "~/api";

describe("SelectISAAmountInfo component", () => {

    const renderDefaultComponent = (mockFund: Fund) => {
        render(<SelectISAAmountInfo fund={mockFund}>test</SelectISAAmountInfo>);
    }

    it("should display the isa warning", () => {
        const mockFund = mockFunds[0]
        renderDefaultComponent(mockFund);
        const warning = screen.getByText(/ISA allowance: up to £20,000 per tax year/i);
        expect(warning).toBeInTheDocument()
    });

    it("should display the fund selected", () => {
        const mockFund = mockFunds[0]
        mockFund.label = "test fund"
        renderDefaultComponent(mockFund);
        const fund = screen.getByText(/test fund/i);
        expect(fund).toBeInTheDocument()
    });

    it("should display the correct children", () => {
        const mockFund = mockFunds[0]
        render(
            <SelectISAAmountInfo fund={mockFund}>
                <div>
                    children text
                </div>
            </SelectISAAmountInfo>
        );
        const fund = screen.getByText(/test fund/i);
        expect(fund).toBeInTheDocument()
    });
});
