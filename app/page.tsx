import Image from "next/image";
import NewForm from "@/comps/NewForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Home</h3>
      <NewForm />
    </main>
  );
}
