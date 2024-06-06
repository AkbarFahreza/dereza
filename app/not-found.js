import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center align-middle items-center w-full min-h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
