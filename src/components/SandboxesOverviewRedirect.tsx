import type { FC } from 'react';
import { Navigate, useLocation } from 'react-router';

/**
 * The console marks a nav item active on a segment-prefix match, so an Overview nav item
 * pointing at "/sandboxes" is also highlighted on every "/sandboxes/*" page. The Overview
 * nav item therefore targets "/sandboxes/overview" (not a prefix of any sibling), and this
 * route keeps legacy "/sandboxes" links working.
 */
const SandboxesOverviewRedirect: FC = () => {
  const { search, hash } = useLocation();
  return <Navigate to={`/sandboxes/overview${search}${hash}`} replace />;
};

export default SandboxesOverviewRedirect;
