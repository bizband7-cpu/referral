'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function JoinPage() {
  const params = useSearchParams();
  const router = useRouter();
  const ref = params.get('ref') || '';
  const [username, setUsername] = useState('');

  function submit() {
    if (!username) {
      alert('username 입력');
      return;
    }
    router.push(`/u/${encodeURIComponent(username)}?ref=${encodeURIComponent(ref)}`);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>/join 가입 페이지</h1>

      {ref && (
        <p>
          추천 코드: <b>{ref}</b>
        </p>
      )}

      <input
        placeholder="username 입력"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: 8, marginRight: 8 }}
      />

      <button onClick={submit}>가입</button>
    </main>
  );
}
