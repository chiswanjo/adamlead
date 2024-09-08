// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Lead Generation Platform</h1>
      <p>This is the landing page of your platform.</p>
      <nav>
        <Link href="/leads">View Leads</Link>
        <br />
        <Link href="/dashboard">Go to Dashboard</Link>
      </nav>
    </div>
  );
}
