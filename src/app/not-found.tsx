import Link from "next/link";

export default function NotFound() {
    return (
      <div className="mx-auto flex-1 flex flex-col justify-center items-center gap-4 max-w-7xl px-5 md:px-9">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="">
            This page does not exist
        </p>
        <Link href="/" className="font-bold">← Back to home</Link>
      </div>
    );
}