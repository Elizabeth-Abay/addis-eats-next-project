// real table markup

export default function OrderTable({ orders }){
    return (
        <table>
            {/* use scope and caption in here */}
            <caption>Your orders most recent first</caption>
            <thead>
                <tr>
                    <th scope="col">Order</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>

            {/* so in my orders we gotta have a filter for the orders of a user */}
            {/* in the body we will get the users order in an array */}

            <tbody>
                {
                    orders.map(
                        order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>ETB {order.grandTotal}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}