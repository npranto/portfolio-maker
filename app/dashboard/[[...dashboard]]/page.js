import { currentUser } from '@clerk/nextjs/server';

const DashboardPage = async () => {
  const user = await currentUser();

  return (
    <>
      <div className="min-h-screen px-4 py-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <h1>Welcome, {user?.firstName}!</h1>
      </div>
    </>
  );
};

export default DashboardPage;
