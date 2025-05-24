import { Header, StatsCard, TripCard } from "../../../components";

const dashboard = () => {
  const user = { name: "Sayan" };

  const dashboardStats = {
    totalUsers: 12540,
    usersJoined: { currentMonth: 218, lastMonth: 192 },
    totalTrips: 3455,
    tripsCreated: { currentMonth: 137, lastMonth: 169 },
    userRole: { total: 69, currentMonth: 39, lastMonth: 20 },
  };

  const { totalUsers, totalTrips, usersJoined, userRole, tripsCreated } =
    dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track you travel"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>

      <TripCard />
    </main>
  );
};

export default dashboard;
