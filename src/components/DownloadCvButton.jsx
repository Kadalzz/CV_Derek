export default function DownloadCvButton({ className = '', children = 'Download CV (PDF)', ...rest }) {
  return (
    <a className={className} href="/derek-watson-cv.pdf" download="Derek-Watson-CV.pdf" {...rest}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M7 1v8m0 0L4 6.3M7 9l3-2.7M2 10.5V12a1 1 0 001 1h8a1 1 0 001-1v-1.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </a>
  );
}
