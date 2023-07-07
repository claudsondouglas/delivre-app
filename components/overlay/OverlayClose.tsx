import Backbar from "../Backbar";

export default function OverlayClose({ action } : { action: any}) {
    return (
        <div className="flex">
            <Backbar onclick={action} />
        </div>
    )
}