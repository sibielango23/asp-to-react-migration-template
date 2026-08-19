import { CommonLayout } from "./components/CommonLayout";
import { DashboardPage } from "./components/DashboardPage";
import { LoginForm } from "./components/LoginForm";
import { ProductManagement } from "./components/ProductManagement";

export default function App() {
  return (
    <CommonLayout>
      <LoginForm />
      <DashboardPage />
      <ProductManagement />
    </CommonLayout>
  );
}

