import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-100 flex items-center justify-center bg-black/20">
            <CircularProgress className="self-center"/>
        </div>
    )
}