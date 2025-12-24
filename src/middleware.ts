import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createSupabaseServer } from '@/lib/supabase-server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = await createSupabaseServer()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const pathname = req.nextUrl.pathname

  // =========================
  // PUBLIC ROUTES
  // =========================
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/auth/callback')
  ) {
    return res
  }

  // =========================
  // BELUM LOGIN → TENDANG
  // =========================
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // =========================
  // AMBIL ROLE USER
  // =========================
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  const role = profile?.role

  // =========================
  // ROLE GUARD
  // =========================
  if (pathname.startsWith('/client') && role !== 'client') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (pathname.startsWith('/seller') && role !== 'seller') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/client/:path*', '/seller/:path*', '/admin/:path*'],
}
