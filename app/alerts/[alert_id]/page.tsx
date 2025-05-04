// app/alerts/[alert_id]/page.tsx
async function fetchAlertDetail(alert_id: string) {
    const username = 'admin';
    const password = 'password123';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch(`http://localhost:8000/alerts/${alert_id}`, {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Vehicle ${alert_id} not found`);
    const data = await res.json();
    return data.alert;
}
export default async function VehicleDetailPage({ params }: { params: {
        alert_id: string } }) {
    const alert = await fetchAlertDetail(params.alert_id);
    return (
        <div style={{
            backgroundColor: alert.color,
            color: alert.text_color,
            padding: '2rem',
            borderRadius: '10px'
        }}>
            <h1>{alert.long_name}</h1>
            <p><strong>ID:</strong> {alert.id}</p>
            <p><strong>Description:</strong> {alert.description}</p>
            <a href="/alerts" style={{ color: alert.text_color }}>Back to Alerts
                List</a>
        </div>
    );
}