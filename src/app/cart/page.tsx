import Cart from "@/components/cart/Cart";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Page() {
    return (
        <ProtectedRoute>
            <div className="container-1200">
                <Cart />
            </div>
        </ProtectedRoute>
    );
}
