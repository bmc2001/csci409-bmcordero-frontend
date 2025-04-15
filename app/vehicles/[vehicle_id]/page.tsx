interface Props {
    params: { vehicle_id: string };
}

export default function VehicleDetail({ params }: Props) {
    return <h1>Vehicle ID Details: {params.vehicle_id}</h1>;
}