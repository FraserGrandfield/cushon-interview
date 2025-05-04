import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header Componet", () => {
    it("should display the Natwest title", () => {
        render(<Header />);
        const title = screen.getByText(/NatWest/i);
        expect(title).toBeInTheDocument()
    });

    it("should display the individual isa link", () => {
        render(<Header />);
        const link = screen.getByText(/Individual ISAs/i);
        expect(link).toBeInTheDocument()
    });

    it("should display the workplace isa link", () => {
        render(<Header />);
        const link = screen.getByText(/Workplace ISAs/i);
        expect(link).toBeInTheDocument()
    });

    it("should have the correct href for the home page", () => {
        render(<Header />);
        const title = screen.getByText(/NatWest/i);
        expect(title).toHaveAttribute('href', '/')
    });

    it("should have the correct href for the individual isa page", () => {
        render(<Header />);
        const title = screen.getByText(/Individual ISAs/i);
        expect(title).toHaveAttribute('href', '/individual-isa')
    });

    it("should have the correct href for the workplace isa page", () => {
        render(<Header />);
        const title = screen.getByText(/Workplace ISAs/i);
        expect(title).toHaveAttribute('href', '/workplace-isa')
    });
});
