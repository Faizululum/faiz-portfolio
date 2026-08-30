import { Metadata } from "next";
import AllWorkPage from "./AllWork";

export const metadata: Metadata = {
  title: "My Work | Faizul Ulum",
  description: "Kumpulan proyek web development, UI/UX, dan aplikasi mobile yang pernah saya kerjakan.",
};

export default function WorkPage() {
  return <AllWorkPage />;
}