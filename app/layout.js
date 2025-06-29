import './globals.css';
export const metadata = {
  title: 'Dr. Serena Blake, PsyD | Clinical Psychologist in Los Angeles',
  description: 'Compassionate, evidence-based therapy for anxiety, relationships, and trauma. Dr. Serena Blake offers in-person and virtual sessions to help you heal, grow, and thrive in a safe and supportive environment.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
