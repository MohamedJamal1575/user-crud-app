import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

let users: any[] = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newUser = { id: uuid(), ...data };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

export async function PUT(req: Request) {
  const data = await req.json();
  users = users.map(u => (u.id === data.id ? data : u));
  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  users = users.filter(u => u.id !== id);
  return NextResponse.json({ success: true });
}
