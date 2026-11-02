import CustomizeOrder from "../components/CustomizeOrder";

export default async function OrderPage({ params }) {
    let items = await params;
    let { id } = items;

    let result = await fetch("https://addis-eats-backend.onrender.com/menu/", {
        refreshInterval: 900000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        dedupingInterval: 2000,
    });

    // ! replace this with the error page
    if (!result || !result.ok) return <p className="error-message">Error while loading page</p>;

    let MenuItems = await result.json();
    let totalMenuItems = MenuItems.data
    let found = totalMenuItems.find((menu) => menu.id === String(id));

    if (!found) return <p className="error-message">Item not found</p>;

    let item = {
        id: found.id,
        name: found.nameEn,
        description: found.description,
        price: found.priceETB,
    };

    return (
        <main className="order-page-wrapper">
            <CustomizeOrder item={item} />
        </main>
    );
}