import { NextResponse } from "next/server";
import type { NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (request) => {
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
