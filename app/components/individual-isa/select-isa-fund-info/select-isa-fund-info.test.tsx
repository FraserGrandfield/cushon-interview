import { fireEvent, render, screen } from "@testing-library/react";
import SelectISAFundInfo from "./select-isa-fund-info";
import { SelectedFund } from "../select-isa-stepper/select-isa-stepper";
import { mockFunds } from "../../../mockFunds";

describe("SelectISAFundInfo component", () => {

    it("should render fund label", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        const mockTitle = "Example mock fund";
        mockFund.label = mockTitle;
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const title = screen.queryByText(mockTitle);
        expect(title).toBeInTheDocument();
    });

    it("should render fund summary", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        const mockSummary = "Example mock summary";
        mockFund.label = mockSummary;
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const summary = screen.queryByText(mockSummary);
        expect(summary).toBeInTheDocument();
    });

    it("should render fund charge", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.charges = 200;
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const charge = screen.queryByText(`Annual Charges: ${200}%`);
        expect(charge).toBeInTheDocument();
    });

    it("should render fund portfolio", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.portfolio = [
            {
                name: "Example portfolio",
                percentage: 500,
                about: "Example portfolio about"
            }
        ];
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const name = screen.queryByText("Example portfolio");
        const percentage = screen.queryByText(`Percentage: ${50000}%`);
        const about = screen.queryByText("Example portfolio about");
        expect(name).toBeInTheDocument();
        expect(percentage).toBeInTheDocument();
        expect(about).toBeInTheDocument();
    });

    it("should set select fund button to 'Select Fund' if no fund selected", () => {
        const selectedFund: SelectedFund = { id: "", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole("button");
        expect(button.innerHTML).toEqual("Select Fund");
    });

    it("should set select fund button to 'Select Fund' if a differnt fund is selected", () => {
        const selectedFund: SelectedFund = { id: "A different fund Id", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.id = "Mock fund id";
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole("button");
        expect(button.innerHTML).toEqual("Select Fund");
    });

    it("should set select fund button to 'Unselect Fund' if the current fund is selected", () => {
        const selectedFund: SelectedFund = { id: "Mock fund id", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.id = "Mock fund id";
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole("button");
        expect(button.innerHTML).toEqual("Unselect Fund");
    });

    it("should set the selected fund correctly if it hasn't been set before", () => {
        const selectedFund: SelectedFund = { id: "", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.id = "Mock fund id";
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(setSelectedFund).toHaveBeenCalledWith({ id: "Mock fund id", amount: 0, error: "" });
    });

    it("should set the selected fund correctly if it has been set before with a different fund", () => {
        const selectedFund: SelectedFund = { id: "A different fund Id", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.id = "Mock fund id";
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(setSelectedFund).toHaveBeenCalledWith({ id: "Mock fund id", amount: 0, error: "" });
    });

    it("should set the selected fund correctly if it has been set before with the same fund", () => {
        const selectedFund: SelectedFund = { id: "Mock fund id", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        const mockFund = mockFunds[0];
        mockFund.id = "Mock fund id";
        render(<SelectISAFundInfo selectedFund={selectedFund} setSelectedFund={setSelectedFund} fund={mockFund}/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(setSelectedFund).toHaveBeenCalledWith({ id: "", amount: 0, error: "" });
    });

});