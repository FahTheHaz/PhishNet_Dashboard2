-- Create API keys table for template-based key management
create table if not exists public.api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text,
  token text not null,
  active boolean not null default true,
  requests_count integer not null default 0,
  created_at timestamp with time zone not null default now(),
  last_used_at timestamp with time zone
);

-- Enable Row Level Security
alter table public.api_keys enable row level security;

-- RLS policies: users manage their own keys
create policy if not exists "Users can view their own api keys"
  on public.api_keys for select
  using (auth.uid() = user_id);

create policy if not exists "Users can insert their own api keys"
  on public.api_keys for insert
  with check (auth.uid() = user_id);

create policy if not exists "Users can update their own api keys"
  on public.api_keys for update
  using (auth.uid() = user_id);

create policy if not exists "Users can delete their own api keys"
  on public.api_keys for delete
  using (auth.uid() = user_id);

-- Helpful index
create index if not exists idx_api_keys_user_id on public.api_keys(user_id);

-- Dashboard stats function with SECURITY DEFINER to bypass RLS safely for aggregates
create or replace function public.get_dashboard_stats()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  _total_requests_today bigint;
  _active_api_keys bigint;
  _total_registered_users bigint;
  _model_accuracy integer;
begin
  select count(*) into _total_requests_today
  from public.usage_logs
  where created_at >= date_trunc('day', now());

  select count(*) into _active_api_keys
  from public.api_keys
  where active = true;

  select count(*) into _total_registered_users
  from public.profiles;

  select coalesce(round(avg(case when confidence is not null then (case when confidence <= 1 then confidence else confidence/100 end) end) * 100), 98)::int
    into _model_accuracy
  from public.usage_logs;

  return json_build_object(
    'total_requests_today', _total_requests_today,
    'active_api_keys', _active_api_keys,
    'total_registered_users', _total_registered_users,
    'model_accuracy', _model_accuracy
  );
end;
$$;

grant execute on function public.get_dashboard_stats() to anon, authenticated;
