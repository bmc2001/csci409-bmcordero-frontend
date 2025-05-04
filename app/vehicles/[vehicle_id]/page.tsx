// app/vehicles/[vehicle_id]/page.tsx
async function fetchVehicleDetail(vehicle_id: string) {
    const username = 'admin';
    const password = 'password123';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch(`http://localhost:8000/vehicles/${vehicle_id}`, {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Vehicle ${vehicle_id} not found`);
    const data = await res.json();
    return data.vehicle;
}
export default async function VehicleDetailPage({ params }: { params: {
        vehicle_id: string } }) {
    const vehicle = await fetchVehicleDetail(params.vehicle_id);
    return (
        <div style={{
            backgroundColor: vehicle.color,
            color: vehicle.text_color,
            padding: '2rem',
            borderRadius: '10px'
        }}>
            <h1>{vehicle.long_name}</h1>
            <p><strong>ID:</strong> {vehicle.id}</p>
            <p><strong>Description:</strong> {vehicle.description}</p>
            <a href="/vehicles" style={{ color: vehicle.text_color }}>Back to Vehicles
                List</a>
        </div>
    );
}
