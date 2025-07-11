import{useParams, Navigate} from 'react-router-dom';


type RoomParams = {
  roomId: string;
}
export default function Room() {
    const params = useParams<RoomParams>();
    if (!params.roomId) {
        return <Navigate to="/" replace/>
    }
    return <div> Room details {JSON.stringify(params)}</div>
}