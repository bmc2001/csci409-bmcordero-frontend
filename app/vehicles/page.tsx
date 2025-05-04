async function fetchVehicles() {
    const username = 'admin';
    const password = 'password123';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch('http://localhost:8000/vehicles', {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch vehicles');
    const data = await res.json();
    return data.vehicles;
}
export default async function VehicleListPage() {
    const vehicle = await fetchVehicles();
    return (
        <div>
            <h1>Available Vehicles</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {vehicle.map((vehicle: any) => (
                    <li key={vehicle.id} style={{
                        backgroundColor: vehicle.color,
                        color: vehicle.text_color,
                        padding: '1rem',
                        marginBottom: '0.5rem',
                        borderRadius: '8px'
                    }}>
                        <a href={`/vehicles/${vehicle.id}`} style={{ textDecoration:
                                'none', color: 'inherit' }}>
                            {vehicle.long_name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}