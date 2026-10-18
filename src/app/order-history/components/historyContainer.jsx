export default function HistoryContainer({index , ordersLength , order}){
    return (
        <div 
                className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    {/* Order Header: Date & Status/Summary */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-zinc-100 gap-2">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                                Order #{ordersLength - index}
                            </span>
                            <span className="text-sm text-zinc-500 ml-2">{order.date}</span>
                        </div>
                        <div className="text-sm font-medium text-zinc-800">
                            Grand Total: <span className="text-zinc-900 font-bold">${order.payment.grandTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Cart Items List */}
                    <div className="py-3 space-y-3">
                        <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Items Ordered</p>
                        <div className="space-y-2">
                            {order.cart.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center justify-between bg-zinc-50 p-3 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-100 text-orange-700 font-bold text-xs h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            {item.amount}x
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-800">{item.name}</h4>
                                            {item.customOrder && (
                                                <p className="text-xs text-zinc-500 italic mt-0.5">Note: {item.customOrder}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-sm font-semibold text-zinc-700">
                                        ${(item.price * item.amount).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Footer: Payment breakdown */}
                    <div className="pt-3 border-t border-zinc-100 flex justify-between items-center text-xs text-zinc-500">
                        <span>Delivery Fee: ${order.payment.deliveryFee.toFixed(2)}</span>
                        <span className="text-zinc-700 font-medium">
                            Subtotal: ${(order.payment.grandTotal - order.payment.deliveryFee).toFixed(2)}
                        </span>
                    </div>
                </div>
    )
}