import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
    <main>
      <h1>
        about
      </h1>
      <Link href="/">Home</Link>
      <hr />
      <Link href="/contact">contact</Link>
    </main>
    </div>
  )
}
