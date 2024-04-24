
--
--

create table if not exists users (

  id uuid default uuid_generate_v4() primary key,

  password varchar not null,
  password_expiry timestamptz not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(100) not null unique,
  email_verified  boolean default false,
  image_url varchar,
  company_name varchar(50),


  deleted boolean default false,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp

);

--
--

create table if not exists roles (

  id uuid default uuid_generate_v4() primary key,
  title varchar(50) not null unique,

  deleted boolean default false,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp


);

--
--

create table if not exists user_roles (

  user_id uuid,
   constraint fk_user_roles_users
    foreign key(id)
      references users(id),


  role_id uuid,
   constraint fk_user_roles_roles
    foreign key(id)
      references roles(id),


  primary key(user_id, role_id)
);

