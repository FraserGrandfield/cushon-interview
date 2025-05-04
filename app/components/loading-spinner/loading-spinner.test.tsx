import { render } from "@testing-library/react";
import LoadingSpinner from "./loading-spinner";

describe("Loading Spinner Componet", () => {
    it("should display the loading spinner", () => {
        const result = render(<LoadingSpinner size="10px"/>);
        const spinner = result.container.querySelector('#loading-spinner');
        expect(spinner).toBeInTheDocument()
    });
});