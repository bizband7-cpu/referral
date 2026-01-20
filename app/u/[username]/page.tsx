import { notFound } from "next/navigation";

export default async function UserPage({
  params,
  searchParams,
}: {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ ref?: string }>;
}) {
  const { username } = await params;
  const { ref } = await searchParams;

  if (!username) return notFound();

  return (
    <main style={{ padding: 24 }}>
      <h1>{username}님의 홍보 페이지</h1>

      {ref && (
        <p>
          이 사용자는 <b>{ref}</b> 추천으로 가입했습니다.
        </p>
      )}

      <hr />

      <p>내 추천 링크</p>
      <code>/join?ref={username}</code>

      <div style={{ marginTop: 12 }}>
        <a href={`/join?ref=${encodeURIComponent(username)}`}>
          이 링크로 가입 유도하기
        </a>
      </div>
    </main>
  );
}
