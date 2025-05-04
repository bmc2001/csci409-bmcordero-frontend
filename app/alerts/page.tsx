async function fetchAlerts() {
    const username = 'admin';
    const password = 'password123';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch('http://localhost:8000/alerts', {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch alerts');
    const data = await res.json();
    return data.alerts;
}
export default async function AlertListPage() {
    const alerts = await fetchAlerts();
    return (
        <div>
            <h1>Available Alerts</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {alerts.map((alert: any) => (
                    <li key={alerts.id} style={{
                        backgroundColor: alert.color,
                        color: alert.text_color,
                        padding: '1rem',
                        marginBottom: '0.5rem',
                        borderRadius: '8px'
                    }}>
                        <a href={`/alerts/${alert.id}`} style={{ textDecoration:
                                'none', color: 'inherit' }}>
                            {alert.long_name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}