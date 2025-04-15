interface Props {
    params: { route_id: string };
}

export default function RouteDetail({ params }: Props) {
    return <h1>Route ID Details: {params.route_id}</h1>;
}