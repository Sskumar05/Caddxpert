-- =============================================================================
-- INFYNUX Cadpoint Enquiry Form — Complete Supabase Setup
-- Run this ONCE in: Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================================

-- 1. Create the canonical table
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  mobile_number text not null,
  email text not null,
  course_interested text not null,
  message text,
  created_at timestamptz default now()
);

-- 2. Enable RLS on the table
alter table public.enquiries enable row level security;

-- 3. Drop existing policies to start clean
drop policy if exists "Allow anonymous insert" on public.enquiries;
drop policy if exists "Allow authenticated select" on public.enquiries;

-- 4. Grant required table privileges to the anon role
-- This is critical to prevent the 42501 HTTP 401 error.
grant usage on schema public to anon;
grant insert on table public.enquiries to anon;

-- 5. Create INSERT policy for the anon role
create policy "Allow anonymous insert"
  on public.enquiries
  for insert
  to anon
  with check (true);

-- 6. Create SELECT policy for authenticated role (e.g. Supabase Dashboard / Admins)
grant usage on schema public to authenticated;
grant select on table public.enquiries to authenticated;

create policy "Allow authenticated select"
  on public.enquiries
  for select
  to authenticated
  using (true);

-- =============================================================================
-- VERIFICATION:
-- 1. Table "enquiries" should exist.
-- 2. It should have 7 columns (id, student_name, mobile_number, email, course_interested, message, created_at).
-- 3. "RLS enabled" should be true.
-- 4. "Allow anonymous insert" policy should be visible.
-- 5. "Allow authenticated select" policy should be visible.
-- =============================================================================
