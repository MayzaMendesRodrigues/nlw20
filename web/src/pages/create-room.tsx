import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type GetRoomsApiResponse = Array< {
  id: string;
  name: string;
}>
export default function CreateRoom() {
  const {data, isLoading} = useQuery({
    queryKey: ["create-room"],
    queryFn: async () => {
      // Simulate an API call
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsApiResponse = await response.json();
      return result;
    },
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
<div>
      {data?.map((room) => {
    return <Link to={`/room/${room.id}`} key={room.id}>
        {room.name}</Link>
})}
    </div>
          <Link to="/rooms/">Acessar sala</Link>
</div>
  );
}
