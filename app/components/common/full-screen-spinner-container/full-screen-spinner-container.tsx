
export default function FullScreenSpinnerContainer({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                { children }
            </div>
        </div>
    )
}