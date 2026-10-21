import BusinessCard from "@/components/BusinessCard";
import { card } from "@/data/card";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-start justify-center sm:items-center sm:px-6 sm:py-12">
      <BusinessCard data={card} />
    </main>
  );
}
