import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};



export default nextConfig;

export async function redirects() {
  return [
    {
      source: "/contact",
      destination: "/#contact",
      permanent: true,
    },
  ];
}