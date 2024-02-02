import React from "react";
import { User, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users"
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getUsers();
  return (
    <section className="p-24">
      <div className="container">
        <h1 className="xt-3xl font-boltd">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
