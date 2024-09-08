// pages/leads/[id].js

import { useRouter } from 'next/router';

export default function LeadDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Lead Details for {id}</h1>
      <p>Here you can view details for lead {id}.</p>
    </div>
  );
}
