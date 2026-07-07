import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../../features/home/pages/HomePage.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};