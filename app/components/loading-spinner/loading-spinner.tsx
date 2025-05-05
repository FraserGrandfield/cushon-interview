import { CircularProgress } from "@mui/material";

interface LoadingSpinnerProps {
    size: string;
    color?: string
}

/**
 * Loading spinner component
 * 
 * @param { LoadingSpinnerProps } props size and color of spinner. Color is optional
 * @returns A React element that renders the loading spinner
 */
export default function LoadingSpinner({ size, color }: LoadingSpinnerProps) {
    return (
        <CircularProgress id="loading-spinner" size={ size } sx={{ color }}/>
    )
}