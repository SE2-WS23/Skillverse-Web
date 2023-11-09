import PageLayout from "../../components/PageLayout";
import DashboardItem from "./components/DashboardItem";

function DashboardPage() {
  return (
    <PageLayout>
      <div>
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
      </div>
    </PageLayout>
  );
}

export default DashboardPage;
