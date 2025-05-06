import LoadingSpinner from "../loading-spinner/loading-spinner";

interface FullScreenSpinnerHandlerProps {
    children: React.ReactElement;
    isLoading: boolean;
}

/**
 * Handler for displaying the full screen spinner
 * 
 * @param { FullScreenSpinnerHandlerProps } boolean
 * @returns  A React element that renders a spinner or child element
 */
export default function FullScreenSpinnerHandler({ children, isLoading }: FullScreenSpinnerHandlerProps) {
    return (
        <>
            {isLoading ?
            <div className="flex h-screen">
                <div className="m-auto">
                    <LoadingSpinner size={"250px"}/>
                </div>
            </div> :
            <>
                { children }
            </>
            }
        </>
    )
}