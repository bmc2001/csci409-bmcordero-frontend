interface Props {
    params: { alert_id: string };
}

export default function AlertDetail({ params }: Props) {
    return <h1>Alert ID Details: {params.alert_id}</h1>;
}