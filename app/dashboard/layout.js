import { RedirectToSignIn } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import PropTypes from 'prop-types';

export default async function DashboardLayout({ children }) {
  const user = await currentUser();

  if (!user) return <RedirectToSignIn />;

  return (
    <>
      <main>{children}</main>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
