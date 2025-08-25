export default function Home() {
  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#333'
        }}>
          Hello World!
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#666'
        }}>
          Welcome to Next.js 14
        </p>
      </div>
    </main>
  );
}
