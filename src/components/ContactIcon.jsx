const icons = {
  linkedin: (
    <path
      d="M4 4.8h.01M3.2 6.8h1.8v6h-1.8v-6zm3.4 0h1.7v.85c.4-.6 1-.95 1.9-.95 1.5 0 2.4 1 2.4 2.75V12.8h-1.8V9.8c0-.9-.35-1.4-1.05-1.4-.7 0-1.15.5-1.15 1.4v3h-1.8v-6z"
      fill="currentColor"
    />
  ),
  email: (
    <path
      d="M2 4.5h12v7H2v-7zm0 0l6 4.5 6-4.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  whatsapp: (
    <path
      d="M8 2.5a5.5 5.5 0 00-4.7 8.3L2.5 13.5l2.8-.8A5.5 5.5 0 108 2.5zm2.9 7.6c-.15.4-.75.75-1.2.8-.3.05-.7.1-2.1-.5-1.75-.75-2.9-2.5-3-2.6-.1-.15-.7-.95-.7-1.8s.45-1.25.6-1.4c.15-.15.35-.2.45-.2h.35c.15 0 .3-.05.45.35l.55 1.35c.05.1.05.2 0 .3-.05.1-.1.2-.2.3l-.3.35c-.1.1-.2.2-.1.4.15.25.6.95 1.25 1.5.8.7 1.4.9 1.6 1 .2.1.3.1.4-.05l.5-.6c.15-.2.3-.15.45-.1l1.2.6c.15.05.25.1.3.15.05.1.05.5-.1.9z"
      fill="currentColor"
    />
  ),
};

export default function ContactIcon({ name }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
