import { render, screen } from "@testing-library/react";
import FullScreenSpinnerHandler from "./full-screen-spinner-handler";

describe("FullScreenSpinnerHandler Componet", () => {

    it("should display the loading spinner", () => {
        const result = render(<FullScreenSpinnerHandler isLoading={ true }><>test</></FullScreenSpinnerHandler>);
        const spinner = result.container.querySelector("#loading-spinner");
        const text = screen.queryByText("test");
        expect(spinner).toBeInTheDocument();
        expect(text).not.toBeInTheDocument();
    });

    it("should not display the loading spinner and display child component", () => {
        const result = render(<FullScreenSpinnerHandler isLoading={ false }><>test</></FullScreenSpinnerHandler>);
        const spinner = result.container.querySelector("#loading-spinner");
        const text = screen.queryByText("test");
        expect(spinner).not.toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });
});
