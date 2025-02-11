import { useState } from "react";
import Form from "@/components/Form";
import Ticket from "@/components/Ticket";

export default function Home() {
  const [user, setUser] = useState<{ fullName: string; email: string; avatar: string } | null>(null);

  const handleFormSubmit = (data: { fullName: string; email: string; avatar: string }) => {
    setUser(data); // Captures form data and set it for ticket generation
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conference Ticket Generator</h1>
      <Form onSubmit={handleFormSubmit} />
      <Ticket user={user} />
    </div>
  );
}