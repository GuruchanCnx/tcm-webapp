export default function LanguageToggle() {
  return (
    <button
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'rgba(248, 244, 240, 0.9)',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        zIndex: 1000,
      }}
    >
      English
    </button>
  )
}
