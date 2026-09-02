import { Metadata } from "next";
import AllWorkPage from "./AllWork";

export const metadata: Metadata = {
  title: "All My Work",
  description: "A comprehensive portfolio of web development, UI/UX design, and mobile app projects showcasing full-stack capabilities.",
};

export default function WorkPage() {
  return <AllWorkPage />;
}