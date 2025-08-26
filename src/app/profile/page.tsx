import Profile from "@/components/profile/Profile";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Page() {
    return (
        <ProtectedRoute>
            <div className="container-1200">
                <Profile />
            </div>
        </ProtectedRoute>
    );
}
