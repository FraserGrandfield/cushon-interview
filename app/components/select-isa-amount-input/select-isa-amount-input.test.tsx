import { fireEvent, render, screen } from "@testing-library/react";
import SelectISAAmountInput, { validateAmount } from "./select-isa-amount-input";
import { SelectedFund } from "../select-isa-stepper/select-isa-stepper";

describe("SelectISAAmountInput component", () => {

    describe("SelectISAAmountInput validate", () => {
        it("should error if amount is 49", () => {
            const result = validateAmount(49);
            expect(result).toEqual("Error: Amount must be greater than 50");
        });

        it("should error if amount is 49.99", () => {
            const result = validateAmount(49.99);
            expect(result).toEqual("Error: Amount must be greater than 50");
        });

        it("should error if amount is 0", () => {
            const result = validateAmount(49.99);
            expect(result).toEqual("Error: Amount must be greater than 50");
        });

        it("should error if amount is negative", () => {
            const result = validateAmount(-1);
            expect(result).toEqual("Error: Amount must be greater than 50");
        });

        it("should error if amount is 20,000.01", () => {
            const result = validateAmount(20000.01);
            expect(result).toEqual("Error: You cannot invest more then £20,000");
        });

        it("should error if amount is 20,001", () => {
            const result = validateAmount(20001);
            expect(result).toEqual("Error: You cannot invest more then £20,000");
        });

        it("should error if amount there is more than 2 decimals", () => {
            const result = validateAmount(10.555);
            expect(result).toEqual("Error: You cannot have more than 2 decimal places");
        });

        it("should not error if the amount is 50", () => {
            const result = validateAmount(50);
            expect(result).toEqual("");
        });

        it("should not error if the amount is 20,000", () => {
            const result = validateAmount(20000);
            expect(result).toEqual("");
        });

        it("should not error if the amount is 50.01", () => {
            const result = validateAmount(50.01);
            expect(result).toEqual("");
        });

        it("should not error if the amount is 19999.99", () => {
            const result = validateAmount(19999.99);
            expect(result).toEqual("");
        });

        it("should not error if the amount is 10,000", () => {
            const result = validateAmount(10000);
            expect(result).toEqual("");
        });
    });

    it("should display nothing in the input if amount is 0", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>)
        const input = screen.getByTestId("amount-input");
        expect(input.innerText).toEqual(undefined);
    });

    it("should display 10 in the input if amount is 10", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 10, error: "" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>);
        const input = screen.getByTestId("amount-input").querySelector("input");
        expect(input?.value).toEqual("10");
    });

    it("should not display an error if there is not one", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 10, error: "" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>);
        const error = screen.queryByText("Error");
        expect(error).not.toBeInTheDocument();
    });

    it("should display an error if there is one", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 10, error: "Error: an error occured" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>);
        const error = screen.queryByText("Error")
        expect(error).toBeNull();
    });

    it("should set selectedFund on change with no error", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>);
        const input = screen.getByTestId("amount-input").querySelector("input")!;
        fireEvent.change(input, {target: {value: "1000"}})
        expect(setSelectedFund).toHaveBeenCalledWith({ id: "fundId", amount: 1000, error: "" });
    });

    it("should set selectedFund on change with an error", () => {
        const selectedFund: SelectedFund = { id: "fundId", amount: 0, error: "" };
        const setSelectedFund = jest.fn();
        render(<SelectISAAmountInput selectedFund={selectedFund} setSelectedFund={setSelectedFund}/>);
        const input = screen.getByTestId("amount-input").querySelector("input")!;
        fireEvent.change(input, {target: {value: "20"}})
        expect(setSelectedFund).toHaveBeenCalledWith({ id: "fundId", amount: 0, error: "Error: Amount must be greater than 50" });
    });
});
