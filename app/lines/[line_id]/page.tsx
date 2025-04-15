interface Props {
    params: { line_id: string };
}

export default function LineDetail({ params }: Props) {
    return <h1>Line ID Details: {params.line_id}</h1>;
}