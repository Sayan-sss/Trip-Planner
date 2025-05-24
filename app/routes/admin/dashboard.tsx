import { Header } from "../../../components";

const dashboard = () => {
  const user = { name: "Sayan" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track you travel"
      />
      Dashboard content
    </main>
  );
};

export default dashboard;
