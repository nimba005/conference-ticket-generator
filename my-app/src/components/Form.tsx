import { useState, useEffect } from "react";

interface FormProps {
  onSubmit: (data: { fullName: string; email: string; avatar: string }) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    if (savedData) setFormData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName) errors.fullName = "Full name is required.";
    if (!formData.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format.";
    if (!formData.avatar) errors.avatar = "Avatar URL is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block font-medium">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="avatar" className="block font-medium">Avatar URL (Cloudinary)</label>
        <input
          type="text"
          id="avatar"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.avatar && <p className="text-red-500">{errors.avatar}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
}