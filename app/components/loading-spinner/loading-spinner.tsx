import { CircularProgress } from "@mui/material";

export default function LoadingSpinner({ size }: {size: string}) {
    return (
        <CircularProgress id="loading-spinner" size={size} />
    )
}