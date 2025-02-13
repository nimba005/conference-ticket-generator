interface TicketProps {
  user: { fullName: string; email: string; avatar: string } | null;
}

export default function Ticket({ user }: TicketProps) {
  return (
    user && (
      <div
        className="border p-4 mt-4 rounded-lg shadow-md"
        style={{
          width: "241px",
          height: "122px",
          flexShrink: "0",
          aspectRatio: "241 / 122",
          background: "url('<path-to-image>') lightgray 50% / cover no-repeat",
        }}
      >
        <h2 className="text-xl font-bold mb-2">Conference Ticket</h2>
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <img src={user.avatar} alt="User Avatar" className="w-32 h-32 rounded-full mt-4" />
      </div>
    )
  );
}