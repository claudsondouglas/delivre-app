import Backbar from "../Backbar";

export default function OverlayClose({ action } : { action: any}) {
    return (
        <div className="flex-1">
            <Backbar onclick={action} />
        </div>
    )
}