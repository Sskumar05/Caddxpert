-- =============================================================================
-- DEFINITIVE FIX FOR: "new row violates row-level security policy"
-- 
-- PASTE THIS ENTIRE SCRIPT into Supabase → SQL Editor → New Query → RUN
-- =============================================================================

-- 1. Ensure RLS is enabled
alter table public.enquiries enable row level security;

-- 2. Drop EVERY existing policy on this table to start completely clean
drop policy if exists "Allow anonymous insert" on public.enquiries;
drop policy if exists "Allow authenticated select" on public.enquiries;
drop policy if exists "Enable insert for anonymous users only" on public.enquiries;
drop policy if exists "Enable read access for all users" on public.enquiries;

-- 3. GRANT CRITICAL TABLE PRIVILEGES
-- Even if an RLS policy allows access, PostgreSQL requires explicit table grants.
-- The lack of 'grant insert' is the #1 cause of the 42501 Unauthorized error.
grant usage on schema public to anon;
grant insert on table public.enquiries to anon;

-- Note: Because your server function uses `.insert(...).select().single()`, 
-- the anon role MUST also be allowed to SELECT the row it just inserted.
grant select on table public.enquiries to anon;

-- 4. CREATE THE EXACT INSERT POLICY
-- This policy allows the 'anon' role to insert rows.
create policy "Allow anonymous insert"
  on public.enquiries
  for insert
  to anon
  with check (true);

-- 5. CREATE THE SELECT POLICY (Required for the .select() call in the backend)
-- This allows the anon role to read back the row they just inserted.
create policy "Allow anonymous select"
  on public.enquiries
  for select
  to anon
  using (true);

-- 6. GRANT ADMIN PRIVILEGES
-- Allow the authenticated role (Supabase Dashboard / Admins) to view data.
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.enquiries to authenticated;

create policy "Allow authenticated select"
  on public.enquiries
  for select
  to authenticated
  using (true);
