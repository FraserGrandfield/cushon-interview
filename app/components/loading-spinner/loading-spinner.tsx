import { CircularProgress } from "@mui/material";

/**
 * Loading spinner component
 * 
 * @param { size } size of the spinner 
 * @returns A React element that renders the loading spinner.
 */
export default function LoadingSpinner({ size }: {size: string}) {
    return (
        <CircularProgress id="loading-spinner" size={size} />
    )
}